import type { PropsWithChildren } from "react";

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return <span className={`badge ${className}`}>{children}</span>;
}
