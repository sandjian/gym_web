import { IconBrandWhatsapp } from '@tabler/icons-react'
import React from 'react'

export default function BlurButton() {
  return (
    <button className=" flex items-center justify-center font-semibold text-lg  hover:shadow-lg hover:border-yellow-700 hover:shadow-yellow-600 border border-neutral-400 px-8 py-2 bg-black-100 rounded-xl text-white  transition duration-300 ease-linear">
        Contactanos <IconBrandWhatsapp className="ml-6 w-6 h-6" />
      </button>

  )
}
