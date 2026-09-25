import {
  HeartPulse,
  Lightbulb,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import {
  Action,
  Checklist,
  ClosingCta,
  DarkBanner,
  Hero,
  IconCard,
  SectionHeading,
  Stats,
} from "@/components/site";
import { Features } from "@/src/constants/Features";
import { products, sectors } from "@/src/data/data";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="🚀 Welcome to Digital Chautari"
        title="We build digital bridges between ideas and impact"
        highlight="digital bridges"
        description="We are a creative technology company from Kathmandu, helping ambitious brands grow, tell better stories, and build products that matter."
      >
        <div className="hero-actions">
          <Action href="/services">Explore services</Action>
          <Action href="/products" variant="ghost">
            View products
          </Action>
        </div>
        <Stats
          items={[
            { value: "3", label: "Products", icon: <Rocket size={17} /> },
            { value: "6+", label: "Team members", icon: <Users size={17} /> },
            { value: "100%", label: "Commitment", icon: <HeartPulse size={17} /> },
          ]}
        />
      </Hero>

      <section className="section">
        <div className="site-container">
          <div className="grid-4">
            {Features.map(([icon, title, text], i) => (
              <IconCard
                key={title as string}
                icon={icon}
                title={title as string}
                text={text as string}
                tone={["mint", "teal", "gold", "lilac"][i]}
              />
            ))}
          </div>
        </div>
      </section>

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

      <DarkBanner
        eyebrow="The numbers"
        title="Good work leaves a measurable mark."
        text="From first sketch to lasting partnership, we bring energy and accountability to every brief."
      >
        <div className="numbered">
          <div>
            <strong>250+</strong>
            <p>Projects delivered</p>
          </div>
          <div>
            <strong>40+</strong>
            <p>Happy clients</p>
          </div>
          <div>
            <strong>1M+</strong>
            <p>Content views</p>
          </div>
          <div>
            <strong>98%</strong>
            <p>Client retention</p>
          </div>
        </div>
      </DarkBanner>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our products"
            title="Three ventures, one vision."
            description="We make things that help brands communicate, people create, and communities live healthier lives."
          />
          <div className="grid-3">
            {products.map(([icon, name, label, text]: any, i) => (
              <article className="card" key={name}>
                <div className={`icon-chip chip-${["mint", "gold", "teal"][i]}`}>
                  {icon}
                </div>
                <p className="blog-meta" style={{ marginTop: 18 }}>
                  {label}
                </p>
                <h3 style={{ marginTop: 8, fontSize: 22 }}>{name}</h3>
                <p style={{ color: "#5b6472", marginTop: 8 }}>{text}</p>
                <Action href="/products" variant="ghost">
                  Learn more
                </Action>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="site-container">
          <SectionHeading eyebrow="Sectors we serve" title="Useful in every corner of life." />
          <div className="grid-3">
            {sectors.map((sector, i) => (
              <IconCard
                key={sector}
                icon={
                  [
                    <HeartPulse size={20} />,
                    <Zap size={20} />,
                    <ShieldCheck size={20} />,
                    <Lightbulb size={20} />,
                    <SparklesIcon />,
                    <PenTool size={20} />,
                  ][i]
                }
                title={sector}
                tone={["mint", "teal", "gold", "lilac", "pink", "mint"][i]}
              />
            ))}
          </div>
        </div>
      </section>

      <DarkBanner
        eyebrow="How we work"
        title="Our 4-step process"
        text="A simple rhythm that keeps big ideas moving and everyone in the room."
      >
        <div className="numbered">
          {[
            ["01", "Discover", "Find the signal in the noise."],
            ["02", "Design", "Shape a direction people can feel."],
            ["03", "Develop", "Build with care and momentum."],
            ["04", "Deliver", "Launch, learn, and keep improving."],
          ].map(([number, title, text]) => (
            <div className="dark-card" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </DarkBanner>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Kind words" title="Good company makes good work." />
          <div className="grid-3">
            {[
              [
                "\u201CDigital Chautari brought clarity to a complex launch and made the whole process feel exciting.\u201D",
                "Aayush Shrestha",
                "Founder, Karkhana",
              ],
              [
                "\u201CThey listen deeply, move quickly, and care about the last 10% as much as we do.\u201D",
                "Mina Gurung",
                "Marketing Lead, Sano",
              ],
              [
                "\u201CThe team feels like an extension of ours. The work speaks for itself.\u201D",
                "Rohan Adhikari",
                "Director, Northstar",
              ],
            ].map(([quote, name, role]) => (
              <article className="card" key={name}>
                <div className="stars">★★★★★</div>
                <p className="quote" style={{ marginTop: 14 }}>
                  {quote}
                </p>
                <div className="quote-author">
                  {name}
                  <small>{role}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="site-container">
          <SectionHeading eyebrow="Notes from the Chautari" title="Latest from our blog" />
          <div className="grid-3">
            {[
              [
                "Designing for trust",
                "Brand thinking",
                "How small signals can make a digital experience feel instantly human.",
              ],
              [
                "The content flywheel",
                "Content",
                "A practical rhythm for making better content without burning out.",
              ],
              [
                "Care, made accessible",
                "Health-tech",
                "What we learned building a more human way to start physiotherapy.",
              ],
            ].map(([title, cat, text], i) => (
              <article className="card blog-card" key={title}>
                <div
                  className="blog-art"
                  style={{
                    background: [
                      "linear-gradient(135deg,#0f9488,#b6d7bb)",
                      "linear-gradient(135deg,#e0a930,#f8d88a)",
                      "linear-gradient(135deg,#244c6a,#9bc9c6)",
                    ][i],
                  }}
                />
                <span className="blog-meta">{cat} · 5 min read</span>
                <h3>{title}</h3>
                <p style={{ color: "#5b6472", marginTop: 8, fontSize: 14 }}>{text}</p>
                <Action href="/contact" variant="ghost">
                  Read more
                </Action>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta title="Ready to build something extraordinary together?" />
    </>
  );
}

function SparklesIcon() {
  return <Sparkles size={20} />;
}