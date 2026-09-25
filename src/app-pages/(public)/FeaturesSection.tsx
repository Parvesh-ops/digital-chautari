import { IconCard } from "@/components/site";
import { Features } from "@/src/constants/Features";

const tones = ["mint", "teal", "gold", "lilac"];

export function FeaturesSection() {
  return (
    <section className="section">
      <div className="site-container">
        <div className="grid-4">
          {Features.map(([icon, title, text], i) => (
            <IconCard
              key={title as string}
              icon={icon}
              title={title as string}
              text={text as string}
              tone={tones[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}