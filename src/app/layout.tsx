import type { Metadata } from "next";
import { Cinzel, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUT Bank DP TASPEN - 36th",
  description: "36th Anniversary of Bank DP TASPEN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${cinzel.variable} antialiased min-h-screen min-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
