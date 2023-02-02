import { XCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import GoogleLoginButton from "./GoogleLoginButton"

export default function LoginPage() {
  return (
    <div className="overflow-hidden z-50 absolute w-screen h-screen top-0 flex items-center justify-center bg-black/50">
      <div className="h-full w-full lg:w-96 bg-white flex flex-col p-2 items-center space-y-6">
        <Link href="/" className="place-self-end">
          <XCircleIcon className="w-12 h-12 cursor-pointer text-gray-500 transition-transform hover:-rotate-90" />
        </Link>

        <Image src="/tinder-logo.png" alt="Tinder logo" width={60} height={60} />

        <p className="text-gray-900 font-bold text-2xl italic">COMEÇAR</p>

        <div className="px-8 space-y-6 flex flex-col items-center">
          <p className="text-sm">
            Ao clicar em Inicie Sessão, aceita os nossos{" "}
            <LinkDescription href="https://policies.tinder.com/terms?lang=pt-PT">
              Termos e Condições
            </LinkDescription>
            . Saiba mais sobre como tratamos as suas informações pessoas na nossaa{" "}
            <LinkDescription href="https://policies.tinder.com/privacy?lang=pt-PT">
              {" "}
              Política de Privacidade{" "}
            </LinkDescription>{" "}
            e{" "}
            <LinkDescription href="https://policies.tinder.com/cookie-policy?lang=pt-PT">
              {" "}
              Política de Cookies.
            </LinkDescription>
          </p>

          <GoogleLoginButton />
          <LinkDescription href="/help"> Dificuldades em iniciar sessão?</LinkDescription>

          <div className="h-[1px] w-full bg-gray-300" />

          <p className="text-2xl font-bold italic text-gray-800">OBTENHA A APLICAÇÃO!</p>

          <div className="w-full flex items-center justify-between space-x-8">
            <div className="relative h-12 w-full">
              <Image
                src="https://tinder.com/static/build/457bac4b2fee60691f571076d56a6d9a.png"
                alt="App store app"
                fill={true}
              />
            </div>
            <div className="relative h-20 w-full">
              <Image
                src="https://tinder.com/static/build/5db7c8d7aee1fc899553481b95cddeb3.png"
                alt="Google play app"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type LinkDescriptionProps = {
  href: string
  children: ReactNode
}

const LinkDescription: React.FC<LinkDescriptionProps> = ({
  href,
  children,
}: LinkDescriptionProps) => {
  return (
    <Link
      href={href}
      className="text-gray-600 font-bold cursor-pointer underline hover:no-underline"
    >
      {children}
    </Link>
  )
}
