import type { Metadata } from "next";
import "./globals.css";

// In app/layout.tsx
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Tandem Index - AI Book Indexing",
  description: "Professional book indexing with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <head>
        {/* Other head elements */}
      </head>
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}