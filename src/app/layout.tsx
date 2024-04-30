import Footer from "@/components/root-layout/Footer";
import "./globals.css";
import HeaderAndAuthModal from "@/components/root-layout/HeaderAndAuthModal";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <HeaderAndAuthModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
