import Image from "next/image"
import Link from "next/link"
import LoginButton from "./LoginButton"
import { Bars3Icon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between sticky z-20 px-8">
      <div className="relative h-14 w-28 lg:h-20 lg:w-40">
        <Image
          className="invert grayscale brightness-0"
          src="/tinder-logo-text.png"
          fill={true}
          alt="Tinder"
        />
      </div>

      <button className="group">
        <button className="lg:hidden text-white transition-colors hover:bg-white/10 rounded-full p-2 cursor-pointer group/menu">
          <Bars3Icon className="h-6 w-6" />
        </button>

        <div className="hidden group-hover:flex lg:flex items-center space-x-8">
          <HeaderLink href="feature/swipe" text="Produtos" />
          <HeaderLink href="about" text="Saber main" />
          <HeaderLink href="safety" text="Segurança" />
          <HeaderLink href="https://www.help.tinder.com/hc?utm_source=web" text="Suporte" />
          <HeaderLink href="https://tinder.com/pt-PT/download" text="Descarregar" />
          <LoginButton />
        </div>
      </button>
    </header>
  )
}

type HeaderLinkProps = {
  href: string
  text: string
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, text }) => {
  return (
    <Link href={href} className="text-white hover:text-red-600 hover:underline hover:decoration-red-600 font-semibold text-xl">
      {text}
    </Link>
  )
}
