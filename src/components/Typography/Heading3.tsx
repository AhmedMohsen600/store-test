import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export const Heading3 = ({ children, className }: ComponentProps<'h3'>) => {
  return (
    <h3
      className={cn(
        'text-xl font-[570] leading-6 tracking-[-0.2px]',
        className
      )}
    >
      {children}
    </h3>
  );
};
