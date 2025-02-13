"use client"

import React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: string[]
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-10 w-10 rounded-full border-2 border-white"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black-200 text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800">
        +{numPeople}
      </div>
    </div>
  )
}

export { AvatarCircles } 
