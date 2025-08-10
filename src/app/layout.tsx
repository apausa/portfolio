import { Montserrat } from "next/font/google";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  blog,
}: Readonly<{
  children: React.ReactNode;
  blog: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
