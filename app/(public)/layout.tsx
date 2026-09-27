"use client";

import { Navbar } from "@/src/components/app-pages/layout/Navbar";
import { Footer } from "@/src/components/app-pages/layout/Footer";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const gridSelector = ".grid-4, .grid-3, .grid-2, .numbered, .story-grid, .mission-grid, .values-grid, .trust-grid, .team-grid, .timeline, .subservice-grid, .contact-details";
    const targets = document.querySelectorAll<HTMLElement>([
      "main .card",
      "main .dark-card",
      "main .story-tile",
      "main .mission-card",
      "main .value-card",
      "main .team-card",
      "main .timeline-item",
      "main .subservice",
      "main .product-panel",
      "main .contact-details > *",
      "main .map-card",
      ...gridSelector.split(", ").map((selector) => `main ${selector} > *`),
    ].join(", "));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    targets.forEach((target) => {
      const grid = target.closest(gridSelector);
      const itemIndex = grid ? Array.from(grid.children).indexOf(target) : 0;
      target.style.setProperty("--reveal-delay", `${itemIndex * 70}ms`);
      target.classList.add("scroll-reveal");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main key={pathname} className="flex-1 w-full page-transition">
        {children}
      </main>

      <Footer />
    </div>
  );
}