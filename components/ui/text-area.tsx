"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Cambia este valor para ajustar el radio del efecto hover
    const [visible, setVisible] = React.useState(false);

    // Motion values para la posición del ratón
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = e.currentTarget.getBoundingClientRect();

      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle 
                at ${mouseX}px ${mouseY}px,
              var(--green-400),
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/textarea"
      >
        <textarea
          className={cn(
            `flex w-full border border-neutral-300  bg-transparent
             text-neutral-300 shadow-input rounded-2xl px-3 py-2 text-sm
             placeholder-text-neutral-300
             focus-visible:outline-none focus-visible:ring-[2px] 
             focus-visible:ring-neutral-600
             disabled:cursor-not-allowed disabled:opacity-50
             shadow-[0px_0px_1px_1px_var(--neutral-700)]
             group-hover/textarea:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
