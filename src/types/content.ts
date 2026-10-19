export type PortfolioCategory =
  | "rankings"
  | "audits"
  | "plans"
  | "traffic";

export interface Skill {
  title: string;
  description: string;
  icon:
    | "scan"
    | "file"
    | "search"
    | "chart"
    | "activity"
    | "map"
    | "gauge"
    | "link"
    | "target";
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  keywords?: string[];
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  openInNewTab?: boolean;
  download?: boolean;
  assetLabel: string;
  assetNote?: string;
}

export interface PortfolioFilter {
  id: PortfolioCategory | "all";
  label: string;
}
