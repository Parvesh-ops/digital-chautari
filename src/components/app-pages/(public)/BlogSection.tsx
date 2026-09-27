import { Action, SectionHeading } from "@/src/components/common/site";
import { blogPosts } from "@/src/data/data";

export function BlogSection() {
  return (
    <section className="section pt-0">
      <div className="site-container">
        <SectionHeading
          eyebrow="Notes from the Chautari"
          title="Latest from our blog"
        />

        <div className="grid-3">
          {blogPosts.map((post) => (
            <article
              className="card blog-card"
              key={post.title}
            >
              <div
                className="blog-art"
                style={{ background: post.gradient }}
              />

              <span className="blog-meta">
                {post.category} · 5 min read
              </span>

              <h3>{post.title}</h3>

              <p className="mt-2 text-sm text-[#5b6472]">
                {post.text}
              </p>

              <Action href="/contact" variant="ghost">
                Read more
              </Action>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}