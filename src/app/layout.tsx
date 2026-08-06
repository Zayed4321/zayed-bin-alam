import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zayed Bin Alam — Performance Marketing Specialist & Growth Partner",
  description: "Helping wellness brands & apps scale revenue with data-driven Meta Ads, Google Ads, ChatGPT Ads, and server-side tracking.",
  keywords: ["Zayed Bin Alam", "Performance Marketing", "Meta Ads", "Google Ads", "ChatGPT Ads", "Growth Strategy", "Server Side Tracking"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Zayed Bin Alam — Performance Marketing Specialist",
    description: "Helping wellness brands & apps scale revenue with data-driven Meta Ads, Google Ads, ChatGPT Ads, and server-side tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-brand-cream text-brand-charcoal font-body antialiased min-h-screen selection:bg-brand-sage selection:text-brand-forest">
        {children}
      </body>
    </html>
  );
}
