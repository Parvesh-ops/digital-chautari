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
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel = "View Services",
  secondaryHref = "/services",
}: {
  title: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section">
      <div className="site-container">
        <div className="closing-cta">
          <Sparkles size={28} />

          <h2>{title}</h2>

          <p>{text}</p>

          <div className="closing-cta-actions">
            <Link href={primaryHref} className="closing-cta-button primary">
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
            <Link href={secondaryHref} className="closing-cta-button secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
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