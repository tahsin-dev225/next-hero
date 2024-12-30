import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";


export const authOptions = {
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60,
    },
    providers :[
        CredentialProvider({
            credentials : {
                email : {label : "Email", type : "text", required : true, placeholder : "Your Email"},
                password : {label : "password", type : "password", required : true, placeholder : "Your password"},
            },
            async authorize (credentials){
                const {email , password} = credentials;
                if(!credentials){
                    return null
                }
                if(email){
                    const db = await connectDB();
                    const currentUser = await db.collection('users').findOne({email});
                    console.log(currentUser)
                    // const currentUser = users.find(user => user.email === email)

                    if(currentUser){
                        if(currentUser.password === password){
                            return currentUser;
                        }
                    }
                }
                return null;
            }

        }),

        // GoogleProvider({
        //     clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        //   }),

        // FacebookProvider({
        // clientId: process.env.FACEBOOK_CLIENT_ID,
        // clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        // }),

        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
          })
    ],

    callbacks : {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.type = user.type
            }
            return token
          },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        },

    }
}
const handler = NextAuth(authOptions)

const users = [
    {
        id : 1,
        name : "mehedi",
        email : "m@gmail.com",
        type : "admin",
        password : "asdfasdf",
        image : "https://picsum.photos/200/300"
    },
    {
        id : 2,
        name : "mehef",
        email : "ma@gmail.com",
        type : "modarator",
        password : "asdfasdf",
        image : "https://picsum.photos/200/300"
    },
    {
        id : 3,
        name : "fahedi",
        email : "md@gmail.com",
        type : "member",
        password : "asdfasdf",
        image : "https://picsum.photos/200/300"
    },
]

export {handler as GET , handler as POST}