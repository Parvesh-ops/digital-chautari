"use client";

import { Navbar } from "@/src/app-pages/layout/Navbar";
import { Footer } from "@/src/app-pages/layout/Footer";
import React from "react";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}