import Link from "next/link";


import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const NAV_LINKS = [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Products", href: "/products" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }];
const SERVICE_LINKS = ["Digital marketing", "Content creation", "Software development", "Branding & design"];
const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Cookie policy", href: "/cookies" },
];

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com", icon: BsTwitter },
  { label: "Instagram", href: "https://instagram.com", icon: BsInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: BsLinkedin },
  { label: "Facebook", href: "https://facebook.com", icon: BsFacebook },
];

export function Footer() {
  const year = new Date().getFullYear();

  return <footer className="site-footer"><div className="site-container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" className="brand footer-brand"><span className="brand-mark">DC</span><span><strong>Digital Chautari</strong><small>Ideas into impact</small></span></Link>
            <p>Creative technology for brands, stories, and better health outcomes.</p>
          </div>

          {/* Navigation */}
          <div>
            <h3>Company</h3><ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Services</h3><ul>{SERVICE_LINKS.map((link) => <li key={link}><Link href="/services" className="footer-link">{link}</Link></li>)}</ul>
          </div>

          {/* Legal */}
          <div>
            <h3>Legal</h3>
            <ul>{LEGAL_LINKS.map((link) => <li key={link.href}><Link href={link.href} className="footer-link">{link.label}</Link></li>)}</ul>
            <ul className="footer-contact-list"><li><a className="footer-link" href="mailto:hello@digitalchautari.com">hello@digitalchautari.com</a></li><li><a className="footer-link" href="tel:+9779800000000">+977 980-000-0000</a></li></ul>
            <div className="social-row">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="social-link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {year} Digital Chautari. All rights reserved.</span></div>
      </div>
    </footer>;
}