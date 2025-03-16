import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display:  "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "TEHILJEM Nig. Ltd - Leading Real Estate Developers in Nigeria",
  description:
    "TEHILJEM Nig. Ltd is a top real estate development company in Nigeria, offering affordable luxury homes and investment opportunities through TJ Homes.",
  keywords:
    "real estate development company in Nigeria, affordable luxury homes, invest in Nigerian real estate, top real estate developers, property investment opportunities",
  openGraph: {
    title: "TEHILJEM Nig. Ltd - Luxury & Affordable Homes",
    description:
      "Discover top-tier real estate solutions with TEHILJEM Nig. Ltd. We specialize in affordable luxury homes and investment opportunities in Nigeria.",
    // url: "https://yourwebsite.com",
    siteName: "TEHILJEM Nig. Ltd",
    images: [
      {
        // url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TEHILJEM Real Estate",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${montserrat.variable} ${poppins.variable} antialiased`}>
          <Navbar/>
        {children}
      </body>
    </html>
  );
}
