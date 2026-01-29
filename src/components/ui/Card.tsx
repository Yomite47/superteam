import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  variant?: 'default' | 'glass' | 'solid';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-card-bg border border-white/5',
      glass: 'glass-card',
      solid: 'bg-[#121212] border border-white/5',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl p-6 relative overflow-hidden',
          variants[variant],
          hoverEffect && 'hover:-translate-y-1 hover:shadow-2xl hover:shadow-brazil-green/5 hover:border-brazil-green/20 transition-all duration-300 ease-out group',
          className
        )}
        {...props}
      >
        {hoverEffect && (
           <div className="absolute inset-0 bg-gradient-to-tr from-brazil-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}
        <div className="relative z-10">
            {props.children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';
