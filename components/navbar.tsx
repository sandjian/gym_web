"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Icons } from "./ui/icons";
import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "@/lib/constants";

import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  type IconProps,
} from "@tabler/icons-react";
import TopGradientButton from "./ui/top-gradient-button";

function getSocialIcon(iconName: string, props?: IconProps) {
  switch (iconName) {
    case "TwitterIcon":
      return <IconBrandTwitter {...props} />;
    case "FacebookIcon":
      return <IconBrandFacebook {...props} />;
    case "InstagramIcon":
      return <IconBrandInstagram {...props} />;
    case "TiktokIcon":
      return <IconBrandTiktok {...props} />;
    default:
      return null;
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: globalThis.MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
    exit: { x: "100%" },
  };

  return (
    <nav className="absolute top-0 left-0 z-50 w-full text-white px-2 py-2">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="icon-class w-8" />
          <h2 className="text-2xl font-semibold text-white">TABATA</h2>
        </Link>

        {/* Sección Enlaces + Redes (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 ">
          {/* Enlaces de NAV_LINKS en Desktop */}
          <ul className="flex gap-6 mr-6">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === pathname;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      hover:text-white font-extralight
                      ${isActive ? "text-white font-semibold text-lg" : "text-zinc-400 font-semibold text-lg"}
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <TopGradientButton/>

          
        </div>

        {/* Icono hamburguesa (Mobile) */}
        

          <button
            className="block  lg:hidden focus:outline-none"
            onClick={handleToggleMenu}
          >
            <svg
              className="w-6 h-6 fixed top-7 right-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        
      </div>

      <motion.div
        ref={menuRef}
        className="
          fixed top-0 right-0 h-screen
          w-[300px]  
         bg-cover bg-center [background-image:url('/bgg.svg')] shadow-lg shadow-neutral-400 border border-neutral-600 text-white
          rounded-tl-2xl
          flex flex-col
          z-50
        "
        variants={menuVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        exit="exit"
        
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="p-4 flex items-center justify-between gap-4">

          <Link href="/" className="flex  gap-2">
            <Icons.logo className="icon-class w-8" />
            <h2 className="text-2xl font-bold text-white">TABATA</h2>
          </Link>


          <button className="focus:outline-none" onClick={handleToggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>


        </div>

        <div className="flex-1 overflow-y-auto flex flex-col px-4 mt-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="space-y-2 ml-4">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === pathname;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`block font-semibold hover:text-white ${isActive ? " text-neutral-100" : "text-neutral-500 "
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider text-white">
              Legal & FAQ
            </h3>
            <ul className="space-y-2 ml-4">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block font-semibold hover:text-white text-neutral-500 "
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 border-t border-yellow-600 mt-auto">
          <h3 className="text-sm font-semibold mb-2 uppercase tracking-wider text-white">
            Síguenos
          </h3>
          <div className="flex gap-4 py-3 ml-4">
            {SOCIAL_LINKS.map((social) => (
              <button
                key={social.name}
                onClick={() => window.open(social.href, "_blank")}
                className="text-neutral-400 hover:text-white"
              >
                {getSocialIcon(social.icon, { size: 24 })}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}
