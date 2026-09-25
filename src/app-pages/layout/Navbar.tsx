"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/src/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="site-header">
      <div className="site-container nav-inner">
        {/* Logo */}
        <Link href="/" className="brand">
          <span className="brand-mark">DC</span><span><strong>Digital Chautari</strong><small>Ideas into impact</small></span>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  isActive
                    ? "active"
                    : ""
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <Link href="/contact" className="nav-cta">Contact us <span>↗</span></Link>
        </div>

        {/* Mobile menu */}
        <div className="mobile-nav">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger render={<button className="menu-button" aria-label="Open menu" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader><SheetTitle>Digital Chautari</SheetTitle></SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "nav-link mobile-link",
                        isActive
                          ? "active"
                          : ""
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link className="nav-cta mobile-cta" href="/contact" onClick={() => setOpen(false)}>Contact us <span>↗</span></Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}