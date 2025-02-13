"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion} from "framer-motion";
import { cn } from "@/lib/utils";

/** Opciones para un “rayo” (beam) */
interface BeamOptions {
  initialX?: number;
  initialY?: number;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  className?: string;
  duration?: number;
  delay?: number;
  repeatDelay?: number;
}

/** Props para subcomponente CollisionMechanism */
interface CollisionMechanismProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
  beamOptions?: BeamOptions;
}

/** Componente principal con colisión y beams diagonales */
export function BackgroundBeamsWithCollision({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  // Ajustamos los beams para iniciar en X: 10,100,200,400,600,800,1000,1200
  // y caer diagonalmente.
  const beams: BeamOptions[] = [
    {
      initialX: -100,
      initialY: -200,
      translateX: 1110,   // o 900, 1000 segun quieras
      translateY: 1000,
      duration: 9,
      repeatDelay: 3,
      delay: 2,
      rotate: -45,
    },
    {
      initialX: 100,
      initialY: -200,
      translateX: 1300,
      translateY: 1000,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
      rotate: -45,
    },
    {
      initialX: 200,
      initialY: -200,
      translateX: 1400,
      translateY: 1000,
      duration: 4,
      repeatDelay: 7,
      rotate: -45,
      className: "h-6",
    },
    
    {
      initialX: 800,
      initialY: -200,
      translateX: 2000,
      translateY: 1000,
      duration: 4,
      repeatDelay: 2,
      rotate: -45,
      className: "h-12",
    },
    {
      initialX: 1000,
      initialY: -200,
      translateX: 2200,
      translateY: 1000,
      duration: 5,
      repeatDelay: 4,
      delay: 2,
      rotate: -45,
      className: "h-6",
    },
    {
      initialX: 1200,
      initialY: -200,
      translateX: 2400,
      translateY: 1000,
      duration: 6,
      rotate: -45,
      className: "h-12",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam, idx) => (
        <CollisionMechanism
          key={`beam-${idx}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset",
        }}
      ></div>
    </div>
  );
}

function CollisionMechanism({
  parentRef,
  containerRef,
  beamOptions = {},
}: CollisionMechanismProps) {
  const beamRef = useRef<HTMLDivElement | null>(null);

  const [collision, setCollision] = useState({
    detected: false,
    coordinates: null as { x: number; y: number } | null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        // Si el bottom del beam cruza el top del container => colisión
        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);
    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, parentRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      // Reseteo colisión
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      // Reinicio animación beam
      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateX: beamOptions.initialX ?? -200,
          translateY: beamOptions.initialY ?? -200,
          rotate: beamOptions.rotate ?? -45, // Inclinación
        }}
        variants={{
          animate: {
            translateX: beamOptions.translateX ?? 1000,
            translateY: beamOptions.translateY ?? 1000,
            rotate: beamOptions.rotate ?? -45,
          },
        }}
        transition={{
          duration: beamOptions.duration ?? 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay ?? 0,
          repeatDelay: beamOptions.repeatDelay ?? 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-yellow-600 via-yellow-800 to-transparent",
          beamOptions.className
        )}
      />
    </>
  );
}


