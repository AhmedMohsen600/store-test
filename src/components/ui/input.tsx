import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & {
    hasError?: boolean;
  }
>(({ className, type, hasError, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        `flex w-full ${hasError ? 'border border-destructive' : ''} text-base ${
          hasError ? 'bg-white' : 'bg-primary-200'
        } px-6 py-3 font-medium text-primary-700 placeholder:text-primary-500 focus:shadow-double-shadow  focus:bg-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export { Input };
