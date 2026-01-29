import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
          variant === 'default' && 'bg-brazil-green/10 text-brazil-green border border-brazil-green/20',
          variant === 'outline' && 'text-gray-400 border border-gray-700',
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
