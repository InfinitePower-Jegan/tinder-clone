import Link from "next/link"

const RegisterButton: React.FC = () => {
  return (
    <Link
      href="/app"
      className="font-bold rounded-full text-lg text-white py-2 px-20 bg-gradient-to-r from-[#fd267a] to-[#ff6036]"
    >
      Criar Conta
    </Link>
  )
}

export default RegisterButton