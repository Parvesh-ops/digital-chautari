import type { Metadata } from "next";
import {
  Action,
  Hero,
} from "@/src/components/common/site";
import ServicesPage from "@/src/components/app-pages/services/page";

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

      <ServicesPage />

    </>
  );
}
