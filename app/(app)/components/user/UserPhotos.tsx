"use client"

import Image from "next/image"
import { useState } from "react"
import ImageStepView from "../ImageStepView"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

type UserPhotosProps = {
  photos: string[]
}

const UserPhotos: React.FC<UserPhotosProps> = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const selectedPhoto = photos[selectedPhotoIndex]

  const previusPhoto = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex((index) => index - 1)
    }
  }
  const nextPhoto = () => {
    if (selectedPhotoIndex < photos.length - 1) {
      setSelectedPhotoIndex((index) => index + 1)
    }
  }

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-[300px]">
        <Image
          src={selectedPhoto}
          alt="User photo"
          fill={true}
          className="rounded-t-xl object-cover"
        />
      </div>
      <ImageStepView photos={photos} selectedIndex={selectedPhotoIndex} />
      {photos.length > 1 && (
        <div className="absolute top-0 w-full h-full flex items-center justify-between text-white p-2">
          {selectedPhotoIndex > 0 && (
            <div
              onClick={previusPhoto}
              className="cursor-pointer w-full h-full flex items-center justify-start"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </div>
          )}

          {selectedPhotoIndex < photos.length - 1 && (
            <div
              onClick={nextPhoto}
              className="cursor-pointer w-full h-full flex items-center justify-end"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default UserPhotos
