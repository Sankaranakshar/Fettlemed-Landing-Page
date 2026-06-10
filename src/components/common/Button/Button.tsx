import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "animated";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "animated", size = "default", children, ...props }, ref) => {
    if (variant === "animated") {
      return (
        <button
          ref={ref}
          {...props}
          className={cn(
            "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-wide text-white shadow-lg shadow-pine-900/20 transition-[transform,background-color,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pine-900/30 active:translate-y-0 active:scale-[0.97] bg-pine-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            {
              "h-12 px-6 text-sm": size === "default",
              "h-11 px-4 text-xs": size === "sm",
              "h-14 px-10 text-lg": size === "lg",
            },
            className
          )}
        >
          {children}
        </button>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium tracking-wide ring-offset-background transition-[transform,background-color,box-shadow] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "border border-stone-300 bg-transparent hover:bg-pine-50 text-ink shadow-sm": variant === "outline",
            "h-12 px-6 py-3": size === "default",
            "h-11 px-4 text-xs": size === "sm",
            "h-16 px-10 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
