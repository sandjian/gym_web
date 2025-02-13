"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { FOOTER_LINKS } from "@/lib/constants";

function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 text-neutral-200 w-full max-w-7xl m-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Primera columna (Logo y detalles) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8" />
              <h2 className="text-lg font-bold text-white">
                TABATA Fitness Club
              </h2>
            </Link>

            <h1 className="text-neutral-300 mt-4">
              Built by{" "}
              <span className="text-yellow-700">
                <Link href="https://x.com/arihantCodes">@AlejandroSandjian</Link>
              </span>
            </h1>

            <p className="text-sm text-neutral-500 mt-5">
              © {new Date().getFullYear()} TABATA Fitness Club. All rights reserved.
            </p>
          </div>

          {/* Secciones del footer mapeadas dinámicamente */}
          <div className="grid grid-cols-3 gap-8 text-center md:text-left">
            {FOOTER_LINKS.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-neutral-400  font-semibold hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex mt-24 items-center justify-center">
        <h1 className="text-center text-[8rem] md:text-[15rem] lg:text-[20rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-black-100 via-black-200 to-black-100 select-none">
          TABATA
        </h1>
      </div>
    </footer>
  );
}

export { Footer };
