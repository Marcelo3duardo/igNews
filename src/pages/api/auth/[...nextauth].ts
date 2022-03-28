import { query as qry } from 'faunadb';

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

      authorization: {
        params: {
          scope: 'read:user',
        },
      },


    }),
    // ...add more providers here
  ],
  /*jwt: {
    signingKey: process.env.JWT_KEY,
  },*/
  callbacks: {
    async signIn({ user}) {
      console.log(user);
     const { email } = user
      try {
        await fauna.query(
          qry.Create(
            qry.Collection('user'),
            { data: { email } }
  
          )
        )
        return true
      } catch  {
        return false
      }
     
    }
  }
})