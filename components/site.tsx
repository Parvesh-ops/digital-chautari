"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export function Hero({
  eyebrow,
  title,
  highlight,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
}) {
  const pieces = highlight ? title.split(highlight) : [title];

  return (
    <section className="hero-surface">
      <div
        className="site-container section"
        style={{ paddingTop: 84, paddingBottom: 48 }}
      >
        <div className="reveal" style={{ maxWidth: 760 }}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", lineHeight: 1.04, marginTop: 22 }}>
            {pieces[0]}
            {highlight && <span className="gradient-text">{highlight}</span>}
            {pieces[1]}
          </h1>
          <p style={{ maxWidth: 680, marginTop: 22, color: "#5b6472", fontSize: 18 }}>
            {description}
          </p>
          {children && <div style={{ marginTop: 28 }}>{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="section-heading">
      {eyebrow && (
        <span
          className="eyebrow"
          style={
            light
              ? { background: "#202c36", color: "#e0a930", borderColor: "#354454" }
              : undefined
          }
        >
          {eyebrow}
        </span>
      )}
      <h2 style={light ? { color: "white" } : undefined}>{title}</h2>
      {description && (
        <p style={light ? { color: "#b5c0c5" } : undefined}>{description}</p>
      )}
    </div>
  );
}

export function Action({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
}) {
  return (
    <Link href={href} className={`action action-${variant}`}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function IconCard({
  icon,
  title,
  text,
  tone = "mint",
  dark = false,
}: {
  icon: ReactNode;
  title: string;
  text?: string;
  tone?: string;
  dark?: boolean;
}) {
  return (
    <article className={dark ? "dark-card" : "card"}>
      <div className={`icon-chip chip-${tone}`}>{icon}</div>
      <h3 style={{ marginTop: 18, fontSize: 18 }}>{title}</h3>
      {text && (
        <p style={{ color: dark ? "#b5c0c5" : "#5b6472", marginTop: 8 }}>
          {text}
        </p>
      )}
    </article>
  );
}

export function Stats({
  items,
}: {
  items: { value: string; label: string; icon: ReactNode }[];
}) {
  return (
    <div className="stats-card">
      {items.map((item) => (
        <div className="stat" key={item.label}>
          <span className="stat-icon">{item.icon}</span>
          <div>
            <strong>{item.value}</strong>
            <small>{item.label}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DarkBanner({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <section className="dark-section section">
      <div className="site-container">
        <SectionHeading eyebrow={eyebrow} title={title} description={text} light />
        {children}
      </div>
    </section>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <span>
            <Check size={14} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ClosingCta({
  title,
  text = "Bring your next bold idea to life with a team that cares about the details.",
}: {
  title: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="site-container">
        <div className="closing-cta">
          <Sparkles size={28} />
          <h2>{title}</h2>
          <p>{text}</p>
          <Action href="/contact" variant="light">
            Start a project
          </Action>
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    name: "Eco",
    label: "Creative marketing agency",
    title: "Make your brand impossible to ignore.",
    description:
      "Strategy, campaigns, and content systems for ambitious brands ready to grow with purpose.",
    tags: ["Brand strategy", "Growth campaigns", "Social content"],
    color: "#e7f5ea",
  },
  {
    name: "One",
    label: "Content creation studio",
    title: "One studio for every story.",
    description:
      "A nimble creative studio producing films, photography, and digital experiences people remember.",
    tags: ["Video production", "Photography", "Creative direction"],
    color: "#fdf1de",
  },
  {
    name: "Physio@Home",
    label: "Health-tech platform",
    title: "Care that moves with you.",
    description:
      "Personalized physiotherapy and expert guidance, delivered wherever recovery happens.",
    tags: ["Remote care", "Expert therapists", "Better outcomes"],
    color: "#e7f2f4",
  },
];

export function ProductSwitcher() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <div className="product-switcher">
      <div className="product-tabs">
        {products.map((item, index) => (
          <button
            className={active === index ? "active" : ""}
            key={item.name}
            onClick={() => setActive(index)}
          >
            {item.name}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="product-panel">
        <div>
          <span className="eyebrow">{product.label}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="tag-list">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Action href="/contact">Explore {product.name}</Action>
        </div>

        <div className="mock-product" style={{ background: product.color }}>
          <div className="mock-window">
            <div className="mock-dots">● ● ●</div>
            <div className="mock-line long" />
            <div className="mock-line" />
            <div className="mock-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [type, setType] = useState("A new project");

  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-grid">
        <label>
          Name
          <input required placeholder="Your name" />
        </label>
        <label>
          Email
          <input required type="email" placeholder="you@company.com" />
        </label>
      </div>

      <label>
        Subject
        <input placeholder="What can we help with?" />
      </label>

      <fieldset>
        <legend>Project type</legend>
        <div className="project-pills">
          {["A new project", "Partnership", "Just saying hi"].map((item) => (
            <button
              type="button"
              className={type === item ? "selected" : ""}
              onClick={() => setType(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <label>
        Message
        <textarea rows={5} placeholder="Tell us a little about your goals..." />
      </label>

      <button className="submit-button" type="submit">
        Send message <ArrowRight size={16} />
      </button>
    </form>
  );
}

export function ContactDetails() {
  return (
    <div className="contact-details">
      <div>
        <MapPin size={18} />
        <strong>Kathmandu, Nepal</strong>
        <span>Thamel, Kathmandu</span>
      </div>
      <div>
        <Mail size={18} />
        <strong>hello@digitalchautari.com</strong>
        <span>We reply within 24 hours</span>
      </div>
      <div>
        <Phone size={18} />
        <strong>+977 980-000-0000</strong>
        <span>Sun–Fri, 10:00–18:00</span>
      </div>
    </div>
  );
}

export function ArrowList({ items }: { items: string[] }) {
  return (
    <ul className="arrow-list">
      {items.map((item) => (
        <li key={item}>
          <ChevronRight size={15} />
          {item}
        </li>
      ))}
    </ul>
  );
}