import {
  createContext,
  useLayoutEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { siteCopy } from "../../data/translations";
import type { Locale } from "../../types/language";

interface LanguageContextValue {
  locale: Locale;
  toggleLocale: () => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const storageKey = "tahreer-language";

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>(() =>
    document.documentElement.lang === "en" ? "en" : "ar",
  );

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    document.title = siteCopy[locale].pageTitle;

    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = siteCopy[locale].pageDescription;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      toggleLocale: () => {
        const nextLocale = locale === "ar" ? "en" : "ar";
        localStorage.setItem(storageKey, nextLocale);
        setLocale(nextLocale);
      },
    }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
