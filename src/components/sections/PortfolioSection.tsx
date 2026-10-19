import { usePortfolioFilters } from "../../hooks/usePortfolioFilters";
import { portfolioProjects } from "../../data/portfolio";
import { PortfolioCard } from "../../features/portfolio/PortfolioCard";
import { PortfolioFilters } from "../../features/portfolio/PortfolioFilters";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { useLanguage } from "../../hooks/useLanguage";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ScrollPop } from "../ui/ScrollPop";

export function PortfolioSection() {
  const { copy } = useLanguage();
  const { activeFilter, setActiveFilter, filteredProjects } =
    usePortfolioFilters(portfolioProjects);

  return (
    <ScrollReveal className="section portfolio-section" id="portfolio">
      <Container>
        <div className="portfolio-heading-row">
          <SectionHeading
            eyebrow={copy.portfolio.eyebrow}
            title={copy.portfolio.title}
            description={copy.portfolio.description}
          />
          <PortfolioFilters
            filters={copy.portfolio.filters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
        {filteredProjects.length > 0 ? (
          <div className="portfolio-grid" aria-live="polite">
            {filteredProjects.map((project, index) => {
              const projectCopy = copy.portfolio.projects[project.id];
              return (
                <PortfolioCard
                  key={project.id}
                  project={{ ...project, ...projectCopy }}
                  copy={copy.portfolio}
                  delay={index * 0.2}
                />
              );
            })}
          </div>
        ) : (
          <ScrollPop>
            <div className="portfolio-empty" role="status">
              <span>{copy.portfolio.emptyTitle}</span>
              <p>{copy.portfolio.emptyDescription}</p>
            </div>
          </ScrollPop>
        )}
      </Container>
    </ScrollReveal>
  );
}
