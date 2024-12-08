import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

const buttonVariants = cva(
  'inline-flex gap-2 tracking-[-0.08px]  items-center font-medium justify-center whitespace-nowrap rounded-full px-6 py-3 outline-none focus:outline-none ring-offset-background transition-colors focus-visible:outline-none   focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-[0.15]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-primary-200 text-primary-700  hover:bg-primary-300',
        ghost: 'hover:bg-primary-200 rounded-full ',
        Tertiary: 'bg-primary-0 border border-primary-200 hover:bg-primary-200',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-6 py-3 min-h-12',
        sm: 'h-9   px-4',
        xs: 'h-8   px-4',
        'full-lg': 'h-10  w-full  px-6',
        lg: 'h-10    px-6',
        full: 'px-6 py-3 w-full',
        icon: 'h-10 w-10 rounded-full flex justify-center items-center p-0 flex-shrink-0',
        'icon-sm':
          'h-8 w-8 rounded-full flex justify-center items-center p-0 flex-shrink-0',
        link: 'h-auto w-auto p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      isLoading = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <>
        {isLoading ? (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={isLoading}
            {...props}
          >
            <LoadingSpinner />
            {children}
          </Comp>
        ) : (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={isLoading}
            {...props}
          >
            {children}
          </Comp>
        )}
      </>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
