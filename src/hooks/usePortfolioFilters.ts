import { useMemo, useState } from "react";
import type { PortfolioCategory, PortfolioProject } from "../types/content";

export function usePortfolioFilters(projects: PortfolioProject[]) {
  const [activeFilter, setActiveFilter] = useState<
    PortfolioCategory | "all"
  >("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects],
  );

  return { activeFilter, setActiveFilter, filteredProjects };
}
