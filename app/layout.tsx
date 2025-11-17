import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import MedicalDisclaimer from "@/components/medical-disclaimer";

export const metadata: Metadata = {
  title: "ProMedixEMS™ - Empowering EMS Education",
  description: "Innovative digital solutions for EMS education and training programs by ProMedixEMS™.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <div className="container mx-auto px-4 md:px-6 pb-8">
          <MedicalDisclaimer />
        </div>
        <Footer />
      </body>
    </html>
  );
}
