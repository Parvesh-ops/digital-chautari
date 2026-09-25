import { DarkBanner } from "@/components/site";
import { numbers } from "@/src/data/data";

export function NumbersSection() {
  return (
    <DarkBanner
      eyebrow="The numbers"
      title="Good work leaves a measurable mark."
      text="From first sketch to lasting partnership, we bring energy and accountability to every brief."
    >
      <div className="numbered">
        {numbers.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </DarkBanner>
  );
}