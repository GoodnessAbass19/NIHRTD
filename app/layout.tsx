import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "NIGERIA INSTITUTE OF HUMAN RESOURCES AND TECHNICAL DEVELOPMENT",
description: "NIGERIA INSTITUTE OF HUMAN RESOURCES AND TECHNICAL DEVELOPMENT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
