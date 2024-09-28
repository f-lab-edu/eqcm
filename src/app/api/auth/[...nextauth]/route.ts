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
      if (!profile) {
        throw new Error();
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((profile as any).message !== 'success') {
        return false;
      }

      const {
        response: { id, gender, email, mobile, name, birthday, birthyear },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } = profile as any;

      const joinRequest = {
        email,
        gender: gender === 'F' ? 'FEMALE' : 'MALE',
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
        // TODO: social login api 연동
        console.log('naver signIn', body);
        return true;
      } catch (error) {
        console.log('social login error', body);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
