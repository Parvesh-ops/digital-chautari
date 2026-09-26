
import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Code2,
  MapPin,
  Megaphone,
  PenTool,
} from "lucide-react";

import {
  Hero,
  IconCard,
  SectionHeading,
} from "@/src/components/common/site";
import ContactForm from "../../../src/components/app-pages/contact/components/ContactForm";
import ContactDetails from "../../../src/components/app-pages/contact/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Digital Chautari about your next project, product idea, or digital challenge.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: "Start a conversation with Digital Chautari about your next project, product idea, or digital challenge.",
    url: "/contact",
  },
};

const directLines = [
  {
    icon: Megaphone,
    title: "Marketing",
    text: "marketing@digitalchautari.com",
    tone: "mint",
  },
  {
    icon: PenTool,
    title: "Content Studio",
    text: "studio@digitalchautari.com",
    tone: "gold",
  },
  {
    icon: Code2,
    title: "Software Dev",
    text: "tech@digitalchautari.com",
    tone: "teal",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Dev",
    text: "partnerships@digitalchautari.com",
    tone: "lilac",
  },
] as const;

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Let's talk"
        title="Let's start a conversation"
        description="Have a project in mind, a question about our products, or just want to say hello? We’d love to hear from you."
      />

      {/* Contact Details */}
      <section className="section">
        <div className="site-container">
          <ContactDetails />
        </div>
      </section>

      {/* Direct Lines */}
      <section className="section pt-16">
        <div className="site-container">
          <SectionHeading
            eyebrow="Direct lines"
            title="Reach the right team."
          />

          <div className="grid-4">
            {directLines.map(
              ({ icon: Icon, title, text, tone }) => (
                <IconCard
                  key={title}
                  icon={<Icon size={21} />}
                  title={title}
                  text={text}
                  tone={tone}
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* Contact Form & Location */}
      <section className="section bg-[#f1f3f1]">
        <div className="site-container contact-layout">
          {/* Contact Form */}
          <div>
            <SectionHeading
              eyebrow="Your turn"
              title="Tell us what you’re thinking."
              description="A few details help us bring the right people into the first conversation."
            />

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            {/* Location Card */}
            <div className="map-card relative">
              <MapPin
                size={34}
                strokeWidth={1.5}
                className="absolute top-[48%] left-[48%] text-white bg-[#0f9488] rounded-full p-1.75 box-content"
              />

              <strong className="mt-36 block">
                Kathmandu, Nepal
              </strong>

              <span>Come say hello at our Chautari.</span>
            </div>

            {/* FAQ Card */}
            <div className="dark-card mt-4">
              <span className="eyebrow">Need quick answers?</span>

              <h3 className="mt-4 text-white">
                Visit our FAQ page{" "}
                <span className="text-[#e0a930]">→</span>
              </h3>
            </div>

            {/* Response Times */}
            <div className="mt-6">
              <h3 className="text-base">Response times</h3>

              <ul className="response-list">
                <li>
                  Email <strong>Within 24 hours</strong>
                </li>

                <li>
                  Proposals <strong>2-3 days</strong>
                </li>

                <li>
                  Urgent requests <strong>Same day</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}