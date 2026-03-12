// Button Component with ReactBits style
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold smooth-transition cursor-pointer";

  const variants = {
    primary:
      "bg-neon-purple hover:bg-neon-blue text-white shadow-lg shadow-neon-purple/50",
    secondary: "glass glass-hover text-white",
    ghost: "text-white hover:text-neon-blue",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
