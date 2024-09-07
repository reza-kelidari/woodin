import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const vazirMatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "وودین",
  description: "فروشگاه آنلاین دکوراسیون چوبی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirMatn.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
