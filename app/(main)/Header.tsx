import Image from "next/image"
import Link from "next/link"
import LoginButton from "./LoginButton"

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between sticky z-50 px-8">
      <div className="flex items-center space-x-8">
        <Image 
          className="invert grayscale brightness-0"
          src="/tinder-logo-text.png" height={75} width={150} alt="Tinder" />
        <HeaderLink href="feature/swipe" text="Produtos" />
        <HeaderLink href="about" text="Saber main" />
        <HeaderLink href="safety" text="Segurança" />
        <HeaderLink href="https://www.help.tinder.com/hc?utm_source=web" text="Suporte" />
        <HeaderLink href="https://tinder.com/pt-PT/download" text="Descarregar" />
      </div>
      <div>
        <LoginButton />
      </div>
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
