import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger"; // diferentes estilos
  className?: string; // para agregar estilos extra si se necesita
  disabled?: boolean; // <-- agregamos disabled
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false, // <-- valor por defecto
}: ButtonProps) {
  const baseStyles =
    "mt-4 px-4 py-2 rounded font-semibold transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled} // <-- aplicamos el prop
    >
      {children}
    </button>
  );
}
