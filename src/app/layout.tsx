import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Setting optimized metadata configuration details for MasterMind Web Developers
export const metadata: Metadata = {
  title: "MasterMind Web Developers | Advanced Development & Digital Marketing",
  description: "We deploy complex full-stack web applications and architect hyper-targeted, algorithmic digital marketing engines designed for global brand scaling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full w-full bg-[#050508] text-white flex flex-col m-0 p-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}