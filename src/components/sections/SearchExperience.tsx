import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Search,
  Sparkles,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { portfolioProjects } from "../../data/portfolio";
import { contact } from "../../data/site";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";

type SearchView = "simulator" | "results";
type SearchPhase = "typing" | "ready" | "loading";

const searchPhrases = {
  ar: "أفضل خبير سيو لزيادة مبيعات المتاجر الإلكترونية",
  en: "Best SEO expert to increase e-commerce sales",
} as const;
const sitelinkIds = ["markat", "newtechstore", "drive7-audit", "seo-action-plan"];

const resultVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

interface SearchExperienceProps {
  renderResults: (results: ReactNode) => ReactNode;
}

export function SearchExperience({ renderResults }: SearchExperienceProps) {
  const [view, setView] = useState<SearchView>("simulator");
  const reduceMotion = useReducedMotion();
  const showResults = useCallback(() => setView("results"), []);

  return view === "simulator" ? (
    <SearchSimulator onSearch={showResults} reduceMotion={reduceMotion} />
  ) : (
    <>{renderResults(<SERPResults reduceMotion={reduceMotion} />)}</>
  );
}

interface SearchSimulatorProps {
  onSearch: () => void;
  reduceMotion: boolean | null;
}

function SearchSimulator({ onSearch, reduceMotion }: SearchSimulatorProps) {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<SearchPhase>("typing");
  const intervalRef = useRef<number | undefined>(undefined);
  const timeoutRef = useRef<number | undefined>(undefined);
  const completeRef = useRef(false);
  const { locale, toggleLocale, copy } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isArabic = locale === "ar";
  const searchPhrase = searchPhrases[locale];

  const finishSearch = useCallback(() => {
    if (completeRef.current) return;
    completeRef.current = true;
    window.clearInterval(intervalRef.current);
    window.clearTimeout(timeoutRef.current);
    setQuery(searchPhrase);
    setPhase("loading");
    timeoutRef.current = window.setTimeout(onSearch, 450);
  }, [onSearch, searchPhrase]);

  useEffect(() => {
    completeRef.current = false;
    setPhase("typing");
    if (reduceMotion) {
      setQuery(searchPhrase);
      setPhase("ready");
      return;
    }

    let index = 0;
    setQuery("");
    intervalRef.current = window.setInterval(() => {
      index += 1;
      setQuery(searchPhrase.slice(0, index));
      if (index >= searchPhrase.length) {
        window.clearInterval(intervalRef.current);
        setPhase("ready");
      }
    }, 46);

    return () => {
      window.clearInterval(intervalRef.current);
      window.clearTimeout(timeoutRef.current);
    };
  }, [reduceMotion, searchPhrase]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main
      className="search-simulator"
      id="main-content"
      aria-label={isArabic ? "محاكي البحث" : "Search simulator"}
    >
      <div className="simulator-controls" dir={isArabic ? "rtl" : "ltr"}>
        <button
          className="simulator-control"
          type="button"
          onClick={toggleLocale}
          aria-label={isArabic ? "Switch language to English" : "تغيير اللغة إلى العربية"}
        >
          <Languages size={17} aria-hidden="true" />
          <span>{copy.languageLabel}</span>
        </button>
        <button
          className="simulator-control simulator-theme-control"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? copy.themeLabel.light : copy.themeLabel.dark}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      <div className="simulator-center">
        <motion.h1
          className="simulator-brand"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          aria-label="Tahreer SEO"
        >
          <span className="simulator-brand-tahreer">Tahreer</span>
          <span className="simulator-brand-seo">SEO</span>
        </motion.h1>
        <form
          className="simulator-search-form"
          onSubmit={handleSubmit}
          aria-label={isArabic ? "البحث عن خدمات تحسين محركات البحث" : "Search SEO services"}
        >
          <label className="sr-only" htmlFor="simulated-search">
            {isArabic ? "اكتبي عبارة البحث" : "Search query"}
          </label>
          <Search size={19} aria-hidden="true" />
          <input
            id="simulated-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
            dir="auto"
            aria-describedby="simulator-search-hint"
          />
          {phase === "typing" && !reduceMotion && (
            <span className="simulator-caret" aria-hidden="true" />
          )}
          <button
            type="button"
            className="simulator-submit"
            aria-label={isArabic ? "عرض نتائج البحث" : "Show search results"}
            onClick={finishSearch}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
        <motion.figure
          className="simulator-hero-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 65, damping: 18, delay: 0.18 }}
        >
          <span className="simulator-hero-orbit simulator-hero-orbit-one" aria-hidden="true" />
          <span className="simulator-hero-orbit simulator-hero-orbit-two" aria-hidden="true" />
          <img
            src="/images/hero-section.png"
            alt={isArabic ? "رسم توضيحي للبحث وتحسين الظهور ونمو المبيعات" : "Illustration of search, SEO visibility, and sales growth"}
            width="600"
            height="380"
          />
          <figcaption>
            <span className="simulator-hero-caption-mark" aria-hidden="true">
              <Sparkles size={15} />
            </span>
            <span>{isArabic ? "من الظهور في البحث إلى نمو أعمالك" : "From search visibility to business growth"}</span>
          </figcaption>
        </motion.figure>
        <p id="simulator-search-hint" className="simulator-hint">
          {isArabic
            ? "اكتشفي كيف يمكن للظهور العضوي أن يغيّر نمو متجرك"
            : "Discover how organic visibility can grow your store"}
        </p>
        <div className="simulator-progress-track" aria-hidden="true">
          <motion.span
            className="simulator-progress-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === "loading" ? 1 : 0 }}
            transition={{ duration: 0.42, ease: "easeInOut" }}
          />
        </div>
        <span className="sr-only" role="status" aria-live="polite">
          {phase === "loading" ? (isArabic ? "جارٍ عرض النتائج" : "Loading results") : ""}
        </span>
      </div>
      <p className="simulator-footer" dir={isArabic ? "rtl" : "ltr"}>
        {isArabic ? "تجربة بحث تفاعلية — نتائج من أعمال تحرير حامد" : "An interactive search experience — results from Tahreer Hamed"}
      </p>
    </main>
  );
}

interface SERPResultsProps {
  reduceMotion: boolean | null;
}

function SERPResults({ reduceMotion }: SERPResultsProps) {
  const { locale, copy } = useLanguage();
  const isArabic = locale === "ar";
  const searchPhrase = searchPhrases[locale];
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const questions = isArabic
    ? [
        {
          question: "كم من الوقت يحتاج تحسين محركات البحث لظهور النتائج؟",
          answer:
            "تختلف المدة حسب حالة الموقع والمنافسة والكلمات المستهدفة. غالباً ما يحتاج SEO إلى عدة أشهر من العمل المتواصل، مع متابعة المؤشرات وتعديل الخطة بناءً على البيانات.",
        },
        {
          question: "كيف يساعد SEO على زيادة مبيعات المتجر؟",
          answer:
            "من خلال جذب باحثين لديهم نية شراء، وتحسين صفحات المنتجات والتصنيفات، ثم قياس أثر الزيارات العضوية على الطلبات والإيرادات.",
        },
        {
          question: "ما الخدمات التي يشملها تحسين محركات البحث؟",
          answer:
            "قد يشمل التدقيق التقني، وبحث الكلمات المفتاحية، وتحسين الصفحات والمحتوى، وتحليل المنافسين، ومتابعة الأداء في أدوات Google.",
        },
        {
          question: "هل يمكن ضمان الوصول إلى المركز الأول في Google؟",
          answer:
            "لا يمكن ضمان ترتيب محدد في نتائج البحث؛ فالترتيب يتأثر بعوامل كثيرة ومتغيرة. العمل الجيد يركز على تحسين الظهور المستدام وتجربة الزوار والنتائج القابلة للقياس.",
        },
      ]
    : [
        {
          question: "How long does SEO take to show results?",
          answer:
            "Timing depends on your site's starting point, competition, and target keywords. SEO usually takes several months of consistent work, with progress monitored and the strategy refined using real data.",
        },
        {
          question: "How does SEO help increase store sales?",
          answer:
            "By attracting searchers with purchase intent, improving product and category pages, and measuring how organic visits contribute to orders and revenue.",
        },
        {
          question: "What services are included in SEO?",
          answer:
            "SEO can include a technical audit, keyword research, on-page and content optimization, competitor analysis, and performance monitoring in Google tools.",
        },
        {
          question: "Can anyone guarantee a #1 Google ranking?",
          answer:
            "No one can guarantee a specific search ranking. Good SEO focuses on sustainable visibility, a better visitor experience, and measurable outcomes.",
        },
      ];
  const projects = sitelinkIds.flatMap((id) => {
    const project = portfolioProjects.find((item) => item.id === id);
    return project ? [project] : [];
  });
  const resultStagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.13 },
    },
  };

  return (
    <>
      <motion.section
        className="serp-page"
        id="home"
        aria-label={isArabic ? "نتائج البحث" : "Search results"}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={resultStagger}
      >
        <div className="serp-topline">
          <div className="serp-top-brand" aria-label="Tahreer SEO">
            <span>Tahreer</span> <b>SEO</b>
          </div>
          <div className="serp-query-wrap">
            <Search size={17} aria-hidden="true" />
            <span dir="auto">{searchPhrase}</span>
            <span className="serp-query-divider" />
            <Sparkles size={17} aria-hidden="true" />
          </div>
        </div>
        <div className="serp-tabs" aria-hidden="true">
          <span className="is-active">{isArabic ? "الكل" : "All"}</span>
          <span>{isArabic ? "الصور" : "Images"}</span>
          <span>{isArabic ? "الأخبار" : "News"}</span>
          <span>{isArabic ? "المزيد" : "More"}</span>
        </div>
        <div className="serp-layout" dir={isArabic ? "rtl" : "ltr"}>
          <div className="serp-main-column">
            <motion.p className="serp-result-count" variants={resultVariants}>
              {isArabic ? "نتائج بحث توضيحية من ملف الأعمال" : "Search preview from the portfolio"}
            </motion.p>
            <motion.article className="serp-primary-result" variants={resultVariants}>
              <div className="serp-result-url">
                <span className="serp-favicon" aria-hidden="true">T</span>
                <span>Tahreer SEO</span>
                <span className="serp-url-path">› tahreer-seo.com › about</span>
              </div>
              <h1 className="serp-result-heading">
                <a className="serp-result-title" href="#about">
                  Tahreer Hamed - SEO &amp; Organic Growth Expert
                </a>
              </h1>
              <p className="serp-result-description">
                {isArabic
                  ? "تحرير حامد حمدونة، أخصائية تحسين محركات البحث بخبرة 5 سنوات في الاستراتيجية والتحسين التقني والمحتوى. أساعد المتاجر على تنمية الزيارات العضوية وتحويلها إلى مبيعات قابلة للقياس."
                  : "Tahreer Hamed Hamadouna is an SEO specialist with 5 years of experience in strategy, technical optimization, and content. Helping stores grow organic traffic and turn it into measurable sales."}
              </p>
              <div className="serp-sitelinks-heading">
                {isArabic ? "أعمال مختارة" : "Selected work"}
              </div>
              <div className="serp-sitelinks">
                {projects.map((project) => {
                  const translated = copy.portfolio.projects[project.id];
                  return (
                    <a
                      className="serp-sitelink"
                      href={project.href ?? "#portfolio"}
                      key={project.id}
                      target={project.openInNewTab ? "_blank" : undefined}
                      rel={project.openInNewTab ? "noreferrer" : undefined}
                      download={project.download || undefined}
                    >
                      <span>{sitelinkTitle(project.id, translated?.title ?? project.title, isArabic)}</span>
                      <small>{translated?.description ?? project.description}</small>
                    </a>
                  );
                })}
              </div>
            </motion.article>

            <motion.section className="serp-people-ask" variants={resultVariants}>
              <h2>{isArabic ? "أسئلة يطرحها الآخرون" : "People also ask"}</h2>
              <div className="serp-faq-list">
                {questions.map((item, index) => {
                  const isOpen = openQuestion === index;
                  const buttonId = `serp-faq-question-${index}`;
                  const answerId = `serp-faq-answer-${index}`;
                  return (
                    <div className="serp-faq-item" key={item.question}>
                      <h3>
                        <button
                          id={buttonId}
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setOpenQuestion(isOpen ? null : index)}
                        >
                          <span>{item.question}</span>
                          <ChevronDown
                            size={19}
                            aria-hidden="true"
                            className={isOpen ? "is-open" : ""}
                          />
                        </button>
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={answerId}
                            className="serp-faq-answer"
                            role="region"
                            aria-labelledby={buttonId}
                            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.22 }}
                          >
                            <p>{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          </div>

          <motion.aside
            className="knowledge-panel"
            aria-labelledby="knowledge-panel-title"
            variants={resultVariants}
          >
            <div className="knowledge-panel-header">
              <div>
                <p className="knowledge-kicker">{isArabic ? "لوحة المعرفة" : "Knowledge panel"}</p>
                <h2 id="knowledge-panel-title">Tahreer Hamed</h2>
                <p>{isArabic ? "أخصائية تحسين محركات البحث" : "SEO & Organic Growth Expert"}</p>
              </div>
              <span className="knowledge-avatar" aria-hidden="true">TH</span>
            </div>
            <div className="knowledge-facts">
              <p><b>{isArabic ? "التخصص" : "Specialty"}</b>{isArabic ? "استراتيجية SEO ونمو البحث العضوي" : "SEO strategy & organic growth"}</p>
              <p><b>{isArabic ? "الخبرة" : "Experience"}</b>{isArabic ? "5 سنوات وأكثر" : "5+ years"}</p>
              <p><b>{isArabic ? "الموقع" : "Focus"}</b>{isArabic ? "المتاجر الإلكترونية والمحتوى العربي" : "E-commerce & Arabic content"}</p>
            </div>
            <div className="knowledge-proof">
              <a href="/images/google-search-sales-growth.png" target="_blank" rel="noreferrer">
                <img
                  src="/images/google-search-sales-growth.png"
                  alt={isArabic ? "لقطة توضح نمو المبيعات من البحث العضوي" : "Evidence of sales growth from organic search"}
                  loading="lazy"
                />
                <span>{isArabic ? "نمو المبيعات من البحث العضوي" : "Organic search sales growth"}</span>
              </a>
              <a href="/images/organic-search-huge-growth.png" target="_blank" rel="noreferrer">
                <img
                  src="/images/organic-search-huge-growth.png"
                  alt={isArabic ? "لقطة توضح نمو إيرادات البحث العضوي" : "Evidence of organic search revenue growth"}
                  loading="lazy"
                />
                <span>{isArabic ? "نمو إيرادات البحث العضوي" : "Organic search revenue growth"}</span>
              </a>
            </div>
            <a className="knowledge-contact-button" href="#contact">
              {isArabic ? "لنعمل معاً" : "Let's work together"}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="knowledge-email-link" href={`mailto:${contact.email}`}>
              {contact.email}
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </motion.aside>
        </div>
      </motion.section>
    </>
  );
}

function sitelinkTitle(id: string, translatedTitle: string, isArabic: boolean) {
  if (id === "markat") return "Markat.sa";
  if (id === "newtechstore") return "Newtechstore";
  if (id === "drive7-audit") return isArabic ? "تدقيق SEO — Drive7" : "SEO Audit — Drive7";
  if (id === "seo-action-plan") return isArabic ? "خطة عمل SEO" : "SEO Action Plan";
  return translatedTitle;
}
