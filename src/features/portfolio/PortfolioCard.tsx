import {
  ArrowUpLeft,
  ArrowUpRight,
  Download,
  ExternalLink,
  Image,
} from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import type { PortfolioProject } from "../../types/content";
import type { SiteCopy } from "../../data/translations";
import { useLanguage } from "../../hooks/useLanguage";
import { ScrollPop } from "../../components/ui/ScrollPop";

interface PortfolioCardProps {
  project: PortfolioProject;
  copy: SiteCopy["portfolio"];
  delay?: number;
}

export function PortfolioCard({ project, copy, delay = 0 }: PortfolioCardProps) {
  const { locale } = useLanguage();
  const ArrowIcon = locale === "ar" ? ArrowUpLeft : ArrowUpRight;
  const cardContent = (
    <>
      {project.imageSrc ? (
        <img
          className="portfolio-image transition-transform duration-700 group-hover:scale-105"
          src={project.imageSrc}
          alt={project.imageAlt ?? project.title}
          loading="lazy"
        />
      ) : !project.href ? (
        <div className="portfolio-placeholder" aria-label={copy.previewHelp}>
          <span className="placeholder-corner" aria-hidden="true" />
          <Image size={28} strokeWidth={1.4} aria-hidden="true" />
          <span>{copy.previewLabel}</span>
          <small>{copy.previewHelp}</small>
        </div>
      ) : null}
      <div className="portfolio-card-body">
        <div className="portfolio-card-top">
          <Badge>{project.categoryLabel}</Badge>
          <ArrowIcon size={17} aria-hidden="true" />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.keywords && (
          <div className="keyword-list" aria-label={copy.keywordsLabel}>
            {project.keywords.map((keyword) => (
              <span dir="auto" key={keyword}>{keyword}</span>
            ))}
          </div>
        )}
        {project.tags && (
          <div className="keyword-list" aria-label={copy.tagsLabel}>
            {project.tags.map((tag) => (
              <span dir="auto" key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {project.href ? (
          <a
            className="portfolio-asset-link"
            href={project.href}
            target={project.openInNewTab ? "_blank" : undefined}
            rel={project.openInNewTab ? "noreferrer" : undefined}
            download={project.download || undefined}
          >
            {project.download ? (
              <Download size={16} aria-hidden="true" />
            ) : (
              <ExternalLink size={16} aria-hidden="true" />
            )}
            <span>{project.assetLabel}</span>
          </a>
        ) : (
          <div className="asset-note">{project.assetLabel}</div>
        )}
        {project.assetNote && <div className="asset-note">{project.assetNote}</div>}
      </div>
    </>
  );

  return (
    <ScrollPop delay={delay}>
      <article className="portfolio-card group transition-all duration-300 hover:-translate-y-2 hover:border-cyan-700/50 hover:shadow-2xl hover:shadow-cyan-900/20">
        {cardContent}
      </article>
    </ScrollPop>
  );
}
