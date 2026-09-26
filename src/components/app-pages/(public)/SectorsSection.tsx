import {
  Building2,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Newspaper,
  PenTool,
  Plane,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";

import { IconCard, SectionHeading } from "@/src/components/common/site";
import { sectors } from "@/src/data/data";

const sectorIcons = [
  <HeartPulse size={20} key="heart-pulse" />,
  <ShoppingCart size={20} key="shopping-cart" />,
  <Building2 size={20} key="building-2" />,
  <GraduationCap size={20} key="graduation-cap" />,
  <Plane size={20} key="plane" />,
  <Newspaper size={20} key="newspaper" />,
];

const tones = ["mint", "teal", "gold", "lilac", "pink", "mint"];

export function SectorsSection() {
  return (
    <section className="section" style={{ paddingTop: 10 }}>
      <div className="site-container">
        <SectionHeading eyebrow="Sectors we serve" title="Useful in every corner of life." />
        <div className="grid-3">
          {sectors.map((sector, i) => (
            <IconCard
              key={sector}
              icon={sectorIcons[i]}
              title={sector}
              tone={tones[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}