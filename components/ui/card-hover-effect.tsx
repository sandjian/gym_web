"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    stat: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 py-10 max-w-7xl mx-auto",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-600/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardStat>{item.stat}</CardStat>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-950 border border-white/[0.2] group-hover:border-zinc-500 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 text-center">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100  tracking-wide text-xl py-2", className)}>
      {children}
    </h4>
  );
};
export const CardStat = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-slate-300 font-extrabold text-4xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export function CardsHoverEffect() {
  return (
    <div className="max-w-7xl mx-auto w-full px-2">
      <HoverEffect items={stats} />
    </div>
  );
}
export const stats = [
  {
    title: "Clientes Felices",
    stat: "99 +",
  },
  {
    title: "Coaches",
    stat: "8",
  },
  {
    title: "Sedes",
    stat: "1",
  },
  {
    title: "Actividades",
    stat: "15 +",
  },
];
