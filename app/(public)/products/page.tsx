
import { Action, DarkBanner, Hero, ProductSwitcher } from "@/components/site";

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Our ventures"
        title="Three ventures, one vision"
        description="We build brands, stories, and products that make life a little more connected, creative, and human."
      />

      {/* Products Section */}
      <section className="section">
        <div className="site-container">
          <ProductSwitcher />
        </div>
      </section>

      {/* Health-Tech Spotlight */}
      <DarkBanner
        eyebrow="Health-tech spotlight"
        title="Physio@Home — healthcare reimagined"
        text="Better access to quality physiotherapy, powered by thoughtful technology and a human touch."
      >
        <div style={{ marginTop: 26 }}>
          <Action href="/contact" variant="light">
            Explore Physio@Home
          </Action>
        </div>
      </DarkBanner>
    </>
  );
}