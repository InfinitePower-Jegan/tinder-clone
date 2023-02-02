"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

const googleProviderId = "google"

const GoogleLoginButton: React.FC = () => {
  const signInUser = () => {
    signIn(googleProviderId, {
      callbackUrl: `${process.env.VERCEL_URL || "https://localhost:3000"}/app`,
    })
  }

  return (
    <button
      onClick={signInUser}
      className="rounded-full p-1 cursor-pointer bg-blue-600 transition-colors hover:bg-blue-500 text-white flex items-center w-full"
    >
      <div className="relative w-8 h-8 bg-white rounded-full">
        <Image src="/google-logo.jfif" alt="Google logo" fill={true} className="rounded-full p-1" />
      </div>
      <p className="font-semibold text-sm flex-1 text-center">Continuar com o Google</p>
    </button>
  )
}

export default GoogleLoginButton
