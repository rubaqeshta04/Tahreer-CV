import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";
import { MagneticButton } from "../ui/Button";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

const chartBars = [
  "bar-one",
  "bar-two",
  "bar-three",
  "bar-four",
  "bar-five",
  "bar-six",
  "bar-seven",
];

export function Hero() {
  const { copy, locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const { hero } = copy;
  const PortfolioArrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const titleWords = [
    ...hero.name.split(/\s+/).map((word) => ({ word, surname: false })),
    ...hero.surname.split(/\s+/).map((word) => ({ word, surname: true })),
  ];
  const titleVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.22,
      },
    },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 42 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 16,
        ...(reduceMotion ? { duration: 0 } : {}),
      },
    },
  };

  return (
    <ScrollReveal className="hero" id="home">
      <Container className="hero-layout">
        <div className="hero-copy">
          <p className="hero-intro">{hero.intro}</p>
          <motion.h1
            aria-label={`${hero.name} ${hero.surname}`}
            variants={titleVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            {titleWords.map(({ word, surname }, index) => (
              <motion.span
                className={surname ? "hero-title-surname" : "hero-title-word"}
                variants={wordVariants}
                key={`${word}-${index}`}
                aria-hidden="true"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <h2>{hero.role}</h2>
          <p className="hero-summary">{hero.summary}</p>
          <div className="hero-actions">
            <MagneticButton href="#portfolio">
              {hero.portfolioCta} <PortfolioArrow size={17} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              {hero.contactCta}
            </MagneticButton>
          </div>
        </div>
        <div className="hero-visual">
          <div className="chart-backdrop" aria-hidden="true">
            <div className="chart-grid">
              {chartBars.map((bar) => (
                <span className={`chart-bar ${bar}`} key={bar} />
              ))}
            </div>
            <svg className="chart-line" viewBox="0 0 420 240" preserveAspectRatio="none">
              <polyline points="12,208 78,185 136,171 192,133 250,145 312,87 365,74 409,25" />
            </svg>
          </div>
          <article className="search-preview" aria-label={hero.previewLabel}>
            <div className="search-preview-top">
              <span className="search-preview-brand">
                <Search size={15} /> {hero.searchLabel}
              </span>
              <span className="result-position">01</span>
            </div>
            <span className="preview-url">{hero.noLink}</span>
            <h3>{hero.previewTitle}</h3>
            <p>{hero.previewDescription}</p>
            <span className="preview-disclaimer">{hero.disclaimer}</span>
          </article>
        </div>
      </Container>
    </ScrollReveal>
  );
}
