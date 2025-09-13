import "./globals.css";
import type { Metadata } from "next";
import  Navbar  from "@/components/Navbar";
import  Footer  from "@/components/Footer";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // cria uma variável CSS
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Portfólio - Júnior",
  description: "Meu portfólio como desenvolvedor full stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
  <html lang="pt-br" className={inter.className}>
    <body className="bg-black text-white relative">
      {/* Top background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[250px] rounded-b-full bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 blur-3xl opacity-40 pointer-events-none -z-10" />
       
      {/* Bottom background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[250px] rounded-t-full bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 blur-3xl opacity-30 pointer-events-none -z-10" />

      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </body>
  </html>
);
}
