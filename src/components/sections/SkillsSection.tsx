import { useLanguage } from "../../hooks/useLanguage";
import { SkillCard } from "../ui/SkillCard";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";

export function SkillsSection() {
  const { copy } = useLanguage();

  return (
    <ScrollReveal className="section skills-section" id="skills">
      <Container>
        <SectionHeading
          eyebrow={copy.skills.eyebrow}
          title={copy.skills.title}
          description={copy.skills.description}
          centered
        />
        <div className="skills-grid">
          {copy.skills.items.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} delay={index * 0.2} />
          ))}
        </div>
      </Container>
    </ScrollReveal>
  );
}
