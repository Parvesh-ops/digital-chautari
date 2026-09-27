import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <div>
        <MapPin size={18} />
        <span className="contact-detail-label">Address</span>
        <strong>Kathmandu, Nepal</strong>
      </div>

      <div>
        <Mail size={18} />
        <span className="contact-detail-label">Email</span>
        <strong><a href="mailto:hello@digitalchautari.com">hello@digitalchautari.com</a></strong>
      </div>

      <div>
        <Phone size={18} />
        <span className="contact-detail-label">Phone</span>
        <strong><a href="tel:+9779800000000">+977 980-000-0000</a></strong>
      </div>

      <div>
        <Clock3 size={18} />
        <span className="contact-detail-label">Business hours</span>
        <strong>Sun–Fri, 10:00–18:00</strong>
      </div>
    </div>
  );
}