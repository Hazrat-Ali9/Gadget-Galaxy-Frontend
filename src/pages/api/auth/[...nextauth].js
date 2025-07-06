import NextAuth from "next-auth";

export const authOptions = {
  providers: [
  ],
  // pages: {
  //   signIn: "/sign-in"
  // }
};

export default NextAuth(authOptions);
