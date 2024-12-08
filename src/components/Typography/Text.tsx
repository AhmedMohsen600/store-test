import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const Text = ({
  children,
  className,
  ...props
}: ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "font-medium text-primary-600 text-base tracking-[-0.08px]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
