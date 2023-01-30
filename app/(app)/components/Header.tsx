import Image from "next/image"
import {
  BriefcaseIcon,
  ShieldCheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/solid"
import { users } from "@/test/data/testFakeUsers"

const getLocalUser = async (): Promise<User> => {
  const user: User = users[0]

  return new Promise((resolve) => resolve(user))
}

export default async function Header() {
  const user = await getLocalUser()

  return (
    <header className="text-white flex items-center px-4 justify-between w-96 h-20 bg-gradient-to-r from-[#fd267a] to-[#ff6036]">
      <div className="flex items-center justify-center space-x-2">
        <div className="relative h-9 w-9">
          <Image
            src={user.photos[0]}
            alt={user.name}
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
        <p className="text-lg font-semibold">{user.name}</p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <HeaderButton Icon={DocumentMagnifyingGlassIcon} />
        <HeaderButton Icon={BriefcaseIcon} />
        <HeaderButton Icon={ShieldCheckIcon} />
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
    <div className="bg-black/60 p-2 rounded-full flex items-center justify-center cursor-pointer">
      <Icon className="h-6 w-6" />
    </div>
  )
}
