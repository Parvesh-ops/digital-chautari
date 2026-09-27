"use client";

import { Action } from "@/src/components/common/site";
import { useState, type KeyboardEvent } from "react";

const products = [
  {
    id: "eco",
    name: "Eco",
    label: "Creative Marketing Agency",
    title: "Make your brand impossible to ignore.",
    description:
      "Strategy, campaigns, and content systems for ambitious brands ready to grow with purpose.",
    tags: ["Brand strategy", "Growth campaigns", "Social content"],
    color: "#e6f0df",
  },
  {
    id: "one",
    name: "One",
    label: "Content Creation Studio",
    title: "One studio for every story.",
    description:
      "A nimble creative studio producing films, photography, and digital experiences people remember.",
    tags: ["Video production", "Photography", "Creative direction"],
    color: "#f3e7d8",
  },
  {
    id: "physio",
    name: "Physio@Home",
    label: "Health-Tech Platform",
    title: "Care that moves with you.",
    description:
      "Personalized physiotherapy and expert guidance, delivered wherever recovery happens.",
    tags: ["Remote care", "Expert therapists", "Better outcomes"],
    color: "#dcebea",
  },
];

export function ProductSwitcher() {
  const [active, setActive] = useState(0);
  const product = products[active];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % products.length;
    if (event.key === "ArrowLeft") nextIndex = (index + products.length - 1) % products.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = products.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      setActive(nextIndex);
      document.getElementById(`product-tab-${nextIndex}`)?.focus();
    }
  }

  return (
    <div className="product-switcher">
      <div className="product-tabs" role="tablist" aria-label="Choose a venture">
        {products.map((item, index) => (
          <button
            aria-controls="product-panel"
            aria-selected={active === index}
            className={active === index ? "active" : ""}
            id={`product-tab-${index}`}
            key={item.name}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            role="tab"
            tabIndex={active === index ? 0 : -1}
          >
            {item.name}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div
        aria-labelledby={`product-tab-${active}`}
        className="product-panel"
        id="product-panel"
        role="tabpanel"
        tabIndex={0}
      >
        <div className="product-copy product-panel-enter" key={`${product.id}-copy`}>
          <span className="eyebrow">{product.label}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="tag-list" aria-label={`${product.name} capabilities`}>
            {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <Action href="/contact">Explore {product.name}</Action>
        </div>

        <div
          aria-label={`${product.name} interface preview`}
          className={`mock-product mock-${product.id} product-panel-enter`}
          key={`${product.id}-preview`}
          role="img"
          style={{ background: product.color }}
        >
          {product.id === "eco" && (
            <div className="mock-window mock-window-eco">
              <div className="mock-topbar"><strong>ECO</strong><span>BRAND STUDIO</span><i /></div>
              <div className="eco-preview-body">
                <div className="eco-preview-copy">
                  <span>CAMPAIGN / 01</span>
                  <strong>Make some good noise.</strong>
                  <small>Ideas built to move people.</small>
                  <b>EXPLORE THE CAMPAIGN ↗</b>
                </div>
                <div className="eco-preview-art" aria-hidden="true"><i /><i /><i /></div>
              </div>
              <div className="mock-footer-line"><span>STRATEGY</span><span>CREATIVE</span><span>GROWTH</span></div>
            </div>
          )}

          {product.id === "one" && (
            <div className="mock-window mock-window-one">
              <div className="mock-topbar"><strong>ONE</strong><span>CONTENT STUDIO</span><i /></div>
              <div className="one-preview-feature">
                <div className="one-preview-play" aria-hidden="true">▶</div>
                <span>STORIES, IN MOTION</span>
              </div>
              <div className="one-preview-caption"><strong>Frame the feeling.</strong><span>FILM · PHOTO · DESIGN</span></div>
              <div className="one-preview-reel" aria-hidden="true"><i /><i /><i /></div>
            </div>
          )}

          {product.id === "physio" && (
            <div className="physio-device">
              <div className="physio-screen">
                <div className="physio-appbar"><span>Physio@Home</span><i>•••</i></div>
                <small>YOUR RECOVERY, IN REACH</small>
                <strong>Good morning,<br />Sam.</strong>
                <div className="physio-appointment"><span>NEXT SESSION</span><b>Today · 10:30 AM</b><small>With Anisha K.</small></div>
                <div className="physio-progress"><span>WEEKLY MOVEMENT</span><i><b /></i><small>4 of 5 sessions complete</small></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}