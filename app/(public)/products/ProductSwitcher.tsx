"use client";

import { Action } from "@/components/site";
import { useState } from "react";

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