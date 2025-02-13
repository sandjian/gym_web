"use client"


import { AvatarCircles } from "./avatar-circles";
import { AnimatedGradientTextBadge } from "./badge";
import { LineShadowText } from "./line-shadow-text";
import { StarRating } from "./star-rating";
import TopGradientButton from "./top-gradient-button";
import { avatarUrls } from "@/lib/constants";
import { VelocityScroll } from "./scroll-velocity";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import Image from "next/image";

export default function HeroLobby() {
  return (
    <div className="relative w-full h-full pt-28 lg:pt-20 xl:pt-8 pb-4 overflow-hidden m-auto flex flex-col bg-cover bg-center [background-image:url('/bgg.svg')]">
      <BackgroundBeamsWithCollision>
        <div className="mt-8 lg:mt-10 w-full px-8 md:px-20">
          <div className="max-w-7xl w-full m-auto grid grid-cols-1 xl:grid-cols-2 gap-8 h-full">

            <div className="flex flex-col gap-4 justify-center items-start">
              <AnimatedGradientTextBadge />
              <h1 className="md:text-6xl text-5xl font-bold max-w-xl pt-2 sm:pt-2 text-zinc-300">
                Transforma tu cuerpo,{" "}
                <LineShadowText className="italic text-white" shadowColor="white">
                  potencia
                </LineShadowText>{" "}
                tu energía
              </h1>
              <p className="text-neutral-500 max-w-lg">
                Únete al gimnasio líder en Mar del Plata. Entrenamientos personalizados, 
                equipos de última generación y una comunidad que te impulsará a superar 
                tus límites. Resultados visibles en 8 semanas.
              </p>
              <div className="flex gap-4 pt-4 ">
                <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
                <div className="space-y-2 text-center flex justify-center items-center">
                  <StarRating defaultValue={5} />
                </div>
              </div>
              <div className="flex flex-wrap gap-12 pt-4 mb-10 ">
                <TopGradientButton/>
              </div>
            </div>

            <div className="hidden xl:block relative">
              <div className="absolute inset-0  z-50" />
              <Image
                src="/hero-img.png"
                alt="Entrenamiento en gimnasio TABATA"
                width={1000}
                height={1000}
                className="w-full"
                style={{
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 60%, rgba(0,0,0,0))'
                }}
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <div className="w-full flex justify-center h-full py-12 items-center max-w-7xl m-auto rounded-2xl">
        <VelocityScroll
          text="TABATA FITNESS CLUB"
          default_velocity={4}
          className="text-7xl md:text-[9rem] font-extrabold text-white uppercase mt-6"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-black-100 from-25%"></div>
    </div>
  );
}
