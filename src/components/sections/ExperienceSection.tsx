import { BriefcaseBusiness } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { Badge } from "../ui/Badge";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ScrollPop } from "../ui/ScrollPop";

export function ExperienceSection() {
  const { copy } = useLanguage();

  return (
    <ScrollReveal className="section experience-section" id="experience">
      <Container>
        <SectionHeading
          eyebrow={copy.experience.eyebrow}
          title={copy.experience.title}
          description={copy.experience.description}
        />
        <ol className="experience-list">
          {copy.experience.items.map((item, index) => (
            <li
              className="experience-item"
              key={`${item.period}-${item.organization}`}
            >
              <span className="timeline-marker" aria-hidden="true">
                <BriefcaseBusiness size={16} />
              </span>
              <ScrollPop delay={index * 0.2}>
                <div className="experience-content">
                  <div className="experience-meta">
                    <Badge>{item.period}</Badge>
                    <span className="experience-org">{item.organization}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </ScrollPop>
            </li>
          ))}
        </ol>
      </Container>
    </ScrollReveal>
  );
}
