import Link from "next/link"

const LoginButton: React.FC = () => {
  return (
    <Link
      href="/auth/signin"
      className="font-bold bg-white hover:bg-gray-100 rounded-full text-lg text-black py-2 px-4"
    >
      Inicie Sessão
    </Link>
  )
}

export default LoginButton