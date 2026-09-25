import Link from "next/link";


import { Separator } from "@/components/ui/separator";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Product", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: BsTwitter },
  { label: "Instagram", href: "https://instagram.com", icon: BsInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: BsLinkedin },
  { label: "Facebook", href: "https://facebook.com", icon: BsFacebook },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-semibold">
              YourLogo
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Building products and services people actually enjoy using.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-sm font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="transition-colors hover:text-foreground"
                >
                  hello@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+10000000000"
                  className="transition-colors hover:text-foreground"
                >
                  +1 (000) 000-0000
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} YourLogo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}