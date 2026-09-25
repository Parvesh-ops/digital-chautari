import { SectionHeading } from "@/components/site";
import { testimonials } from "@/src/data/data";

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading eyebrow="Kind words" title="Good company makes good work." />
        <div className="grid-3">
          {testimonials.map((testimonial) => (
            <article className="card" key={testimonial.name}>
              <div className="stars">★★★★★</div>
              <p className="quote" style={{ marginTop: 14 }}>
                {testimonial.quote}
              </p>
              <div className="quote-author">
                {testimonial.name}
                <small>{testimonial.role}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}