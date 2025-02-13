"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { Badge } from "./badge";

import { PricingData } from "@/lib/constants";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  badge?:string;
  plans?: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  badge=PricingData.badge,
  title = PricingData.title,
  description = PricingData.description,
  plans= PricingData.plans
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
  };

  return (
    <div className="container py-10 mt-16 px-6 w-full">
      <div className="container flex flex-col max-w-4xl m-auto items-center justify-center gap-4 text-center">
        <Badge variant="outline">{badge}</Badge>
          <h1 className="max-w-md md:max-w-2xl text-3xl font-semibold md:text-5xl text-zinc-300">
            {title}
          </h1>
          <p className=" text-zinc-500">{description}</p>
        
      </div>

      <div className="flex justify-center my-10  ">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold text-neutral-300">
          Annual billing <span className="text-neutral-200">(Save 20%)</span>
        </span>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-3 p-8 gap-4 bg-gradient-to-b from-black-200/40 via-black-200/10 to-black-100  py-16 rounded-xl border border-neutral-700">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              "rounded-2xl border-[1px] p-8 text-center flex flex-col justify-between ",
              plan.isPopular ? "border-yellow-500 shadow-lg shadow-yellow-700 border-2" : "border-transparent",
              "  text-zinc-300"
            )}
            style={{ height: "100%" }}
          >
            <div>
              <p className="text-base font-semibold text-white">{plan.name}</p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "ARG",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-sm font-semibold leading-6 tracking-wide text-green-600">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs leading-5 text-zinc-400">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5  text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter rounded-xl mt-16",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:text-white hover:border-yellow-600 hover:shadow-md hover:shadow-yellow-500 hover:bg-black-100",
                  plan.isPopular
                    ? "bg-black-100 text-white"
                    : "bg-black-100 text-zinc-400" 
                )}
              >
                {plan.buttonText}
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
