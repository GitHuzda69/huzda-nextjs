import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { connectDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  console.log(credentials);
  try {
    connectDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error(err);
    }

    const passwordCheck = await bcrypt.compare(credentials.password, user.password);
    if (!passwordCheck) {
      throw new Error(err);
    }
    return user;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log(user, account, profile);
      if (account.provider === "github") {
        connectDb();
        try {
          const userCheck = await User.findOne({ email: profile.email });
          if (!userCheck) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              displayname: profile.name,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      return true;
    },
  },
});