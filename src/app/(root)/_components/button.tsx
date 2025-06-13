import Link from "next/link";
import clsx from "clsx";
import React from "react";
import { ArrowUpRight } from "lucide-react";

type CommonButtonProps = {
  label: string;
  href?: string;
  variant?: "solid" | "outlined";
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  showHoverIcon?: boolean;
  
};

const Button: React.FC<CommonButtonProps> = ({
  label,
  href,
  variant = "solid",
  onClick,
  target = "_self",
  className = "",
  showHoverIcon = true,
}) => {
  const baseStyles = clsx(
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 group overflow-hidden relative",
    {
      "bg-blue-600 text-white hover:bg-blue-700": variant === "solid",
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white":
        variant === "outlined",
    },
    className
  );

  const textStyles = clsx(
    "transition-all duration-300",
    showHoverIcon && "group-hover:-translate-x-2"
  );

  const iconStyles = clsx(
    "absolute right-3 opacity-0 translate-y-2 transition-all duration-300",
    showHoverIcon && "group-hover:opacity-100 group-hover:translate-y-0"
  );

  const buttonContent = (
    <>
      <span className={textStyles}>{label}</span>
      {showHoverIcon && <ArrowUpRight size={16} className={iconStyles} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={baseStyles}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {buttonContent}
    </button>
  );
};

export default Button;
