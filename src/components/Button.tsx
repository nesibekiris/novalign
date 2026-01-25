import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3.5 font-sans font-medium text-sm transition-all duration-200 rounded-md cursor-pointer select-none';

  const variants = {
    primary: 'bg-stratri-accent text-stratri-cream border border-[#135268] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#1a5a6f] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1)]',
    secondary: 'bg-stratri-dark text-stratri-cream border border-[#15222f] shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#243446] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1)]',
    outline: 'bg-transparent text-stratri-dark border border-stratri-dark shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-stratri-light/20 hover:border-stratri-accent hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.08)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.05)]',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
