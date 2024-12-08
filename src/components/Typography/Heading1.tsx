import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const Heading1 = ({ children, className }: ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "font-[Haffer] text-[56px] font-[570] leading-[56px] tracking-[-1.12px] text-primary-700 rtl:font-[Alexandria]",
        className,
      )}
    >
      {children}
    </h1>
  );
};
