import {
  HeartPulse,
  Lightbulb,
  PenTool,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { IconCard, SectionHeading } from "@/components/site";
import { sectors } from "@/src/data/data";

const sectorIcons = [
  <HeartPulse size={20} key="heart-pulse" />,
  <Zap size={20} key="zap" />,
  <ShieldCheck size={20} key="shield-check" />,
  <Lightbulb size={20} key="lightbulb" />,
  <Sparkles size={20} key="sparkles" />,
  <PenTool size={20} key="pen-tool" />,
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