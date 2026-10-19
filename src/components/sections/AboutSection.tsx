import { GraduationCap } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { Container } from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollPop } from "../ui/ScrollPop";

export function AboutSection() {
  const { copy } = useLanguage();

  return (
    <ScrollReveal className="section about-section" id="about">
      <Container>
        <div className="about-grid">
          <SectionHeading
            eyebrow={copy.about.eyebrow}
            title={copy.about.title}
            description={copy.about.description}
          />
          <ScrollPop delay={0.22}>
            <div className="education-panel">
              <ScrollPop>
                <div className="panel-heading">
                  <span className="panel-icon"><GraduationCap size={19} /></span>
                  <h3>{copy.about.educationTitle}</h3>
                </div>
              </ScrollPop>
              <ul>
                {copy.about.education.map((item, index) => (
                  <li key={item}>
                    <ScrollPop delay={0.18 + index * 0.2}>
                      <span>{item}</span>
                    </ScrollPop>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollPop>
        </div>
      </Container>
    </ScrollReveal>
  );
}
