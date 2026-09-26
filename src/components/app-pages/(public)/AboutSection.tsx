import { Action, Checklist, IconCard } from "@/src/components/common/site";

export function AboutSection() {
  return (
    <section className="section">
      <div className="site-container split">
        <div className="split-copy">
          <span className="eyebrow">Who we are</span>
          <h2>A Chautari where ideas meet execution.</h2>
          <p>
            Like the traditional chautari, we make space for people and ideas to
            gather. Digital Chautari brings strategy, creativity, and engineering
            into one thoughtful team.
          </p>
          <p>
            We work with founders, teams, and organizations who want their next
            chapter to feel meaningful and move the needle.
          </p>
          <Checklist
            items={[
              "Creative strategy",
              "Brand storytelling",
              "Full-stack engineering",
              "Health-tech expertise",
            ]}
          />
          <Action href="/about">Meet the team</Action>
        </div>

        <div className="grid-2">
          <IconCard
            icon="◎"
            title="Digital marketing"
            text="Reach the right people with clarity."
            tone="mint"
          />
          <IconCard
            icon="✦"
            title="Content creation"
            text="Make stories worth sharing."
            tone="gold"
          />
          <IconCard
            icon="⌘"
            title="Software development"
            text="Build useful, durable products."
            tone="teal"
          />
          <IconCard
            icon="◌"
            title="Branding & design"
            text="Look as considered as you are."
            tone="lilac"
          />
        </div>
      </div>
    </section>
  );
}