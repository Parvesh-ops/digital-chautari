import { DarkBanner } from "@/components/site";
import { processSteps } from "@/src/data/data";

export function ProcessSection() {
  return (
    <DarkBanner
      eyebrow="How we work"
      title="Our 4-step process"
      text="A simple rhythm that keeps big ideas moving and everyone in the room."
    >
      <div className="numbered">
        {processSteps.map((step) => (
          <div className="dark-card" key={step.number}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </DarkBanner>
  );
}