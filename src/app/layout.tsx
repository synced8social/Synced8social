import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/theme.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeClient from "@/components/layout/ThemeClient";

// Configure Inter (Body Font)
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Synced | Fast, Scalable Websites for Growth',
  description: 'Synced builds fast, scalable websites and aligns social and platform presence so everything works together to grow a business.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Satoshi Font CDN from Fontshare */}
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeClient />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
