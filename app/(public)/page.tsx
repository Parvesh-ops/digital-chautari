import type { Metadata } from "next";
import { ClosingCta } from "@/components/site";
import { AboutSection } from "@/src/app-pages/(public)/AboutSection";
import { BlogSection } from "@/src/app-pages/(public)/BlogSection";
import { FeaturesSection } from "@/src/app-pages/(public)/FeaturesSection";
import { HeroSection } from "@/src/app-pages/(public)/HeroSection";
import { NumbersSection } from "@/src/app-pages/(public)/NumbersSection";
import { ProductsSection } from "@/src/app-pages/(public)/ProductsSection";
import { TestimonialsSection } from "@/src/app-pages/(public)/TestimonialsSection";
import { SectorsSection } from "@/src/app-pages/(public)/SectorsSection";
import { ProcessSection } from "@/src/app-pages/(public)/ProcessSection";

export const metadata: Metadata = {
  title: "Ideas into impact",
  description: "Digital Chautari brings together strategy, design, technology, and storytelling to build meaningful digital experiences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ideas into impact",
    description: "Digital Chautari brings together strategy, design, technology, and storytelling to build meaningful digital experiences.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <NumbersSection />
      <ProductsSection />
      <SectorsSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <ClosingCta
        title="Ready to build something extraordinary together?"
        primaryLabel="Start a Project"
        secondaryLabel="View Services"
        primaryHref="/contact"
        secondaryHref="/services"
      />
    </>
  );
}