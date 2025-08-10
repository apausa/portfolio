import React from 'react';

import { Montserrat } from 'next/font/google';

import ThemeProvider from '@/lib/theme-provider';

import './globals.css';

import type { Metadata } from 'next';

const montserrat = Montserrat({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pablo Apausa',
  description: 'Personal website',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement => (
  <html suppressHydrationWarning lang="en">
    <body className={`
      ${montserrat.variable}
      antialiased
      gap-4
      flex
      flex-col
      items-center
      justify-center
      h-screen
      max-w-lg
      mx-4
      xs:mx-auto
    `}>
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

export default RootLayout;
