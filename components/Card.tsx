// Card Component with ReactBits style
interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass rounded-lg p-6 backdrop-blur-sm border border-white/10 smooth-transition hover:border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}
