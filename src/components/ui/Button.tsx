import { useReducedMotion, useSpring, useMotionValue, motion } from "framer-motion";
import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

type ButtonStyle = "primary" | "secondary" | "light";

const styles: Record<ButtonStyle, string> = {
  primary: "button-primary",
  secondary: "button-secondary",
  light: "button-light",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonStyle;
}

type MagneticButtonProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel" | "download" | "onClick" | "aria-label" | "id" | "title"
> & {
  children?: ReactNode;
  className?: string;
  variant?: ButtonStyle;
};

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonStyle;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a className={`button ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 100, damping: 12 });
  const y = useSpring(pointerY, { stiffness: 100, damping: 12 });

  function handleMouseMove(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !buttonRef.current) return;

    const bounds = buttonRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left - bounds.width / 2) * 0.15);
    pointerY.set((event.clientY - bounds.top - bounds.height / 2) * 0.15);
  }

  function handleMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.a
      ref={buttonRef}
      className={`button ${styles[variant]} ${className}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export function ActionButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: ActionButtonProps) {
  return (
    <button className={`button ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
