import Image from "next/image"

type UserAvatarProps = {
  photo: string
  name: string
}

export default function UserAvatar({ photo, name }: UserAvatarProps) {
  return (
    <div className="relative h-9 w-9">
      <Image src={photo} alt={name} fill={true} className="rounded-full object-cover" />
    </div>
  )
}
