"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { TeamSectionData } from "@/lib/constants";


interface Trainer {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialProps {
  title?: string;
  trainer?: Trainer[];
};

export const Team = ({
  title = TeamSectionData.title,
  trainer = TeamSectionData.trainer,
}: TestimonialProps) => {
  const [active, setActive] = useState(0);
  const [rotations] = useState<number[]>([]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % trainer.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + trainer.length) % trainer.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };


  return (
    <div className="p-4 md:p-10">
      <div className="md:max-w-7xl mx-auto antialiased font-sans relative z-20 bg-gradient-to-b from-black-200/40 via-black-200/10 to-black-100 rounded-2xl p-10 py-20 border border-neutral-600 my-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {trainer.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index] || 0,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index] || 0,
                      zIndex: isActive(index) ? 999 : TeamSectionData.trainer.length - index,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index] || 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <h2 className="text-3xl font-semibold tracking-tighter text-neutral-300">
              {title}
            </h2>
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-neutral-300">
                {trainer[active].name}
              </h3>
              <p className="text-sm text-neutral-500">
                {trainer[active].designation}
              </p>
              <motion.p className="text-lg mt-8 text-neutral-300">
                {trainer[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-6">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

