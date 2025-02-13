"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { featuresGym } from "@/lib/constants";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  label: string;
  content: TabContent;
}

interface FeatureProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature = ({
  badge = featuresGym.badge,
  heading = featuresGym.heading,
  description = featuresGym.description,
  tabs = featuresGym.tabs,
}: FeatureProps) => {
  return (
    <div className="py-32 flex flex-col justify-center items-center px-3">
      <div className="w-full max-w-7xl m-auto">
        <div className="container flex flex-col max-w-4xl m-auto items-center justify-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-md md:max-w-2xl text-3xl font-semibold md:text-5xl text-zinc-300">
            {heading}
          </h1>
          <p className="text-zinc-500">{description}</p>
        </div>
        <div >
          <Tabs defaultValue={tabs[0].value} className="w-full mt-8  md:px-6">
            {/* Tabs List */}
            <TabsList className="container grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-4 m-auto w-full justify-center">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-500 data-[state=active]:bg-black-200/20 data-[state=active]:text-zinc-200 "
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content */}
            <div className="container  mt-8 max-w-screen-xl rounded-2xl bg-black-200/20 shadow-md shadow-neutral-700 p-6 lg:p-8 border border-neutral-700">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-10"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl text-zinc-300 font-semibold lg:text-4xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-zinc-400 lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2 text-zinc-300" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </div>
                  <Image
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    width={700}
                    height={500}
                    className="rounded-xl"
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export { Feature };
