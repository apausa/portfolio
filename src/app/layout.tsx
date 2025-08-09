import React from 'react';

import { Geist, Geist_Mono } from 'next/font/google';

import ThemeProvider from '@/lib/theme-provider';

import './globals.css';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pablo Apausa',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement => (
  <html suppressHydrationWarning lang="en">
    <body className={`
      ${geistSans.variable}
      ${geistMono.variable}
      antialiased
      h-screen
      flex
      flex-col
      items-center
      justify-center
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
