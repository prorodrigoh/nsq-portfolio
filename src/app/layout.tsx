import type { Metadata } from "next";
import { Roboto_Slab, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-natalia-quinete-u1e1vi8.gamma.site"),
  title: "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab | Dr. Natalia Quinete | FIU",
  description: "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab, led by Dr. Natalia Quinete, Associate Professor in Department of Chemistry & Biochemistry and the Institute of Environment at Florida International University (FIU). Researching environmental analytical chemistry, emerging contaminants, and PFAS.",
  keywords: [
    "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab",
    "ECC Lab",
    "Dr. Natalia Quinete",
    "FIU",
    "Florida International University",
    "Chemistry & Biochemistry",
    "Institute of Environment",
    "PFAS",
    "Environmental Analytical Chemistry",
    "Non-targeted analysis",
    "Biscayne Bay"
  ],
  authors: [{ name: "Dr. Natalia Quinete" }],
  openGraph: {
    title: "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab | FIU",
    description: "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab, led by Dr. Natalia Quinete at Florida International University (FIU).",
    url: "https://dr-natalia-quinete-u1e1vi8.gamma.site/",
    siteName: "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab",
    images: [
      {
        url: "/Lab-logo.png",
        width: 1254,
        height: 1254,
        alt: "Emerging Contaminants of Concern (ECC) Research Laboratory - ECC lab Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoSlab.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#EDF1F8] text-[#15213F] font-[var(--font-body)] antialiased selection:bg-[#476FD6] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
