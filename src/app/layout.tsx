import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.scss';

import Navbar from "./(root)/_components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Furqan Latif | Full Stack Developer & Software Engineer",
  description:
    "Official portfolio of Muhammad Furqan Latif — a Full Stack Developer and Software Engineer specializing in modern web applications, scalable architectures, and creative digital solutions. Explore my projects, services, and professional journey.",
  keywords: [
    "Muhammad Furqan Latif",
    "Furqan Latif",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Portfolio Website",
    "Web Development",
    "Freelance Developer",
    "Frontend Engineer",
    "Backend Developer",
  ],
  authors: [{ name: "Muhammad Furqan Latif", url: "https://my-portfolio-flame-iota-20.vercel.app/" }],
  creator: "Muhammad Furqan Latif",
  publisher: "Muhammad Furqan Latif",
  metadataBase: new URL("https://my-portfolio-flame-iota-20.vercel.app"),
  openGraph: {
    title: "Muhammad Furqan Latif | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Muhammad Furqan Latif — showcasing modern web projects, technical expertise, and creative software solutions.",
    url: "https://my-portfolio-flame-iota-20.vercel.app",
    siteName: "Portfolio | Muhammad Furqan Latif",
    images: [
      {
        url: "/assets/images/portfolioOpenGraph.png", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Muhammad Furqan Latif Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Furqan Latif | Full Stack Developer",
    description:
      "Explore the portfolio of Muhammad Furqan Latif — Full Stack Developer & Software Engineer building modern web experiences.",
    creator: "@furqanlatif", // Replace with your Twitter handle if available
    images: ["/assets/images/portfolioOpenGraph.png"],
  },
  icons: {
    icon: "/assets/images/portfolio_Favicon.png",
    shortcut: "/assets/images/portfolio_Favicon.png",
    apple: "/assets/images/portfolio_Favicon.png",
  },
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
