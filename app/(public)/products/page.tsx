
import type { Metadata } from "next";
import ProductPage from "@/src/components/app-pages/product/page";
import { Hero } from "@/src/components/common/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Discover Digital Chautari's ventures across creative marketing, content production, and accessible health technology.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products",
    description: "Discover Digital Chautari's ventures across creative marketing, content production, and accessible health technology.",
    url: "/products",
  },
};

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        eyebrow="Our ventures"
        title="Three ventures, one vision"
        description="We build brands, stories, and products that make life a little more connected, creative, and human."
      />

      {/* Products Section */}
      <ProductPage />

    </>
  );
}