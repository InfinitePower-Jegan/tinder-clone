"use client"

import { signOut } from "next-auth/react"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"

export default function SignOutButton() {
  return (
    <div 
        onClick={() => signOut()}
        className="bg-black/60 hover:bg-black/50 p-2 rounded-full flex items-center justify-center cursor-pointer">
      <ArrowRightOnRectangleIcon className="h-6 w-6" />
    </div>
  )
}
