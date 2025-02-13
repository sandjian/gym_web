"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { gymClasses } from "@/lib/constants"; 
import { Info, Calendar, Zap } from "lucide-react"; 
import { Badge } from "./badge";
import { Separator } from "./separator";

interface Features {
  title:string;
  description:string;
}

interface Tab {
  id: string;
  label: string;
  title: string;
  src: string;
  description: string;
  schedule: { day: string; hours: string[] }[];
}

const mappedTabs: Tab[] = gymClasses.discipline.map((cls, index) => ({
  id: `tab${index + 1}`,
  label: cls.title,
  title: cls.title,
  src: cls.src,
  description: cls.description,
  schedule: cls.schedule,
}));

interface ScheduleProps {
  badge?:string,
  title?:string,
  features?: Features[],
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const TabContent = ({ tab }: { tab: Tab }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
    {/* Imagen */}
    <div className="relative h-60 md:h-80 w-full">
      <Image
        src={tab.src}
        alt={tab.title}
        fill
        className="rounded-2xl object-cover shadow-lg border-none"
      />
    </div>

    {/* Contenido */}
    <div className="flex flex-col justify-center max-w-sm w-full gap-y-3">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-white">{tab.title}</h2>

      {/* Descripción */}
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <Info className="w-5 h-5 text-gray-300" />
          <h3 className="text-lg font-semibold text-gray-300">Descripción</h3>
        </div>
        <p className="text-sm md:text-base text-gray-400  px-8">{tab.description}</p>
      </div>

      {/* Separador */}
      <div className="border-t border-yellow-700 my-4" />

      {/* Horarios */}
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <Calendar className="w-5 h-5 text-gray-300" />
          <h3 className="text-lg font-semibold text-gray-300">Horarios</h3>
        </div>
        <div className="space-y-2">
          {tab.schedule.map((day, i) => (
            <div key={i} className="text-sm text-gray-400 px-8">
              <span className="font-extralight">{day.day}:</span>{" "}
              {day.hours.join(", ")}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Schedule = ({
  badge= gymClasses.badge,
  title= gymClasses.title,
  features= gymClasses.features,
  tabs = mappedTabs, 
  defaultTab,
  className,
}: ScheduleProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabs[0]?.id
  );

  if (!tabs?.length) return null;

  return (
    <div className="h-full w-full max-w-6xl m-auto pt-20 px-4">
      <div className="mb-20 flex flex-col items-center gap-6 text-center max-w-xl m-auto justify-center">
        <Badge variant="outline">{badge}</Badge>
        <h1 className="text-4xl font-semibold lg:text-5xl text-neutral-300">{title}</h1>
      </div>
      <div className={cn("w-full max-w-7xl mx-auto flex flex-col gap-y-6", className)}>
        {/* Pestañas */}
        <div className="flex gap-2 flex-wrap justify-center bg-black-200/30 backdrop-blur-sm p-2 rounded-2xl border border-neutral-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-2xl text-neutral-300 outline-none transition-colors",
                "hover:text-white focus-visible:ring-1 focus-visible:ring-neutral-500"
              )}
              aria-selected={activeTab === tab.id}
              role="tab"
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl shadow-sm"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenido de las pestañas */}
        <div className="p-6 bg-black-200/30 backdrop-blur-sm rounded-xl shadow-lg border border-white/10">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                >
                  <TabContent tab={tab} />
                </motion.div>
              )
          )}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row justify-center items-center bg-black-200/30 border border-neutral-700 p-8 rounded-2xl">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <Separator
                  key={`separator-${index}`} 
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-yellow-700 via-transparent to-muted md:block"
                />
              )}
              <div
                key={index}
                className="flex grow basis-0 flex-col rounded-md bg-background justify-center items-center p-4"
              >
                <Zap className="w-5 h-5 text-yellow-700" />
                <h3 className="mb-2 font-semibold text-neutral-300">{feature.title}</h3>
                <p className="text-sm text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

    </div>
  );
};

export { Schedule };