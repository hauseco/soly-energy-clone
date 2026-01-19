"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function SolyBrainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Soly Brain – Energiemanagement für Ihr Zuhause</h1>
              <p className="text-gray-300 mb-6">
                Das intelligente Zentrum Ihres Energiemanagements in Ihrem Zuhause.
              </p>
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">Soly Brain anfragen</Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"><span className="text-gray-900">🧠</span></div>
              <div><p className="font-bold">Kompletter Einblick</p><p className="text-sm opacity-80">in Ihren Energieverbrauch</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#1A1A1A] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex gap-6">
            {["Warum?", "Soly App", "Anfrage", "FAQ"].map((tab) => (
              <Link key={tab} href={`#${tab.toLowerCase().replace("?", "")}`} className="text-white hover:text-yellow-400 text-sm font-medium whitespace-nowrap">{tab}</Link>
            ))}
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6">Soly Brain anfragen</Button>
        </div>
      </div>

      {/* Main Content */}
      <section id="warum" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="section-title mb-6">Intelligente Energienutzung mit dem Soly Brain</h2>
              <p className="text-gray-600 mb-6">
                Das Soly Brain ist das <strong>intelligente Zentrum Ihres Energiemanagements</strong> in Ihrem Zuhause.
                Nach der Installation agiert es wie ein Betriebssystem, das auf Ihre Bedürfnisse abgestimmt
                <strong> smarte und nachhaltige Entscheidungen</strong> trifft.
              </p>
              <p className="text-gray-600">
                Mit dem Soly Brain erhalten Sie vollständige Transparenz über Ihre Energieflüsse
                und optimieren die Nutzung Ihrer selbst erzeugten Solarenergie.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3884434641/1212037689.jpeg"
                alt="Soly Brain"
                width={400}
                height={300}
                className="rounded-2xl shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 text-center">Automatisiertes Energiemanagement</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl mx-auto">
            {[
              { title: "Energiemanagement", desc: "Das Soly Brain verknüpft all Ihre Haushaltsgeräte in einer einzigen App und optimiert mithilfe fortschrittlicher Algorithmen Ihre Stromnutzung." },
              { title: "Alles in einer App", desc: "Vergessen Sie einzelne Apps für jedes Gerät! Mit der Soly App erhalten Sie Einblick in all Ihre Elektrogeräte bequem in einer einzigen, intuitiven App." },
              { title: "Über 100 Spartipps", desc: "Der Algorithmus von Soly Copilot analysiert Ihren Verbrauch und empfiehlt über 100 maßgeschneiderte Maßnahmen zur Reduzierung Ihres Energiebedarfs." },
              { title: "Dynamischer Stromtarif als perfekte Ergänzung", desc: "In Kombination mit Solys dynamischem Stromtarif sparen Sie zusätzlich, da Strom automatisch dann genutzt wird, wenn die Strompreise niedrig sind." },
              { title: "Flexibel einsetzbar", desc: "Unser Soly Brain lässt sich mit zahlreichen PV-Anlagen und Stromspeichern anderer Anbieter kombinieren." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-lg font-semibold">{`${i + 1}. ${item.title}`}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{item.desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 text-center">Häufig gestellte Fragen</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              { q: "Was ist ein Photovoltaik-Energiemanagementsystem?", a: "Ein HEMS optimiert die Nutzung von Solarstrom, indem es Erzeugung, Speicherung und Verbrauch intelligent steuert." },
              { q: "Was kostet ein Energiemanagementsystem?", a: "Derzeit erhalten Sie das Soly Brain kostenlos zu jeder PV-Anlage und jedem Stromspeicher." },
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
