import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CeritaSketsa Studio",
  description: "Studio arsitektur berbasis di Jakarta, berdedikasi pada desain yang bermakna, berkelanjutan, dan kontekstual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-text bg-white min-h-screen text-[13px] leading-relaxed font-light">
        {children}
      </body>
    </html>
  );
}

