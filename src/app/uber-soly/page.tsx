"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Globe, Award, Leaf } from "lucide-react";

const stats = [
  { value: "40.000+", label: "Zufriedene Kund*innen" },
  { value: "9", label: "Länder weltweit" },
  { value: "500+", label: "Mitarbeiter*innen" },
  { value: "2013", label: "Gegründet" },
];

const values = [
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Wir setzen uns für eine grünere Zukunft ein und helfen unseren Kunden, ihren CO2-Fußabdruck zu reduzieren.",
  },
  {
    icon: Users,
    title: "Kundenorientierung",
    description: "Unsere Kunden stehen im Mittelpunkt. Wir bieten persönliche Beratung und erstklassigen Service.",
  },
  {
    icon: Award,
    title: "Qualität",
    description: "Wir verwenden nur hochwertige Komponenten und arbeiten mit zertifizierten Installationspartnern.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Mit Technologien wie Soly Brain treiben wir die Energiewende voran und machen Solarenergie smart.",
  },
];

const timeline = [
  { year: "2013", event: "Gründung in den Niederlanden" },
  { year: "2018", event: "Expansion nach Belgien und Südafrika" },
  { year: "2020", event: "Start in Deutschland" },
  { year: "2022", event: "B Corp Zertifizierung" },
  { year: "2024", event: "Über 40.000 zufriedene Kunden weltweit" },
];

export default function UberSolyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Solarenergie für alle.
              <br />
              <span className="text-yellow-400">Es ist möglich.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Soly macht Solarenergie zugänglich, erschwinglich und einfach.
              Wir glauben an eine Zukunft, in der jeder Haushalt seine eigene
              saubere Energie erzeugen kann.
            </p>
            <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
              Jetzt Angebot anfordern
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm mb-2">UNSERE MISSION</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Die niedrigste Stromrechnung für jeden Haushalt
              </h2>
              <p className="text-gray-600 mb-4">
                Soly wurde 2013 in den Niederlanden gegründet mit einer klaren Mission:
                Solarenergie für jeden zugänglich zu machen. Heute sind wir in 9 Ländern
                aktiv und haben bereits über 40.000 Haushalte dabei unterstützt,
                unabhängiger und nachhaltiger zu werden.
              </p>
              <p className="text-gray-600 mb-6">
                Mit unseren innovativen Produkten wie dem Soly Brain Energiemanagementsystem
                gehen wir über die reine Installation von Solaranlagen hinaus. Wir bieten
                ein komplettes Ökosystem für intelligentes Energiemanagement.
              </p>
              <ul className="space-y-3">
                {["Komplettlösungen aus einer Hand", "Zertifizierte Installationspartner", "10 Jahre Installationsgarantie", "Persönliche Beratung"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-gray-900" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3884434641/2662525877.webp"
                alt="Soly Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm mb-2">UNSERE WERTE</p>
            <h2 className="text-3xl md:text-4xl font-bold">Wofür wir stehen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* B Corp */}
      <section className="py-16 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-gray-900">B</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">B Corp Zertifiziert</h2>
            <p className="text-gray-300 mb-6">
              Soly ist stolz darauf, ein zertifiziertes B Corp Unternehmen zu sein.
              Diese Zertifizierung bestätigt, dass wir die höchsten Standards für
              soziale und ökologische Verantwortung erfüllen.
            </p>
            <p className="text-yellow-400 font-semibold">
              Wir nutzen die Kraft der Wirtschaft für das Gute.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-500 font-semibold uppercase tracking-wider text-sm mb-2">UNSERE GESCHICHTE</p>
            <h2 className="text-3xl md:text-4xl font-bold">Der Weg von Soly</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 transform md:-translate-x-1/2" />
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <Card className="inline-block p-4">
                      <p className="text-yellow-600 font-bold">{item.year}</p>
                      <p className="text-gray-700">{item.event}</p>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform md:-translate-x-1/2 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Werden Sie Teil der Soly Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schließen Sie sich über 40.000 zufriedenen Kund*innen an und starten Sie
            Ihre Reise zu mehr Unabhängigkeit und geringeren Stromkosten.
          </p>
          <Link href="/">
            <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
              Jetzt Preis berechnen
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
