"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { featuresCards } from "@/lib/constants"
import {
  IconBell,
  IconUserCheck,
  IconToolsKitchen2,
  IconHourglassLow,
  IconUsersGroup,
  IconSalad,
  IconDiscount2,
  IconBabyCarriage,
  IconHelp,
} from "@tabler/icons-react"


const tablerIconsMap: Record<string, React.ReactNode> = {
  IconDumbbell: <IconBell />,
  IconUserCheck: <IconUserCheck />,
  IconToolsKitchen2: <IconToolsKitchen2 />,
  IconHourglassLow: <IconHourglassLow />,
  IconUsersGroup: <IconUsersGroup />,
  IconSalad: <IconSalad />,
  IconDiscount2: <IconDiscount2 />,
  IconBabyCarriage: <IconBabyCarriage />,

  default: <IconHelp />,
}

export function FeaturesCardsHover() {
  return (
    <div className="relative max-w-7xl mx-auto w-full p-3">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 px-2 bg-black-200/20 rounded-2xl border border-neutral-700 ">
        {featuresCards.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      
    </div>
  )
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: string 
  index: number
}) {
  const TablerIcon = tablerIconsMap[icon] || tablerIconsMap.default

  return (
    <div
      className={cn(
        "flex flex-col  py-10 relative group/feature",
        (index === 0 || index === 4) && "",
        index < 4 && ""
      )}
    >
      {/* Gradientes de overlay al hover */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-1000 absolute inset-0 h-full w-full bg-gradient-to-t from-transparent via-black-100Sa to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-1000 absolute inset-0 h-full w-full bg-gradient-to-b from-zinc-800 to-transparent pointer-events-none" />
      )}

      {/* Icono */}
      <div className="mb-4 relative z-10 px-10 text-green-600 text-2xl">
        {TablerIcon}
      </div>

      {/* Titulo */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-12 w-2 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-yellow-700 transition-all duration-1000 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-300">
          {title}
        </span>
      </div>

      {/* Descripción */}
      <p className="text-sm text-neutral-200 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
