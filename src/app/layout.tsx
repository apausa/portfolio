import { Montserrat } from "next/font/google";

import P5Sketch from "@/components/home/Background";
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
  portfolio,
}: Readonly<{
  children: React.ReactNode;
  portfolio: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning data-theme="dark" lang="en">
      <body
        className={`
        ${montserrat.variable}
        antialiased
        flex
        flex-col
        xs:flex-row
      `}
      >
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <P5Sketch />
          {children}
          {portfolio}
        </ThemeProvider>
      </body>
    </html>
  );
}
