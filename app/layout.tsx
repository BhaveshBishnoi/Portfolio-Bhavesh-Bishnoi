import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavesh Bishnoi - Full Stack Developer",
  description: "As a Full Stack Developer, I create dynamic and responsive web applications that provide a seamless user experience. My expertise in both frontend and backend development allows me to build scalable and efficient solutions. I stay updated with the latest technologies and trends to deliver high-quality results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
