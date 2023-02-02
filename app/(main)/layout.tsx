import Image from "next/image"
import "../globals.css"
import Header from "./Header"
import RegisterButton from "./RegisterButton"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="overflow-hidden">
        <div className="w-screen h-screen absolute -z-50">
          <Image
            src="/tinder-background.jpg"
            alt="Background Image"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="w-screen h-screen flex flex-col space-y-10 pt-8 px-8 text-center italic lg:not-italic items-center justify-center bg-gradient-to-b from-black via-black/30 to-black/30 -z-40 absolute">
          <h1 className="text-5xl lg:text-8xl font-bold text-white">Passar Para a Direita</h1>
          <RegisterButton />
        </div>
        <Header />
        {children}
      </body>
    </html>
  )
}
