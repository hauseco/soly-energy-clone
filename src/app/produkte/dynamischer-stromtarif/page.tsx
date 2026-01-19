"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, TrendingDown, Zap, Brain } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Günstig bei niedrigen Preisen",
    description: "Nutzen Sie Strom automatisch dann, wenn die Börsenpreise am niedrigsten sind.",
  },
  {
    icon: Zap,
    title: "Volle Transparenz",
    description: "Sehen Sie in der Soly App jederzeit die aktuellen Strompreise und Ihren Verbrauch.",
  },
  {
    icon: Brain,
    title: "Automatische Optimierung",
    description: "In Kombination mit Soly Brain werden Ihre Geräte automatisch zum besten Zeitpunkt betrieben.",
  },
];

export default function DynamischerStromtarifPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                NEU
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Dynamischer Stromtarif
              </h1>
              <p className="text-gray-300 mb-6">
                Profitieren Sie von schwankenden Börsenpreisen und sparen Sie zusätzlich
                bei Ihrer Stromrechnung. Besonders effektiv in Kombination mit Soly Brain.
              </p>
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
                Jetzt informieren
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <p className="font-bold">Bis zu 30% sparen</p>
                <p className="text-sm opacity-80">gegenüber festen Tarifen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#1A1A1A] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex gap-6">
            {["Vorteile", "Funktionsweise", "Kombination", "FAQ"].map((tab) => (
              <Link key={tab} href={`#${tab.toLowerCase()}`} className="text-white hover:text-yellow-400 text-sm font-medium whitespace-nowrap">
                {tab}
              </Link>
            ))}
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6 whitespace-nowrap">
            Tarif anfragen
          </Button>
        </div>
      </div>

      {/* Vorteile */}
      <section id="vorteile" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm mb-2">VORTEILE</p>
            <h2 className="text-3xl md:text-4xl font-bold">Warum ein dynamischer Stromtarif?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funktionsweise */}
      <section id="funktionsweise" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm mb-2">FUNKTIONSWEISE</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">So funktioniert der dynamische Stromtarif</h2>
              <Accordion type="single" collapsible defaultValue="item-0">
                {[
                  {
                    title: "Börsenpreise in Echtzeit",
                    desc: "Der Strompreis an der Börse schwankt stündlich. Mit einem dynamischen Tarif zahlen Sie den aktuellen Börsenpreis plus eine kleine Marge."
                  },
                  {
                    title: "Verbrauch optimieren",
                    desc: "Nutzen Sie stromintensive Geräte wie Waschmaschine oder Geschirrspüler dann, wenn die Preise niedrig sind – typischerweise nachts oder am Wochenende."
                  },
                  {
                    title: "Volle Kontrolle",
                    desc: "In der Soly App sehen Sie die Preise für die nächsten 24 Stunden und können Ihren Verbrauch entsprechend planen."
                  },
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl mb-4 px-6">
                    <AccordionTrigger className="text-lg font-semibold">{`${i + 1}. ${item.title}`}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{item.desc}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3884434641/3000010249.webp"
                alt="Soly App Strompreise"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kombination mit Soly Brain */}
      <section id="kombination" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="https://ext.same-assets.com/3884434641/1212037689.jpeg"
                    alt="Soly Brain"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Perfekte Kombination: Soly Brain + Dynamischer Tarif</h3>
                  <p className="text-gray-600 mb-6">
                    Wenn Sie Soly Brain mit einem dynamischen Stromtarif kombinieren,
                    übernimmt das System die Optimierung automatisch für Sie. Ihre Geräte
                    werden intelligent gesteuert, um Strom dann zu nutzen, wenn er am günstigsten ist.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {["Automatische Gerätesteuerung", "Maximale Ersparnis ohne Aufwand", "Kompatibel mit PV-Anlage & Speicher"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/produkte/soly-brain">
                    <Button variant="outline" className="rounded-full">
                      Mehr über Soly Brain
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">Häufig gestellte Fragen</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              {
                q: "Für wen lohnt sich ein dynamischer Stromtarif?",
                a: "Ein dynamischer Tarif lohnt sich besonders für Haushalte mit flexiblem Verbrauch, E-Autos, Wärmepumpen oder Solaranlagen mit Speicher."
              },
              {
                q: "Kann der Preis auch höher sein als bei einem festen Tarif?",
                a: "Ja, in Spitzenzeiten kann der Preis kurzfristig höher sein. Über das Jahr gesehen sparen die meisten Haushalte jedoch deutlich."
              },
              {
                q: "Brauche ich einen Smart Meter?",
                a: "Ja, für einen dynamischen Tarif benötigen Sie einen intelligenten Stromzähler (Smart Meter), der den Verbrauch stündlich erfasst."
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl mb-4 px-6">
                <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interesse am dynamischen Stromtarif?</h2>
          <p className="text-gray-600 mb-8">
            Kontaktieren Sie uns für weitere Informationen und ein unverbindliches Beratungsgespräch.
          </p>
          <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
            Jetzt informieren
          </Button>
        </div>
      </section>
    </div>
  );
}
