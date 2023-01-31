import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

const auth0ClientId = process.env.AUTH0_CLIENT_ID
const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET

if (!auth0ClientId || !auth0ClientSecret) {
    throw new Error("Auth 0 client id or client secret not provided")
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
        clientId: auth0ClientId,
        clientSecret: auth0ClientSecret
      })
  ]
}

export default NextAuth(authOptions)
