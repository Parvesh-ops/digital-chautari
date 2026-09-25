import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalchautari.com"),
  title: {
    default: "Digital Chautari | Ideas into impact",
    template: "%s | Digital Chautari",
  },
  description: "A creative technology company from Kathmandu building digital bridges between ideas and impact.",
  keywords: [
    "Digital Chautari",
    "digital agency Nepal",
    "creative technology",
    "digital products",
    "software development",
    "digital marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Digital Chautari",
    title: "Digital Chautari | Ideas into impact",
    description: "A creative technology company from Kathmandu building digital bridges between ideas and impact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Chautari | Ideas into impact",
    description: "A creative technology company from Kathmandu building digital bridges between ideas and impact.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
