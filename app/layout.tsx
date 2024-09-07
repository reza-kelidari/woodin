import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

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
      <body className={`${vazirMatn.className} antialiased`}>{children}</body>
    </html>
  );
}
