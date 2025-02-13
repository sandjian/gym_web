import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority"

function AnimatedGradientText({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "group relative mx-auto flex max-w-fit flex-row items-center justify-center",
                "rounded-xl  px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm",
                "transition-shadow duration-500 ease-out [--bg-size:300%]",
                "hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ",
                className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient",
                    "bg-gradient-to-r from-slate-400 via-yellow-600/50 to-zinc-800/20",
                    "bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract]",
                    "[border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
                )}
            />

            {children}
        </div>
    );
}

export function AnimatedGradientTextBadge() {
    return (
        <div className="z-10 flex h-full items-center justify-center text-sm">
            <AnimatedGradientText>
                🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-green-600" />{" "}
                <span
                    className={cn(
                        "inline animate-gradient bg-gradient-to-r",
                        "from-yellow-400 via-slate-300 to-slate-600",
                        "bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                    )}
                >
                    35% off en tu primer mes
                </span>
                <ChevronRight
                    className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-300 ease-in-out",
                        "group-hover:translate-x-1 text-white"
                    )}
                />
            </AnimatedGradientText>
        </div>
    );
}

const badgeVariants = cva(
    "inline-flex items-center rounded-full border border-zinc-800 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-zinc-400",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  )
  
  export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
      VariantProps<typeof badgeVariants> {}
  
  function Badge({ className, variant, ...props }: BadgeProps) {
    return (
      <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
  }
  
  export { Badge, badgeVariants }