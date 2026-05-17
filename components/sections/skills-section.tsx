import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { languageCapabilities } from "@/data/languages";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills & Engineering Foundation"
          description="A practical stack spanning product engineering, systems work, IT operations, and computational problem-solving."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.id} className="surface-card p-6">
              <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 surface-card p-6">
          <h3 className="text-base font-semibold text-foreground">Languages</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Communication support for international clients across Europe and India.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {languageCapabilities.map((entry) => (
              <li
                key={entry.id}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] px-4 py-3"
              >
                <p className="text-sm font-medium text-foreground">{entry.language}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {entry.proficiency}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
