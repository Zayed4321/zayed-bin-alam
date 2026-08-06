import React from "react";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text" | "dark";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  showArrow = true,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:ring-offset-2 active:scale-[0.98]";

  const variants = {
    primary: "bg-brand-forest text-brand-white hover:bg-brand-emerald shadow-sm hover:shadow-md",
    secondary: "bg-brand-white text-brand-forest border border-brand-forest hover:bg-brand-light-sage hover:border-brand-emerald",
    dark: "bg-brand-white text-brand-forest hover:bg-brand-light-sage shadow-md",
    text: "bg-transparent text-brand-forest hover:text-brand-emerald p-0 underline-offset-4 hover:underline",
  };

  const sizes = {
    sm: "text-xs py-2 px-4 gap-1.5",
    md: "text-sm py-3 px-6 gap-2",
    lg: "text-base py-4 px-8 gap-2.5",
  };

  return (
    <button
      className={twMerge(
        clsx(
          baseStyles,
          variants[variant],
          variant !== "text" && sizes[size],
          className
        )
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
