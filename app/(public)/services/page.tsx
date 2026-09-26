import type { Metadata } from "next";
import {
  Action,
  Checklist,
  ClosingCta,
  DarkBanner,
  Hero,
  IconCard,
  SectionHeading,
} from "@/src/components/common/site";
import { Benefits, Industries, PricingPlans, ServiceRows } from "@/src/constants/Services";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Digital Chautari's digital marketing, content, branding, design, and software development services.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services",
    description: "Explore Digital Chautari's digital marketing, content, branding, design, and software development services.",
    url: "/services",
  },
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="What we do"
        title="Services that drive growth"
        description="The right blend of creative thinking, digital craft, and technical depth to help your next chapter take shape."
      >
        <div className="hero-actions">
          <Action href="/contact">Book a consultation</Action>

          <Action href="#services" variant="ghost">
            Explore services
          </Action>
        </div>
      </Hero>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our capabilities"
            title="One team, the full picture."
            description="Choose a starting point or bring us a challenge that needs a little of everything."
          />

          <div>
            {ServiceRows.map(
              ({
                icon: Icon,
                title,
                text,
                subservices,
              }) => (
                <div className="service-row" key={title}>
                  <div>
                    <div className="icon-chip chip-teal">
                      <Icon size={22} />
                    </div>

                    <h3>{title}</h3>

                    <p>{text}</p>
                  </div>

                  <div className="subservice-grid">
                    {subservices.map((service) => (
                      <div
                        className="subservice"
                        key={service.title}
                      >
                        <strong>{service.title}</strong>

                        <p>{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="section"
        style={{ background: "#f1f3f1" }}
      >
        <div className="site-container">
          <SectionHeading
            eyebrow="Simple pricing"
            title="A clear place to start."
            description="Every engagement begins with a conversation. These packages help frame the right level of support."
          />

          <div className="grid-3">
            {PricingPlans.map((plan) => (
              <article
                className={`card pricing-card ${plan.popular ? "dark-pricing" : ""
                  }`}
                key={plan.name}
              >
                {plan.popular && (
                  <span className="popular">
                    Most popular
                  </span>
                )}

                <h3>{plan.name}</h3>

                <div className="price">
                  {plan.price}

                  {plan.period && (
                    <small>{plan.period}</small>
                  )}
                </div>

                <p
                  style={{
                    color: plan.popular
                      ? "#b5c0c5"
                      : "#5b6472",
                  }}
                >
                  {plan.description}
                </p>

                <Checklist items={plan.features} />

                <Action
                  href="/contact"
                  variant={
                    plan.popular ? undefined : "ghost"
                  }
                >
                  {plan.action}
                </Action>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Who we work with"
            title="Built for people doing meaningful work."
          />

          <div className="grid-3">
            {Industries.map((industry) => (
              <IconCard
                key={industry.name}
                icon={industry.icon}
                title={industry.name}
                tone={industry.tone}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Chautari */}
      <DarkBanner
        eyebrow="Why Digital Chautari"
        title="A partner who stays in the room."
        text="Good work needs trust, transparency, and the flexibility to respond to what we learn."
      >
        <div
          className="grid-3"
          style={{ marginTop: 32 }}
        >
          {Benefits.map((benefit) => (
            <div className="dark-card" key={benefit}>
              <CheckMark />
              {benefit}
            </div>
          ))}
        </div>
      </DarkBanner>

      {/* Closing CTA */}
      <section className="section">
        <div className="site-container">
          <div className="join-cta">
            <Sparkles size={28} />
            <h2>Let's find the right service for you</h2>
            <Action href="/contact" variant="light">
              Book a Consultation
              {/* <ArrowRight size={16} /> */}
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckMark() {
  return (
    <span
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: 25,
        height: 25,
        borderRadius: "50%",
        background: "#e0a930",
        color: "#0b1220",
        marginRight: 10,
      }}
    >
      ✓
    </span>
  );
}