import type { Metadata } from "next";
import { ClosingCta } from "@/src/components/common/site";
import { AboutSection } from "@/src/components/app-pages/(public)/AboutSection";
import { BlogSection } from "@/src/components/app-pages/(public)/BlogSection";
import { FeaturesSection } from "@/src/components/app-pages/(public)/FeaturesSection";
import { HeroSection } from "@/src/components/app-pages/(public)/HeroSection";
import { NumbersSection } from "@/src/components/app-pages/(public)/NumbersSection";
import { ProductsSection } from "@/src/components/app-pages/(public)/ProductsSection";
import { TestimonialsSection } from "@/src/components/app-pages/(public)/TestimonialsSection";
import { SectorsSection } from "@/src/components/app-pages/(public)/SectorsSection";
import { ProcessSection } from "@/src/components/app-pages/(public)/ProcessSection";



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