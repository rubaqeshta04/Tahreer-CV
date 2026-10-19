import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { currentYear } from "../../data/site";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { useLanguage } from "../../hooks/useLanguage";
import { motion, useReducedMotion } from "framer-motion";

export function Footer() {
  const { copy, locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const BackIcon = locale === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <motion.footer
      className="site-footer"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container>
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <Logo />
          </a>
          <p>{copy.footer.slogan}</p>
          <a className="back-top" href="#home">
            {copy.footer.backToTop} <BackIcon size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} {copy.footer.copyright}</span>
          <nav aria-label={copy.footer.navigationLabel}>
            {copy.navigation.slice(1, 4).map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </Container>
    </motion.footer>
  );
}
