"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const batteries = [
  { name: "IQ Batterie 3T", capacity: "3,5 kWh", price: "5.500", savings: "360", modules: "10" },
  { name: "IQ Batterie 5P", capacity: "5 kWh", price: "6.500", savings: "720", modules: "15" },
  { name: "IQ Batterie 10T", capacity: "10,5 kWh", price: "10.500", savings: "1.080", modules: "15+" },
];

export default function StromspeicherPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Stromspeicher kaufen</h1>
              <p className="text-gray-300 mb-6">
                Was können Sie an Ihrer Adresse sparen? Fordern Sie in nur 1 Minute ein unverbindliches Online-Angebot an!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Adresse" className="h-12 rounded-full bg-white/20 border-white/30 text-white placeholder:text-gray-400" />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">Angebot anfordern</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#1A1A1A] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex gap-6">
            {["Vorteile", "Preise", "Installation", "FAQ"].map((tab) => (
              <Link key={tab} href={`#${tab.toLowerCase()}`} className="text-white hover:text-yellow-400 text-sm font-medium whitespace-nowrap">{tab}</Link>
            ))}
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6">PV-Anlage konfigurieren</Button>
        </div>
      </div>

      {/* Vorteile */}
      <section id="vorteile" className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label mb-2">VORTEILE</p>
          <h2 className="section-title mb-12">Warum ein Stromspeicher?</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl">
            {[
              { title: "Strom speichern und Eigenverbrauch erhöhen", desc: "Ein Stromspeicher ermöglicht es Ihnen, Ihren selbst erzeugten Solarstrom optimal zu nutzen." },
              { title: "Eigener Strom – auch bei Schlechtwetter", desc: "Selbst an bewölkten Tagen können Sie auf Ihren gespeicherten Solarstrom zurückgreifen." },
              { title: "Live-Einblick in Ihre Ladevorgänge", desc: "Mit der Soly App behalten Sie jederzeit den Überblick über Ihren Stromspeicher." },
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
          <h2 className="section-title mb-12 text-center">Wählen Sie den optimalen Stromspeicher</h2>
          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <Image src="https://ext.same-assets.com/3884434641/547860666.webp" alt="Stromspeicher" width={150} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Im Lieferumfang enthalten</h3>
              <ul className="space-y-2 mb-6">
                {["15 Jahre Produktgarantie", "Lieferung & Installation", "Soly Brain für maximale Effizienz", "Gratis Zugang zur Soly App"].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{b}</li>
                ))}
              </ul>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full">Jetzt berechnen</Button>
            </Card>
            {batteries.map((bat, i) => (
              <Card key={i} className="p-6 border-2 hover:border-yellow-400 transition-colors">
                <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold inline-block mb-4">Für bis zu {bat.modules} Solarmodule</div>
                <h4 className="text-lg font-bold mb-2">{bat.name}</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>Speicherkapazität: <strong>{bat.capacity}</strong></li>
                  <li>Garantierte Ladezyklen: <strong>6.000</strong></li>
                </ul>
                <p className="text-3xl font-bold mb-2">ab € {bat.price}</p>
                <div className="bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full px-3 py-1 inline-block">ca. € {bat.savings} Ersparnis/Jahr</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label mb-2 text-center">FAQ</p>
          <h2 className="section-title mb-12 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              { q: "Wie viel kostet ein 10 kWh Stromspeicher?", a: "Bei Soly erhalten Sie einen 10,5 kWh Stromspeicher für € 10.500." },
              { q: "Wie groß sollte ein Stromspeicher für ein Einfamilienhaus sein?", a: "Die Größe hängt von verschiedenen Faktoren ab, wie der Anzahl der Personen im Haushalt." },
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
