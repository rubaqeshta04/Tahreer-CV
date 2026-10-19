import lightLogo from "../../Logo/logo.png";
import darkLogo from "../../Logo/logoDarkMode.png";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const { theme } = useTheme();
  const { locale } = useLanguage();

  return (
    <img
      className={`site-logo ${theme === "dark" ? "site-logo-dark" : ""} ${className}`}
      src={theme === "dark" ? darkLogo : lightLogo}
      width="108"
      height="64"
      alt={
        locale === "ar"
          ? "شعار تحرير — عدسة مكبّرة وأعمدة بيانية صاعدة"
          : "Tahreer logo — magnifying glass with rising chart bars"
      }
    />
  );
}
