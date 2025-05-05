import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/nav/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
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
