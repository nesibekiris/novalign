import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3.5 font-sans font-normal text-sm transition-all duration-200 rounded-sm';

  const variants = {
    primary: 'bg-stratri-accent text-white hover:bg-stratri-dark',
    secondary: 'bg-stratri-dark text-white hover:bg-stratri-accent',
    outline: 'bg-transparent text-stratri-dark border border-stratri-dark hover:bg-stratri-dark hover:text-white',
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
