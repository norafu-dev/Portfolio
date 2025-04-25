import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nora Fu",
  description: "Portfolio based on Next.js and Notion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
