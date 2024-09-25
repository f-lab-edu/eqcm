import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';

const handler = NextAuth({
  pages: {
    signIn: 'login',
  },
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      console.log('profile', profile);

      if (profile && profile.message !== 'success') {
        return false;
      }

      const {
        response: { id, gender, email, mobile, name, birthday, birthyear },
      } = profile;

      const joinRequest = {
        email,
        gender,
        name,
        birthday: `${birthyear}-${birthday}`,
        phoneNumber: mobile,
      };

      const body = {
        joinRequest,
        socialProviderType: 'NAVER',
        socialId: id,
      };

      try {
        // TODO: socialId로 기존 유저인지 체크

        // 1) 기존 유저라면 로그인 api 연동
        console.log('naver signIn', body);

        // 2) 기존 유저 아니라면 추가 정보 받고나서 로그인이 필요함 (약관 동의)
        return true;
      } catch (error) {
        console.log('social login error', body);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
