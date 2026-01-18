import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-4 font-medium transition-all duration-300 rounded-lg relative';

  const variants = {
    primary: `
      bg-navy text-white
      shadow-[0_6px_0_0_#010d2a,0_8px_20px_-4px_rgba(2,31,91,0.4)]
      hover:shadow-[0_4px_0_0_#010d2a,0_8px_24px_-2px_rgba(128,177,210,0.6)]
      hover:-translate-y-0.5
      active:shadow-[0_2px_0_0_#010d2a,0_4px_12px_-2px_rgba(2,31,91,0.3)]
      active:translate-y-1
      border-2 border-navy-light
    `,
    secondary: `
      text-navy bg-transparent
      border-2 border-navy rounded-full
      shadow-[0_4px_0_0_#021f5b,0_6px_16px_-4px_rgba(2,31,91,0.3)]
      hover:bg-gradient-to-r hover:from-blue-soft hover:to-blue-periwinkle
      hover:border-blue-soft
      hover:shadow-[0_6px_0_0_#80b1d2,0_8px_20px_-2px_rgba(128,177,210,0.5)]
      hover:-translate-y-0.5
      active:shadow-[0_2px_0_0_#021f5b,0_4px_12px_-2px_rgba(2,31,91,0.2)]
      active:translate-y-1
    `,
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
