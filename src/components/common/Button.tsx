import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "dark" | "teal";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] select-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#087F5B] text-[#FFFFFF] hover:bg-[#06684a] hover:shadow-md hover:shadow-[#087F5B]/20 focus:ring-[#087F5B] font-bold",
    secondary:
      "bg-[#EAF6EF] text-[#174A3A] hover:bg-[#d8eedf] border border-[#087F5B]/20 focus:ring-[#087F5B]",
    outline:
      "border border-[#174A3A]/25 text-[#174A3A] hover:border-[#087F5B] hover:bg-[#EAF6EF]/60 focus:ring-[#087F5B] bg-[#FFFFFF]",
    "outline-light":
      "border border-[#FFFFFF]/40 text-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#FFFFFF]/10 focus:ring-[#FFFFFF]",
    ghost:
      "text-[#174A3A] hover:bg-[#EAF6EF] focus:ring-[#087F5B]",
    dark:
      "bg-[#174A3A] text-[#FFFFFF] hover:bg-[#092B2C] hover:shadow-md focus:ring-[#174A3A]",
    teal:
      "bg-[#174A3A] text-[#FFFFFF] hover:bg-[#092B2C] hover:shadow-md focus:ring-[#174A3A]",
  }[variant];

  const fullClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={fullClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClassName} {...props}>
      {children}
    </button>
  );
};
