import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export const Heading2 = ({ children, className }: ComponentProps<'h2'>) => {
  return (
    <h2
      className={cn(
        'text-2xl font-[570] leading-8 tracking-[-0.48px] text-primary-700',
        className
      )}
    >
      {children}
    </h2>
  );
};
