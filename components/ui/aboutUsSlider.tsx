"use client";

import { useEffect, useState } from "react";
import { TextComponent } from "@/components/ui/feature-four";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AboutSectionData } from "@/lib/constants";

export function AboutUsSlider() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % AboutSectionData.content.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container h-full w-full max-w-7xl">
      <div className="mb-20 text-center">
        <h3 className="py-6 text-sm font-semibold text-yellow-600">
          CLASES DESTACADAS
        </h3>
        <h2 className="text-3xl font-semibold tracking-tighter text-neutral-300">
          Descubre nuestras clases más populares
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 px-4 md:px-10">
        {/* Descripciones */}
        <div className="space-y-6">
          {AboutSectionData.content.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>

        {/* Imágenes */}
        <div className="h-full">
          <div className={cn("relative h-full w-full overflow-hidden rounded-lg")}>
            {AboutSectionData.content.map((item, index) => (
              <Image
                height={800}
                width={800}
                alt={item.title}
                className={cn(
                  "absolute h-full w-full transform-gpu rounded-2xl object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : ""
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: AboutSectionData.content.length - index }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Imágenes en móviles */}
      <div className="mt-10 p-6 block md:hidden">
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          {AboutSectionData.content.map((item, index) => (
            <Image
              height={400}
              width={600}
              alt={item.title}
              className={cn(
                "absolute h-full w-full transform-gpu rounded-2xl object-cover transition-all duration-300",
                featureOpen === index ? "scale-100" : "scale-70",
                featureOpen > index ? "translate-y-full" : ""
              )}
              key={item.title}
              src={item.srcImage}
              style={{ zIndex: AboutSectionData.content.length - index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}