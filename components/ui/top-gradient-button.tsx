import { IconArrowBigRightLines } from '@tabler/icons-react'
import React from 'react'

export default function TopGradientButton() {
  return (
    <button className="  px-6 py-3 rounded-xl relative bg-black-200/60 text-white text-sm font-semibold hover:shadow-xl hover:shadow-yellow-800/[0.4] transition duration-200 border border-neutral-800">
    <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
    <div className='flex justify-between items-center'>

      <span className="relative z-20">
        Inscribite AHORA
      </span>
      <IconArrowBigRightLines className="ml-6 w-4 h-4" />
    </div>
  </button>
  )
}
