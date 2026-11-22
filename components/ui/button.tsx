import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-forest-900 text-cream-50 shadow-soft hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-lift",
        accent:
          "bg-ember-400 text-forest-950 shadow-[0_14px_30px_-12px_rgba(232,118,47,0.8)] hover:-translate-y-0.5 hover:bg-ember-300 hover:shadow-[0_18px_36px_-12px_rgba(232,118,47,0.9)]",
        outline:
          "border border-forest-900/20 bg-transparent text-forest-900 hover:border-forest-900/40 hover:bg-forest-900/5",
        secondary:
          "bg-cream-200 text-forest-900 hover:bg-cream-300",
        ghost: "text-forest-900 hover:bg-forest-900/5",
        link: "text-forest-900 underline-offset-4 hover:underline",
        cream:
          "bg-cream-50 text-forest-900 shadow-soft hover:-translate-y-0.5 hover:bg-white hover:shadow-lift",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-[0.8rem]",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
