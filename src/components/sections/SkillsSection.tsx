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
        <div className="skills-groups">
          {copy.skills.groups.map((group, groupIndex) => (
            <section className="skills-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skills-grid">
                {group.items.map((skill, itemIndex) => (
                  <SkillCard
                    key={skill.title}
                    skill={skill}
                    delay={(groupIndex * group.items.length + itemIndex) * 0.2}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </ScrollReveal>
  );
}
