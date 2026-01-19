"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  { kWp: "5", modules: "12", price: "9.980", savings: "360", storage: "6,4 kWh" },
  { kWp: "8", modules: "18", price: "13.318", savings: "720", storage: "9,6 kWh" },
  { kWp: "12", modules: "28", price: "16.036", savings: "1.080", storage: "9,6 kWh" },
];

const benefits = [
  { title: "Lieferung und Installation", icon: "🚚" },
  { title: "0% Mehrwertsteuer", icon: "💰" },
  { title: "Bis zu 25 Jahre Produktgarantie", icon: "✓" },
  { title: "10 Jahre Installationsgarantie", icon: "🔧" },
  { title: "Gratis Zugang zur Soly App", icon: "📱" },
  { title: "Energiemanager Soly Brain", icon: "🧠" },
];

export default function PVAnlagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Individuelles PV-Anlagen-Angebot
              </h1>
              <p className="text-gray-300 mb-6">
                Was können Sie an Ihrer Adresse sparen? Fordern Sie in nur 1 Minute ein unverbindliches Online-Angebot für Ihr Hausdach an!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Adresse" className="h-12 rounded-full bg-white/20 border-white/30 text-white placeholder:text-gray-400" />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
                  Kostenloses Angebot
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"><span className="text-gray-900">💰</span></div>
              <div><p className="font-bold">€ 1.000+ pro Jahr sparen</p><p className="text-sm opacity-80">auf Ihrer Stromrechnung</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"><span className="text-gray-900">👥</span></div>
              <div><p className="font-bold">Über 40.000 Kund*innen</p><p className="text-sm opacity-80">in 7 Ländern</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#1A1A1A] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex gap-6">
            {["Vorteile", "Preise", "Bewertungen", "Installation", "FAQ"].map((tab) => (
              <Link key={tab} href={`#${tab.toLowerCase()}`} className="text-white hover:text-yellow-400 text-sm font-medium whitespace-nowrap">{tab}</Link>
            ))}
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6 whitespace-nowrap">
            Gratis PV-Angebot
          </Button>
        </div>
      </div>

      {/* Vorteile */}
      <section id="vorteile" className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label mb-2">VORTEILE</p>
          <h2 className="section-title mb-12">Warum eine PV-Anlage von Soly?</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl">
            {[
              { title: "Ersparnis maximieren", desc: "Produzieren Sie Ihren eigenen Solarstrom und sparen Sie durchschnittlich über € 1.000 pro Jahr auf Ihrer Stromrechnung." },
              { title: "Live-Einblicke mit der Soly App", desc: "Mit der Soly App behalten Sie Ihren gesamten Energiehaushalt jederzeit im Blick." },
              { title: "Qualitätsprodukte & Top-Garantien", desc: "Wir installieren ausschließlich Premiumprodukte mit bis zu 25 Jahren Garantie." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-lg font-semibold">{`${i + 1}. ${item.title}`}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{item.desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="section-label mb-2 text-center">PREISE</p>
          <h2 className="section-title mb-12 text-center">PV-Pakete</h2>
          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <Image src="https://ext.same-assets.com/3884434641/211480246.webp" alt="Solar Panel" width={150} height={150} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Maßgeschneiderte Dachanlagen für Ihr Zuhause</h3>
              <ul className="space-y-2 mb-6">
                {benefits.slice(0, 4).map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{b.title}</li>
                ))}
              </ul>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full">Gratis PV-Angebot</Button>
            </Card>
            {packages.map((pkg, i) => (
              <Card key={i} className="p-6 border-2 hover:border-yellow-400 transition-colors">
                <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold inline-block mb-4">{pkg.kWp} kWp PV-Anlage</div>
                <h4 className="text-lg font-bold mb-2">{pkg.modules}x Module</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>Leistung pro Modul: <strong>440 Wp</strong></li>
                  <li>Sungrow Speicher: <strong>{pkg.storage}</strong></li>
                </ul>
                <p className="text-3xl font-bold mb-2">ab € {pkg.price}</p>
                <div className="bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full px-3 py-1 inline-block">ca. € {pkg.savings} Ersparnis/Jahr</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-0">
              <div>
                <p className="section-label mb-2">KONFIGURATOR</p>
                <h3 className="text-2xl font-bold">Berechnen Sie Ihr Ersparnis</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Adresse" className="h-12 rounded-full sm:w-64" />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">Gratis PV-Angebot</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="section-label mb-2 text-center">FAQ</p>
          <h2 className="section-title mb-12 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              { q: "Wie viel kostet eine 10 kWp PV-Anlage?", a: "Eine 10 kWp PV-Anlage mit Speicher kostet etwa € 14.000 bis € 16.000 (netto)." },
              { q: "Werden PV-Anlagen 2025 günstiger?", a: "Derzeit ist nicht zu erwarten, dass die Preise für PV-Anlagen in absehbarer Zeit sinken." },
              { q: "Welche Förderungen gibt es für Photovoltaik?", a: "Dank der bundesweiten Mehrwertsteuerbefreiung (0% MwSt.) sowie regionaler Förderprogramme können Sie beim Kauf sparen." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
