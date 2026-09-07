import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Stainless Steel Flanges Exporter | Grade 304, 316, 316L | Bhansali Stainless",
  description:
    "Premium stainless steel flanges exporter to Saudi Arabia, UAE, Qatar & GCC. Grade 304, 316, 316L. ASTM A182 certified. Weld Neck, Slip-On, Blind flanges. Get instant quote.",
  keywords:
    "stainless steel flanges, SS flanges exporter, 316 flanges UAE, 304 flanges Saudi Arabia, ASTM A182 flanges, stainless steel flanges GCC",
  openGraph: {
    title: "Stainless Steel Flanges – Bhansali Stainless",
    description:
      "B2B stainless steel flange exporter for the Middle East. Grade 304, 316, 316L. ASTM certified. Fast shipping to UAE, Saudi Arabia, Qatar.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bhansali-stainless.vercel.app" },
};

const GTM_ID = "GTM-XXXXXXX"; // Replace with actual GTM container ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-screen">
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
