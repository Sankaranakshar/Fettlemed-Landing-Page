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
            "group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-8 font-medium text-white shadow-lg shadow-pine-900/20 transition-[transform,background-color,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-pine-900/30 active:translate-y-0 active:scale-[0.97] bg-pine-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2",
            className
          )}
        >
          <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Shine sweep effect */}
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
            <div className="relative h-full w-10 bg-white/20 blur-sm" />
          </div>

          <span className="relative flex items-center gap-2 font-medium tracking-wide">
            {children}
          </span>
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
