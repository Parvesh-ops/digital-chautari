import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Chautari | Ideas into impact",
  description: "A creative technology company from Kathmandu building digital bridges between ideas and impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
