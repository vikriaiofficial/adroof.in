import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AdRoof | All-In-One Advertising Platform",
  description: "Book and manage both offline & digital advertising campaigns. From physical hoardings, local boards, and flyer distribution, to Meta & Google Ads—manage everything from your phone.",
  keywords: ["adroof", "offline advertising", "digital ads", "hoardings booking", "local boards advertising", "flyer distribution", "meta ads", "google ads", "hyderabad ads"],
  authors: [{ name: "AdRoof Technologies" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
