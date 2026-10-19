import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { copy, toggleLocale, locale } = useLanguage();

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label={copy.menuLabel.close}
          onClick={closeMenu}
        />
      )}
      <Container className="navbar">
        <a
          className="brand"
          href="#home"
          aria-label={locale === "ar" ? "تحرير حامد حمدونة — الرئيسية" : "Tahreer Hamed Hamadouna — Home"}
        >
          <Logo />
        </a>
        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          id="main-navigation"
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
        >
          {copy.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <Button href="#contact" className="nav-cta" onClick={closeMenu}>
            {copy.navCta}
          </Button>
          <div className="nav-controls">
            <button
              className="language-toggle"
              type="button"
              aria-label={locale === "ar" ? "Switch language to English" : "تغيير اللغة إلى العربية"}
              onClick={() => {
                toggleLocale();
                closeMenu();
              }}
            >
              <Languages size={17} aria-hidden="true" />
              <span>{copy.languageLabel}</span>
            </button>
            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === "dark" ? copy.themeLabel.light : copy.themeLabel.dark}
              aria-pressed={theme === "dark"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
          </div>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? copy.menuLabel.close : copy.menuLabel.open}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
    </header>
  );
}
