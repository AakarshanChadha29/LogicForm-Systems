import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { languageCapabilities } from "@/data/languages";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills & Engineering Foundation"
          description="A practical stack spanning product engineering, systems work, IT operations, and computational problem-solving."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/15 bg-black/35 px-3 py-1 font-mono text-[11px] text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-lg font-semibold text-white">Languages</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Communication support for international clients across Europe and India.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {languageCapabilities.map((entry) => (
              <li
                key={entry.id}
                className="rounded-[var(--radius-md)] border border-white/10 bg-black/25 px-4 py-3"
              >
                <p className="text-sm font-medium text-white">{entry.language}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
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
