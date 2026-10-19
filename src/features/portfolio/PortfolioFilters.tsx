import type { PortfolioCategory, PortfolioFilter } from "../../types/content";
import { useLanguage } from "../../hooks/useLanguage";

interface PortfolioFiltersProps {
  filters: PortfolioFilter[];
  activeFilter: PortfolioCategory | "all";
  onChange: (filter: PortfolioCategory | "all") => void;
}

export function PortfolioFilters({
  filters,
  activeFilter,
  onChange,
}: PortfolioFiltersProps) {
  const { locale } = useLanguage();

  return (
    <div
      className="portfolio-filters"
      role="group"
      aria-label={locale === "ar" ? "تصفية الأعمال" : "Filter portfolio"}
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={activeFilter === filter.id ? "filter-button is-active" : "filter-button"}
          aria-pressed={activeFilter === filter.id}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
