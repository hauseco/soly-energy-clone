"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

export default function WallboxPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Wallbox Komplettangebot anfordern</h1>
              <p className="text-gray-300 mb-6">
                Zusätzlich sparen: Mit der intelligenten E-Auto-Ladestation von Soly
              </p>
              <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">Angebot anfordern</Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"><span className="text-gray-900">⚡</span></div>
              <div><p className="font-bold">Schnell laden</p><p className="text-sm opacity-80">bis zu 11 kWh pro Stunde</p></div>
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
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6">Angebot anfragen</Button>
        </div>
      </div>

      {/* Vorteile */}
      <section id="vorteile" className="py-16">
        <div className="container mx-auto px-4">
          <p className="section-label mb-2">VORTEILE</p>
          <h2 className="section-title mb-12">Warum eine Ladestation für E-Autos von Soly?</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl">
            {[
              { title: "Schnelles Laden", desc: "Mit unserer leistungsstarken Wallbox können Sie Ihr Elektrofahrzeug mit bis zu 11 kWh laden." },
              { title: "Vollständiger Überblick in der Soly App", desc: "Mit der Soly App steuern Sie Ihre Ladestation bequem über Ihr Handy." },
              { title: "Besonders günstig laden mit Photovoltaik", desc: "Sie können Ihr Elektroauto mit selbst erzeugtem Solarstrom laden." },
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
          <h2 className="section-title mb-12 text-center">Wallbox kaufen</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <Image src="https://ext.same-assets.com/3884434641/1389986168.webp" alt="Wallbox" width={150} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Intelligentes Laden</h3>
              <ul className="space-y-2 mb-6">
                {["3 Jahre Herstellergarantie", "Inklusive Lieferung & Installation", "Hergestellt in Österreich", "Gratis Zugang zur Soly App"].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" />{b}</li>
                ))}
              </ul>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full">Angebot anfragen</Button>
            </Card>
            <Card className="p-6 border-2 hover:border-yellow-400 transition-colors">
              <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold inline-block mb-4">go-e Charger Gemini 2.0</div>
              <h4 className="text-lg font-bold mb-2">11 kW Ladestation</h4>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>Volle Batterie: <strong>innerhalb von 6 - 8 Stunden</strong></li>
                <li>Anschluss: <strong>3 Phasen</strong></li>
              </ul>
              <p className="text-3xl font-bold">ab € 2.400</p>
            </Card>
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
              { q: "Wie viel kostet eine Wallbox inklusive Einbau?", a: "Die 11 kW Ladestation von Soly kostet € 2.400, inklusive Lieferung und Installation." },
              { q: "Ist eine 22 kW Wallbox sinnvoll?", a: "Eine 22kW Wallbox lohnt sich vor allem dann, wenn Ihr Elektroauto dreiphasiges Laden unterstützt." },
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
