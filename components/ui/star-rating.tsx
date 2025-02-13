'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface StarRatingProps {
  totalStars?: number;
  defaultValue?: number;
  onRate?: (rating: number) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export function StarRating({ 
  totalStars = 5, 
  defaultValue = 0,
  onRate,
  size = 'md',
  className,
  disabled = false,
}: StarRatingProps) {
  const [rating, setRating] = useState(defaultValue);
  const [hover, setHover] = useState(0);

  const handleRating = (star: number) => {
    if (disabled) return;
    setRating(star);
    onRate?.(star);
  };

  const starSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-8 w-8'
  };

  return (
    <div className={cn(
      "flex items-center gap-2",
      disabled && "opacity-50",
      className
    )}>
      {Array.from({ length: totalStars }, (_, index) => index + 1).map((star) => (
        <motion.button
          key={star}
          type="button"
          className={cn(
            "relative focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ring focus-visible:ring-offset-2",
            disabled && "cursor-not-allowed"
          )}
          onClick={() => handleRating(star)}
          onMouseEnter={() => !disabled && setHover(star)}
          onMouseLeave={() => !disabled && setHover(0)}
          whileHover={!disabled ? { scale: 1.3, rotate: -10 } : undefined}
          whileTap={!disabled ? { scale: 0.9, rotate: 15 } : undefined}
          disabled={disabled}
        >
          <motion.div
            className={cn(
              "transition-colors duration-500",
              (hover || rating) >= star 
                ? "text-yellow-600 " 
                : "text-neutral-700"
            )}
            initial={{ scale: 1 }}
            animate={{
              scale: (hover || rating) >= star ? 1.2 : 1,
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <Star 
              className={cn(
                starSizes[size],
                "fill-current stroke-[1.2px]"
              )} 
            />
          </motion.div>
        </motion.button>
      ))}
    </div>
  );
}