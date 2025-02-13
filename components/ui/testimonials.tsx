"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

export interface TestimonialCardProps {
    name: string;
    role: string;
    img: string;
    description: string;
    className?: string;
}

export function TestimonialCard({
    description,
    name,
    img,
    role,
    className,
    ...props
}: TestimonialCardProps) {
    return (
        <div className={` flex w-full cursor-pointer flex-col items-center gap-6 rounded-xl p-4 bg-blackborder-[1px_rgba(255,255,255,.1)] bg-black-200/20
        ${className || ""}`}
            {...props}
        >
            <div className="text-sm font-normal text-neutral-400">
                {description}
                <div className="flex flex-row py-1">
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                </div>
            </div>

            <div className="flex w-full items-center gap-5">
                <Image
                    width={40}
                    height={40}
                    src={img}
                    alt={name}
                    className="size-10 rounded-full ring-1 ring-border ring-offset-4"
                />
                <div>
                    <p className="font-medium text-neutral-500">{name}</p>
                    <p className="text-xs font-normal text-neutral-400">{role}</p>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    return (
        <div id="testimonials" className="container py-10 flex flex-col justify-center items-center">
            <div className="container flex flex-col items-center gap-4 text-center p-4">
                <Badge variant="outline">Testimonials</Badge>
                <div className="container flex flex-col max-w-4xl m-auto items-center justify-center gap-2 text-center">
                    <h1 className="max-w-2xl text-3xl font-semibold md:text-5xl text-zinc-300">
                        What People Are Saying
                    </h1>
                    <p className=" text-zinc-500 mt-4">Nos interesa conocer tu opinión para trabajar siempre en alcanzar la excelencia</p>
                </div>
            </div>
            <div className="relative mt-12 h-full overflow-hidden max-w-7xl w-full m-auto  px-8  ">
                <div className="gap-4 md:columns-2 xl:columns-3 w-full">
                    {Array(Math.ceil(testimonials.length / 3))
                        .fill(0)
                        .map((_, i) => (
                            <Marquee
                                vertical
                                key={i}
                                className={cn({
                                    "[--duration:60s]": i === 1,
                                    "[--duration:30s]": i === 2,
                                    "[--duration:70s]": i === 3,
                                })}
                            >
                                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                                    <motion.div
                                        className=""
                                        key={idx}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: Math.random() * 0.8,
                                            duration: 1.2,
                                        }}
                                    >
                                        <TestimonialCard {...card} />
                                    </motion.div>
                                ))}
                            </Marquee>
                        ))}
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 w-full bg-gradient-to-b from-black-100 from-20%"></div>
            </div>
        </div>
    );
}
