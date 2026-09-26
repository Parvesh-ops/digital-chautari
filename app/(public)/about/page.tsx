import type { Metadata } from "next";
import { ArrowRight, Briefcase, Compass, Handshake, Heart, Lightbulb, ShieldCheck, Sparkles, Star, Target, Users } from "lucide-react";
import { Action, Hero, SectionHeading } from "@/src/components/common/site";
import Image from "next/image";
import About from "@/src/components/app-pages/about/page";

export const metadata: Metadata = {
  title: "About us",
  description: "Meet the people, principles, and purpose behind Digital Chautari, a growing digital company rooted in Kathmandu.",
  keywords: [
    "Digital Chautari",
    "About Digital Chautari",
    "digital company Nepal",
    "technology company Kathmandu",
    "digital products Nepal",
    "digital solutions Nepal",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About us",
    description: "Meet the people, principles, and purpose behind Digital Chautari, a growing digital company rooted in Kathmandu.",
    url: "/about",
  },
};



export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="The people behind Digital Chautari"
        description="A growing digital company rooted in Kathmandu, shaped by teamwork, creativity, and a belief that thoughtful technology can help people and businesses move forward."
      />

      <About />

    </>
  );
}