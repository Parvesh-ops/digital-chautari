import type { Metadata } from "next";
import { ArrowRight, Briefcase, Compass, Handshake, Heart, Lightbulb, ShieldCheck, Sparkles, Star, Target, Users } from "lucide-react";
import { Action, Hero, SectionHeading } from "@/src/components/common/site";
import Image from "next/image";

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

const storyStats = [
  { value: "2025", label: "Founded", tone: "teal" },
  { value: "3", label: "Products", tone: "navy" },
  { value: "Kathmandu", label: "HQ", tone: "white" },
  { value: "7+", label: "Team Members", tone: "gold" },
];

const missionVision = [
  {
    title: "Mission",
    text: "To help businesses, communities, and people grow through thoughtful digital products, meaningful storytelling, and reliable technology solutions.",
    icon: <Target size={20} />,
  },
  {
    title: "Vision",
    text: "To become a trusted digital partner in Nepal and beyond, building ideas that matter and experiences that leave a lasting impact.",
    icon: <Compass size={20} />,
  },
];

const values = [
  { name: "Passion", text: "We care deeply about the work and the people behind it.", icon: <Heart size={18} /> },
  { name: "Creativity", text: "We turn ideas into design, stories, and experiences that feel alive.", icon: <Lightbulb size={18} /> },
  { name: "Excellence", text: "We aim for thoughtful execution and long-term quality in every detail.", icon: <Star size={18} /> },
  { name: "Collaboration", text: "We work closely with teams, clients, and partners to move forward together.", icon: <Handshake size={18} /> },
];

const trustItems = [
  "ISO 9001 Ready",
  "Data Protection",
  "Global Delivery",
  "Pan-Nepal Network",
];

const teamMembers = [
  {
    role: "Founder & CEO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
  {
    role: "Co-Founder & COO",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
  {
    role: "Front-End Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
  {
    role: "Back-End Developer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
  {
    role: "Marketing Lead",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
  {
    role: "Sales Executive",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
  {
    role: "Business Development Officer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6x2bfgOZPjTgmms2hlmyqFBRDO0wshoJdYfizxserw&s",
  },
];

const roadmap = [
  { year: "2025", title: "The Idea", label: "A vision to build a digital company rooted in local insight and global ambition." },
  { year: "2025", title: "First Products", label: "We launched our first products to bring value through digital storytelling and services." },
  { year: "2026", title: "Health-Tech Entry", label: "We expanded into health technology with a more human, accessible care experience." },
  { year: "2026", title: "Company Registration", label: "We formalized the company foundation to scale with trust, structure, and purpose." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="The people behind Digital Chautari"
        description="A growing digital company rooted in Kathmandu, shaped by teamwork, creativity, and a belief that thoughtful technology can help people and businesses move forward."
      />

      <section className="section">
        <div className="site-container">
          <div className="about-story-heading">
            <span className="eyebrow">Our story</span>
            <h2>From a chautari to a digital powerhouse</h2>
            <p>
              Digital Chautari began with the idea that meaningful ideas deserve space, clarity, and momentum. Inspired by the familiar chautari — a place for conversation, exchange, and connection — we built a company that brings together strategy, design, development, and storytelling under one roof.
            </p>
          </div>

          <div className="grid grid-2  md:grid-cols-4">
            {storyStats.map((stat, index) => (
              <div key={stat.label} className={`story-tile tile-${stat.tone}`}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
                {index === 1 && <small>Digital growth</small>}
                {index === 3 && <small>Across teams</small>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid grid-2">
            {missionVision.map((item) => (
              <article key={item.title} className="mission-card">
                <div className="mission-icon">{item.icon}</div>
                <span className="eyebrow">{item.title}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Values" title="The principles behind our work." />
          <div className="grid grid-2  md:grid-cols-4">
            {values.map((value) => (
              <article key={value.name} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.name}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section section">
        <div className="site-container">
          <SectionHeading eyebrow="Quality & trust" title="Committed to quality & trust" light />
          <div className="grid grid-2  md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="dark-card trust-card">
                <div className="trust-icon"><ShieldCheck size={18} /></div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Our team" title="The people making it happen." />
          <section className="section">
            <div className="site-container">
              <SectionHeading
                eyebrow="Our team"
                title="The people making it happen."
              />

              <div className="grid grid-2 md:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <article key={member.role} className="team-card">
                    <div className="team-avatar">
                      <Image
                        src={member.image}
                        alt={member.role}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p>{member.role}</p>
                    <span>Team Member {index + 1}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="dark-section section">
        <div className="site-container">
          <SectionHeading eyebrow="Roadmap" title="How we built from idea to impact." light />
          <div className="timeline">
            {roadmap.map((item, index) => (
              <div key={`${item.title}-${item.year}`} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <span className="year-pill">{item.year}</span>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="join-cta">
            <Sparkles size={28} />
            <h2>Want to join our journey?</h2>
            <Action href="/contact" variant="light">
              Get in Touch
              {/* <ArrowRight size={16} /> */}
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}