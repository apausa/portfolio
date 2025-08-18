import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";

import P5Sketch from "@/components/Background";
import { ThemeProvider } from "@/components/ui/theme-provider";

import "./globals.css";

import type { Metadata } from "next";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo Apausa",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning data-theme="light" lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-custom-background`}
      >
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <Analytics />
          <P5Sketch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
