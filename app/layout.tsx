import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/Header'
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Beauty Products - Website ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
  className="bg-[#8f5d2b] text-white" 
  style={{ 
    background: 'url(https://img.freepik.com/free-photo/abstract-smooth-brown-wall-background-layout-design-web-template-business-report-with-smooth-circle-gradient-color_1258-54599.jpg)', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat' 
  }}
>

          <Header/>
        <main>{children}</main>
        <Footer/>
        
      </body>
    </html>
  );
}
