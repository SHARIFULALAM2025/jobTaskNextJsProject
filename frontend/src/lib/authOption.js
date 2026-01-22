import GoogleProvider from "next-auth/providers/google";

import CredentialsProvider from "next-auth/providers/credentials"
import { loginUser } from "./LoginUser";
import NextAuth from "next-auth";



export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                const user = await loginUser(credentials)
                return user
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };