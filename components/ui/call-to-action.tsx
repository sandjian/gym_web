"use client";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurButton from "./blur-button";
import { CTAData } from "@/lib/constants";





const CTA=({
  title=CTAData.title,
  description=CTAData.description,
  textButton=CTAData.textaccion2
}) => {
  return (
    <div className="w-full py-20 lg:py-10 px-3 md:px-8">
      <div className="container mx-auto max-w-7xl rounded-2xl size-full bg-cover bg-center [background-image:url('/bgg.svg')] border border-neutral-700 py-6">
        
            <div className="relative overflow-hidden  p-4 lg:p-14 gap-8  flex flex-col items-center">
              <div className="pointer-events-none absolute inset-0  z-0" />
              <div className=" z-10 flex flex-col text-center gap-8 w-full max-w-2xl">
                <h3 className="font-bold text-3xl md:text-5xl  text-neutral-300">
                  {title}
                </h3>
                <p className="text-lg  text-neutral-400">
                  {description}
                </p>
                <div className="flex flex-row justify-center gap-4">
                  <BlurButton />
                  <Button className="gap-4 text-slate-200 font-semibold hover:text-yellow-700">
                    {textButton} <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

            </div>
            
      </div>
    </div>
  )
}
export {CTA}