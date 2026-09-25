import { Action, SectionHeading } from "@/components/site";
import { products } from "@/src/data/data";

export function ProductsSection() {
  return (
    <section className="section">
      <div className="site-container">
        <SectionHeading
          eyebrow="Our products"
          title="Three ventures, one vision."
          description="We make things that help brands communicate, people create, and communities live healthier lives."
        />
        <div className="grid-3">
          {products.map((product) => (
            <article className="card" key={product.name}>
              <div className={`icon-chip chip-${product.tone}`}>{product.icon}</div>
              <p className="blog-meta" style={{ marginTop: 18 }}>
                {product.label}
              </p>
              <h3 style={{ marginTop: 8, fontSize: 22 }}>{product.name}</h3>
              <p style={{ color: "#5b6472", marginTop: 8 }}>{product.text}</p>
              <Action href="/products" variant="ghost">
                Learn more
              </Action>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}