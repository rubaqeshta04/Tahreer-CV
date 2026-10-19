import { useContext } from "react";
import { siteCopy } from "../data/translations";
import { LanguageContext } from "../components/layout/LanguageProvider";

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return { ...context, copy: siteCopy[context.locale] };
}
