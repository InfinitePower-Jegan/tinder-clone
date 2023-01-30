import { users } from "@/test/data/testFakeUsers"
import ActionButtons from "../components/user/ActionButtons"
import UserPhotos from "../components/user/UserPhotos"

const getRandomUser = async (): Promise<User> => {
  // Random user in users array
  const user = users[Math.floor(Math.random() * users.length)]

  return new Promise((resolve) => resolve(user))
}

export default async function page() {
  const user = await getRandomUser()

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="w-96 bg-white rounded-xl shadow-lg">
        <UserPhotos photos={user.photos} />
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold text-gray-700">
            {user.name}, {user.age}
          </h2>
          <ActionButtons />
        </div>
      </div>
    </main>
  )
}
