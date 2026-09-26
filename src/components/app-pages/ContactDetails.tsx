import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactDetails() {
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