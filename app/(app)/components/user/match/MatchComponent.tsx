import { users } from "@/test/data/testFakeUsers"
import Image from "next/image"

type MatchComponentProps = {
  match: Match
}

const getOtherUser = (match: Match): Promise<User> => {
  const otherUserUid = match.uids.filter((uid) => uid !== "a")[0]
  const user = users.find((u) => u.uid === otherUserUid)

  return new Promise((resolve, reject) => {
    user ? resolve(user) : reject("User not found")
  })
}

export default async function MatchComponent({ match }: MatchComponentProps) {
  const user = await getOtherUser(match)

  return (
    <div className="relative w-full h-40 cursor-pointer hover:scale-105">
      <div className="relative w-full h-full">
        <Image src={user.photos[0]} alt={user.name} fill={true} className="rounded-md object-cover" />
      </div>
      <div className="absolute w-full h-full bg-black/50 hover:bg-black/30 rounded-md top-0 z-10 flex items-end p-2">
        <p className="relative text-white">{user.name}</p>
      </div>
    </div>
  )
}
