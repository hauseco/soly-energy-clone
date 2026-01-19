import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Soly: Mit PV Stromkosten senken und unabhängig werden",
  description: "Mit unseren PV-Anlagen, Stromspeichern, Ladestationen und unserem Energiemanagementsystem helfen wir Ihnen, Ihre Stromkosten zu senken.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
