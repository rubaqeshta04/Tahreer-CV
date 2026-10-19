import { ScrollPop } from "./ScrollPop";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string | string[];
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <ScrollPop>
      <div className={`section-heading ${centered ? "text-center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {typeof description === "string" ? (
          description && <p>{description}</p>
        ) : (
          description?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
        )}
      </div>
    </ScrollPop>
  );
}
