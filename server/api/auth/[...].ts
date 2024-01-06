import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/credentials'

export default NuxtAuthHandler({
  pages: {
    signIn: '/',
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    // @ts-expect-error
    GithubProvider.default({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ]
})
