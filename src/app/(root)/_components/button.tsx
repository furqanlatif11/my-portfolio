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
  scrollToId?: string; // Changed from 'id' to 'scrollToId' for clarity
};

const Button: React.FC<CommonButtonProps> = ({
  label,
  href,
  variant = "solid",
  onClick,
  target = "_self",
  className = "",
  showHoverIcon = true,
  scrollToId,
}) => {
  const baseStyles = clsx(
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded transition-all duration-300 group overflow-hidden relative",
    {
      "bg-green-600 text-white hover:bg-green-700": variant === "solid",
      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white":
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

  const handleScrollClick = (e: React.MouseEvent) => {
    if (scrollToId) {
      e.preventDefault();
      const targetElement = document.getElementById(scrollToId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        const navbarHeight = 80; // Adjust based on your fixed navbar height

        window.scrollTo({
          top: offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
  };

  // If scrollToId is provided, use button with scroll handler
  if (scrollToId) {
    return (
      <button onClick={handleScrollClick} className={baseStyles}>
        {buttonContent}
      </button>
    );
  }

  // If href is provided, use Link
  if (href) {
    // Handle hash links with smooth scroll
    if (href.startsWith("#")) {
      const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const navbarHeight = 80;

          window.scrollTo({
            top: offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      };

      return (
        <Link href={href} onClick={handleHashClick} className={baseStyles}>
          {buttonContent}
        </Link>
      );
    }

    // Regular links without scroll
    return (
      <Link href={href} target={target} className={baseStyles}>
        {buttonContent}
      </Link>
    );
  }

  // Default button with onClick
  return (
    <button onClick={onClick} className={baseStyles}>
      {buttonContent}
    </button>
  );
};

export default Button;