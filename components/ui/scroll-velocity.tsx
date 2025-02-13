"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  function ParallaxText({
    children,
    baseVelocity = 100,
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);

    // Hooks de framer-motion para scroll
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Suaviza cambios bruscos de velocidad
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    // Mapea [0..1000] a [0..5], ajusta a gusto
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();
      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    // Mover x con wrap para repetir infinito
    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

    // Determina si movemos en +1 ó -1
    const directionFactor = useRef<number>(1);

    useAnimationFrame((t, delta) => {
      // Obtenemos la velocidad actual
      const currentVelocity = velocityFactor.get();

      // Invertimos la lógica, scroll down => mover a la derecha
      if (currentVelocity < 0) {
        // Scrolleo arriba => muevo texto a la derecha
        directionFactor.current = 1;
      } else if (currentVelocity > 0) {
        // Scrolleo abajo => muevo texto a la izquierda
        directionFactor.current = -1;
      }

      // Mover si hay scroll
      const moveBy =
        directionFactor.current *
        baseVelocity *
        currentVelocity *
        (delta / 1000);

      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div className="w-full  max-w-7xl overflow-hidden whitespace-nowrap" ref={containerRef}>
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}{" "}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full max-w-7xl">
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {text}
      </ParallaxText>
    </section>
  );
}
