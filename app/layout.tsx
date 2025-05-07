import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Navbar from "@/components/nav/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const loreka = localFont({
  src: "../public/fonts/Loreka.otf",
  display: "swap",
});

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
    <html lang="en" suppressHydrationWarning className={loreka.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
