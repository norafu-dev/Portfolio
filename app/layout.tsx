import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Navbar from "@/components/nav/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const loreka = localFont({
  src: "../public/fonts/Loreka.otf",
  display: "swap",
});

const lxgw_mono = localFont({
  src: [
    {
      path: "../public/fonts/LXGWWenKaiMonoLite-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LXGWWenKaiMonoLite-Medium.woff2",
      weight: "500",
      style: "medium",
    },
  ],
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${loreka.className} ${lxgw_mono.className}`}
    >
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
