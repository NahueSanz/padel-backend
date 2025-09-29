import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>; // 👈 extiende props nativos

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props // 👈 resto de props (type, onClick, disabled, etc.)
}: ButtonProps) {
  const baseStyles =
    "mt-4 px-4 py-2 rounded font-semibold transition-colors duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed",
    danger:
      "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props} // 👈 pasa los demás props (type, onClick, disabled, etc.)
    >
      {children}
    </button>
  );
}
