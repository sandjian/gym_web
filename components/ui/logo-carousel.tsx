"use client"

import { Marquee } from "@/components/ui/marquee";
import { LogoSectionData } from "@/lib/constants";
import Image from "next/image";

interface company {
  url: string;
  name: string;
}

interface LogoProps {
  title?: string;
  companies?: company[];
}

export const LogosCompanies=({
  title=LogoSectionData.title,
  companies=LogoSectionData.companies,
}:LogoProps) =>{
  return (
    <div id="logos">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 md:px-8 pt-16">
        <h3 className="text-center text-sm font-semibold text-yellow-600">
          {title}
        </h3>
        <div className="relative mt-10">
          <Marquee className="max-w-full [--duration:50s]">
            {companies.map((companies, idx) => (
              <Image
                key={idx}
                width={170}
                height={140}
                src={companies.url}
                className="h-47 w-86 opacity-30 grayscale brightness-0 invert"
                alt={companies.name}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
}
