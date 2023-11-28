import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { Lora } from "next/font/google";

export const metadata: Metadata = {
  title: "Zino M",
  description: "This is where the fun begins ...",
};

const lora = Lora({ subsets: ["latin"] });

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.className}>
      <body>{children}</body>
    </html>
  );
}
