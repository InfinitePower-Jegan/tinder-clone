import {
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid"
import UserAvatar from "./UserAvatar"
import SignOutButton from "./SignOutButton"
import { getServerSession } from "next-auth"
import { randomUUID } from "crypto"

const getLocalUser = async (): Promise<User> => {
  const session = await getServerSession()

  if (!session?.user) {
    throw new Error("User is not logged in")
  }

  const user: User = {
    name: session.user.name || "Tinder user",
    photos: [
      session.user.image ||
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    age: 18,
    uid: session.user.email || randomUUID()
  }

  return new Promise((resolve) => resolve(user))
}

export default async function Header() {
  const user = await getLocalUser()

  return (
    <header className="text-white flex items-center px-4 justify-between w-96 h-20 bg-gradient-to-r from-[#fd267a] to-[#ff6036]">
      <div className="flex items-center justify-center space-x-2">
        {/* @ts-ignore */}
        <UserAvatar photo={user.photos[0]} name={user.name} />
        <p className="text-lg font-semibold">{user.name}</p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <HeaderButton Icon={DocumentMagnifyingGlassIcon} />
        <HeaderButton Icon={BriefcaseIcon} />
        {/*<HeaderButton Icon={ShieldCheckIcon} /> */}
        <SignOutButton />
      </div>
    </header>
  )
}

type HeaderButtonProps = {
  Icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }
  >
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ Icon }) => {
  return (
    <div className="bg-black/60 hover:bg-black/50 p-2 rounded-full flex items-center justify-center cursor-pointer">
      <Icon className="h-6 w-6" />
    </div>
  )
}
