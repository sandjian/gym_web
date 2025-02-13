"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { GallerySectionData } from "@/lib/constants";


interface Image {
  title: string;
  src: string;
}

interface GalleryProps {
  badge?: string;
  title?: string;
  description?: string;
  images?: Image[]; 
}



export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Image;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-2xl relative bg-black-100 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black-100/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({
  badge=GallerySectionData.badge,
  title=GallerySectionData.title,
  description=GallerySectionData.description,
  images=GallerySectionData.images
  }:  GalleryProps ) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="p-6">
        <div className="container flex flex-col items-center justify-center gap-2 pt-28 pb-20 max-w-7xl w-full m-auto">
            <Badge variant="outline">{badge}</Badge>
            <div className="flex flex-col justify-center items-center">
            <h1 className="max-w-2xl text-3xl font-semibold md:text-5xl text-zinc-300 ">
                {title}
            </h1>
            <p className=" text-zinc-500 mt-4">{description}</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full pb-16">
        {images.map((card, index) => (
            <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            />
        ))}
        </div>

    </section>
  );
}