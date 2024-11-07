import type { Metadata } from "next";
import localFont from "next/font/local";
import AppProviders from "@/app/client/providers";
import "./globals.css";

const danfoRegular = localFont({
  src: "./fonts/Danfo-Regular.ttf",
  variable: "--font-danfo",
  weight: "400",
});

const cambonRegular = localFont({
  src: "./fonts/Cambon-Regular.ttf",
  variable: "--font-cambon",
  weight: "400",
});

const lobsterRegular = localFont({
  src: "./fonts/Lobster-Regular.ttf",
  variable: "--font-lobster",
  weight: "700",
});

export const metadata: Metadata = {
  title: "budx",
  description: "open source, privacy focused, blockchain enabled.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${danfoRegular.variable} ${cambonRegular.variable} ${lobsterRegular.variable} antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
