import {
  Activity,
  ChartNoAxesCombined,
  FileSearch,
  FileText,
  Gauge,
  Link2,
  MapPin,
  Search,
  Target,
} from "lucide-react";
import type { Skill } from "../../types/content";
import { ScrollPop } from "./ScrollPop";

const skillIcons = {
  scan: FileSearch,
  file: FileText,
  search: Search,
  chart: ChartNoAxesCombined,
  activity: Activity,
  map: MapPin,
  gauge: Gauge,
  link: Link2,
  target: Target,
} as const;

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const Icon = skillIcons[skill.icon];

  return (
    <ScrollPop delay={delay}>
      <article className="skill-card">
        <span className="skill-icon" aria-hidden="true">
          <Icon size={21} strokeWidth={1.8} />
        </span>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
      </article>
    </ScrollPop>
  );
}
