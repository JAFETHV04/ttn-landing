import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "font-semibold rounded-lg py-2.5 px-5 transition-all cursor-pointer";

  const variants = {
    primary:
      "bg-[#3f63e0] text-white hover:bg-[#2f50c8]",
    outline:
      "border-2 border-[#3f63e0] text-[#3f63e0] hover:bg-[#3f63e0] hover:text-white",
    white:
      "bg-white text-[#3f63e0] hover:opacity-90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
