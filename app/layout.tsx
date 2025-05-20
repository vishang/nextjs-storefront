import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import '@/assets/styles/globals.css'
import { APP_NAME } from "@/lib/constants";
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "A modern ecommerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
        attribute='class'
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
