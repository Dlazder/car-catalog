import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "car-catalog",
  description: "Simple school project",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
      <h1 style={{fontSize: '40px', textAlign: 'center', marginTop: '30px'}}>Car-catalog</h1>
      {children}
      </body>
    </html>
  );
}
