import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { BackToTop } from "./components/ui/BackToTop";
import { SearchExperience } from "./components/sections/SearchExperience";
import { useLanguage } from "./hooks/useLanguage";

export default function App() {
  const { copy } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skipLink}</a>
      <SearchExperience
        renderResults={(results) => (
          <>
            <Navbar />
            <main id="main-content">
              {results}
              <AboutSection />
              <SkillsSection />
              <ExperienceSection />
              <PortfolioSection />
              <ContactSection />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      />
    </>
  );
}
