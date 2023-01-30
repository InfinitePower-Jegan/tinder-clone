"use client"

import { XMarkIcon, HeartIcon } from "@heroicons/react/24/solid"

type ActionButtonProps = {
  type: "not_interested" | "interested"
  onClick: () => void
}

const ActionButton: React.FC<ActionButtonProps> = ({ type, onClick }) => {
  return (
    <div
        className="border-2 border-gray-100 rounded-full p-3 cursor-pointer hover:bg-gray-100"
        onClick={onClick}>
      {type === "not_interested" ? (
        <XMarkIcon className="h-8 w-8 text-red-600" />
      ) : (
        <HeartIcon className="h-8 w-8 text-emerald-500" />
      )}
    </div>
  )
}

const ActionButtons: React.FC = () => {
  return (
    <div className="flex w-full space-x-8 items-center justify-center">
      <ActionButton type="not_interested" onClick={() => console.log("not interested")} />
      <ActionButton type="interested" onClick={() => console.log("interested")} />
    </div>
  )
}

export default ActionButtons
