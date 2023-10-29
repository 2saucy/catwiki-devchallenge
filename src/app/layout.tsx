import clsx from "clsx";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CatWiki",
    template: "%s | CatWiki",
  },
  description: "App to learn more about your cat breed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("min-h-screen antialiased", montserrat.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
