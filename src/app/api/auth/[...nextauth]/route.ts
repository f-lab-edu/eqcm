import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import NaverProvider, { NaverProfile } from 'next-auth/providers/naver';
import axios from 'axios';
import { SOCIAL_PROVIDER } from '@/constants/common';
import { EmailLoginType, JoinBodyType, SocialLoginType } from '@/types/join';
import { LoginResponse } from '@/types/response';

async function fetchNaverAgreement(accessToken: string) {
  try {
    const instance = axios.create({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const agreementResponse = await instance.get(
      'https://openapi.naver.com/v1/nid/agreement',
    );
    return agreementResponse.data.agreementInfos;
  } catch (error) {
    throw new Error('Failed to fetch agreement info');
  }
}

async function fetchSocialJoin(body: JoinBodyType) {
  try {
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_SERVER + '/join/social',
      body,
    );
    console.log('fetchJoinSocial', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch social join');
  }
}

async function fetchSocialLogin(body: SocialLoginType) {
  try {
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_SERVER + '/login/social',
      body,
    );
    console.log('fetchLoginSocial', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch social login');
  }
}

async function fetchEmailLogin(body: EmailLoginType) {
  try {
    const response = await axios.post<LoginResponse>(
      process.env.NEXT_PUBLIC_API_SERVER + '/login/email',
      body,
    );
    console.log('fetchEmailLogin', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch email login');
  }
}

declare module 'next-auth' {
  interface User {
    accessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpires: number;
  }
}

const handler = NextAuth({
  pages: {
    signIn: 'login',
  },
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.error('Email or password not provided');
          return null;
        }

        try {
          const { email, password } = credentials;
          const data = await fetchEmailLogin({ email, password });

          const user = {
            id: email,
            email,
            password,
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
          };
          console.log('credential user', user);
          return user;
        } catch (error) {
          console.error('Error in authorize function', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ profile, account, user }) {
      if (account?.provider === 'credentials') {
        if (user.accessToken && user.refreshToken) return true;
        return false;
      }

      if (!profile) {
        throw new Error('Profile is missing');
      }

      if ((profile as NaverProfile).message !== 'success') {
        return false;
      }

      const {
        response: { id, gender, email, mobile, name, birthday, birthyear },
      } = profile as NaverProfile;

      const joinInfo = {
        email,
        gender: gender === 'F' ? 'FEMALE' : 'MALE',
        name,
        birthday: `${birthyear}-${birthday}`,
        phoneNumber: mobile,
      };

      const body = {
        joinInfo,
        socialProviderType: SOCIAL_PROVIDER.NAVER,
        socialId: id,
        termsAgreements: [],
      };

      if (!account?.access_token) {
        throw new Error('Access token is missing');
      }

      try {
        const agreementInfos = await fetchNaverAgreement(account?.access_token);

        const termsAgreements = agreementInfos.map(
          (agreement: { termCode: string }) => ({
            type: agreement.termCode.toUpperCase(),
            agreeYn: 'Y',
          }),
        );

        body.termsAgreements = termsAgreements;

        let data = await fetchSocialJoin(body);

        if (data.code === '403') {
          if (!email) {
            return false;
          }
          const body = {
            email: email,
            socialProviderType: SOCIAL_PROVIDER.NAVER,
            socialId: id,
          };
          data = await fetchSocialLogin(body);
        }

        user.accessToken = data.data.accessToken;
        user.refreshToken = data.data.refreshToken;
        return true;
      } catch (error) {
        console.log('social login error', error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: Date.now() + 3600 * 1000,
        };
      }

      if (token.accessTokenExpires && Date.now() < token.accessTokenExpires) {
        return token;
      }

      // TODO: refresh AccessToken
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
