"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Check, Zap, Smartphone, BarChart3, Star } from "lucide-react";

const stickyTabs = [
  { label: "Solarenergie", href: "#solyenergy" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Soly Brain®", href: "#energiemanagement" },
  { label: "Produkte", href: "#produkte" },
  { label: "Preise", href: "#preise" },
  { label: "Installation", href: "#installation" },
];

const features = [
  {
    icon: Zap,
    title: "Stromkosten senken mit Photovoltaik",
    description: "Unser Ziel: die niedrigste Stromrechnung! Mit unseren Produkten und Technologien helfen wir Ihnen, unabhängiger von Stromanbietern zu werden und Ihre Stromkosten deutlich zu reduzieren. Sparen Sie durchschnittlich über € 1.000 pro Jahr.",
    image: "https://ext.same-assets.com/3884434641/2632997650.webp",
  },
  {
    icon: Smartphone,
    title: "Vollständiger Einblick in der Soly App",
    description: "Vergessen Sie einzelne Apps für jedes Gerät! Mit der Soly-App erhalten Sie Einblick in all Ihre Elektrogeräte bequem in einer einzigen, intuitiven App.",
    image: "https://ext.same-assets.com/3884434641/1416033747.webp",
  },
  {
    icon: BarChart3,
    title: "Kontrollieren Sie Ihren Energieverbrauch",
    description: "Mit der Soly App erhalten Sie nicht nur Einblick in Ihren Energieverbrauch, sondern auch personalisierte Tipps zum Energiesparen über Soly Copilot. Diese Funktion bietet mehr als 100 Energiespartipps.",
    image: "https://ext.same-assets.com/3884434641/649272554.webp",
  },
];

const trustpilotReviews = [
  {
    name: "Hendrik M.",
    rating: 5,
    text: "Top Beratung, top Preis. Alles lief reibungslos und professionell ab.",
    date: "vor 2 Wochen",
  },
  {
    name: "Sandra K.",
    rating: 5,
    text: "Sehr zufrieden mit der Installation. Das Team war pünktlich und kompetent.",
    date: "vor 1 Monat",
  },
  {
    name: "Michael B.",
    rating: 5,
    text: "Die Soly App ist super einfach zu bedienen. Ich sehe genau, wie viel Strom ich spare.",
    date: "vor 3 Wochen",
  },
];

const installationSteps = [
  {
    step: "1.",
    title: "Berechnen Sie Ihren Preis",
    description: "Einfach den Soly-Konfigurator ausfüllen und sofort Preis sowie Ersparnis berechnen.",
    icon: "https://ext.same-assets.com/3884434641/1278810456.svg",
  },
  {
    step: "2.",
    title: "Online-Beratungsgespräch",
    description: "In einem kostenlosen und unverbindlichen Videotelefonat analysieren wir Ihre individuelle Situation und erstellen erste Planung.",
    icon: "https://ext.same-assets.com/3884434641/3177693773.svg",
  },
  {
    step: "3.",
    title: "Installation innerhalb von 4 Wochen",
    description: "Am vereinbarten Tag übernehmen unsere zertifizierten Fachbetriebe die Installation bei Ihnen vor Ort.",
    icon: "https://ext.same-assets.com/3884434641/1278810456.svg",
  },
];

export default function HomePage() {
  const [address, setAddress] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % installationSteps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + installationSteps.length) % installationSteps.length);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % trustpilotReviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + trustpilotReviews.length) % trustpilotReviews.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/3884434641/984649784.webp"
            alt="Soly Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-xl">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Photovoltaik neu gedacht
              </h1>
              <p className="text-gray-600 mb-6">
                Mehr Unabhängigkeit und geringere Stromkosten mit den innovativen PV-Produkten von Soly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Adresse"
                  value={address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                  className="flex-1 h-12 rounded-full border-gray-300"
                />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
                  Preis berechnen
                </Button>
              </div>
            </div>
          </div>

          {/* USP Bar */}
          <div className="flex flex-wrap items-center gap-8 mt-8">
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
              <Image
                src="https://ext.same-assets.com/3884434641/3576938733.webp"
                alt="USP Icon"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-white">
                <p className="font-bold">Über 40.000 zufriedene Kund*innen</p>
                <p className="text-sm opacity-80">Weltweit in 9 Ländern aktiv</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-gray-900 fill-gray-900" />
              </div>
              <div className="text-white">
                <p className="font-bold">"Top Beratung, top Preis"</p>
                <p className="text-sm opacity-80">- Hendrik via Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-16 md:top-20 z-40 bg-[#1A1A1A] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto py-4 gap-4 scrollbar-hide">
            <div className="flex items-center gap-6">
              {stickyTabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className="text-white hover:text-yellow-400 font-medium text-sm whitespace-nowrap transition-colors"
                >
                  {tab.label}
                </Link>
              ))}
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6 whitespace-nowrap">
              PV-Anlage konfigurieren
            </Button>
          </div>
        </div>
      </div>

      {/* Soly Energy Section - Mit dynamischen Bildern */}
      <section id="solyenergy" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="section-label mb-2">SOLY ENERGY</p>
            <h2 className="section-title mb-12">Solarenergie leicht gemacht</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  const isActive = activeFeature === index;
                  return (
                    <div
                      key={index}
                      className={`border rounded-xl p-6 cursor-pointer transition-all ${
                        isActive ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive ? "bg-yellow-400" : "bg-yellow-100"
                        }`}>
                          <IconComponent className={`w-5 h-5 ${isActive ? "text-gray-900" : "text-yellow-600"}`} />
                        </div>
                        <h3 className="font-semibold text-lg flex-1">{feature.title}</h3>
                        <span className={`text-2xl transition-transform ${isActive ? "rotate-0" : "rotate-0"}`}>
                          {isActive ? "−" : "+"}
                        </span>
                      </div>
                      {isActive && (
                        <p className="text-gray-600 mt-4 pl-14">{feature.description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungen Section - Mit Trustpilot Karussell */}
      <section id="bewertungen" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="section-label mb-2">BEWERTUNGEN</p>
            <h2 className="section-title mb-8">Das sagen unsere Kund*innen</h2>
          </div>

          {/* Trustpilot Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
              <span className="text-2xl font-bold">Trustpilot</span>
            </div>
          </div>

          {/* Reviews Karussell */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <div className="flex-1 max-w-2xl">
                  <Card className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(trustpilotReviews[currentReview].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 mb-4">"{trustpilotReviews[currentReview].text}"</p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{trustpilotReviews[currentReview].name}</p>
                      <p className="text-gray-500 text-sm">{trustpilotReviews[currentReview].date}</p>
                    </div>
                  </Card>
                </div>

                <button
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {trustpilotReviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReview(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentReview ? "bg-yellow-400" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soly Brain Section */}
      <section id="energiemanagement" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-2">ENERGIEMANAGEMENT</p>
            <h2 className="section-title">
              Soly Brain® - sorgenfrei Energie<br />nutzen und Stromkosten senken
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-xl transition-shadow relative">
              <div className="relative h-80">
                <Image
                  src="https://ext.same-assets.com/3884434641/2632997650.webp"
                  alt="Soly Brain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Verbinden Sie Ihre Geräte</h3>
                  <p className="text-white/80 mb-4">und überwachen Sie diese in der Soly App.</p>
                  <Link href="/produkte/soly-brain" className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" /> Mehr erfahren
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-shadow relative">
              <div className="relative h-80">
                <Image
                  src="https://ext.same-assets.com/3884434641/3778532590.webp"
                  alt="Ersparnisse"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Steigern Sie Ihre Ersparnisse</h3>
                  <p className="text-white/80">Ein revolutionäres Betriebssystem, das Ihre PV-Anlage, Ladestation und Stromspeicher optimal steuert – für maximale Erträge.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section - Bento Grid Layout */}
      <section id="produkte" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-2">SOLY PRODUKTE</p>
            <h2 className="section-title">
              Maximale Einsparungen,<br />mit minimalem Aufwand
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PV-Anlage - Links oben */}
            <Link href="/produkte/pv-anlage" className="group">
              <Card className="overflow-hidden h-[300px] relative">
                <Image
                  src="https://ext.same-assets.com/3884434641/2470019787.webp"
                  alt="PV-Anlage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">PV-Anlage</h3>
                  <p className="text-white/80 mb-4">Mit der Kraft der Sonne eigenen Strom erzeugen</p>
                  <span className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-semibold group-hover:bg-yellow-400 transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" /> Mehr erfahren
                  </span>
                </div>
              </Card>
            </Link>

            {/* Stromspeicher - Rechts, volle Höhe */}
            <Link href="/produkte/stromspeicher-kaufen" className="group md:row-span-2">
              <Card className="overflow-hidden h-[300px] md:h-full relative">
                <Image
                  src="https://ext.same-assets.com/3884434641/3778532590.webp"
                  alt="Stromspeicher"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Stromspeicher</h3>
                  <p className="text-white/80 mb-4">Speichern Sie Ihre Energie</p>
                  <span className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-semibold group-hover:bg-yellow-400 transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" /> Mehr erfahren
                  </span>
                </div>
              </Card>
            </Link>

            {/* Wallbox - Links unten */}
            <Link href="/produkte/wallbox-komplettangebot" className="group">
              <Card className="overflow-hidden h-[300px] relative">
                <Image
                  src="https://ext.same-assets.com/3884434641/4061182925.webp"
                  alt="Wallbox"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Wallbox</h3>
                  <p className="text-white/80 mb-4">Ihr E-Auto schnell und intelligent laden</p>
                  <span className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-full font-semibold group-hover:bg-yellow-400 transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2" /> Mehr erfahren
                  </span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Konfigurator CTA */}
      <section id="preise" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-lg">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="section-label mb-2">KONFIGURATOR</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Berechnen Sie<br />Ihr Ersparnis
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Input
                  type="text"
                  placeholder="Adresse"
                  className="h-12 rounded-full border-gray-300 sm:w-64"
                />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full whitespace-nowrap">
                  Jetzt berechnen
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-gray-500 text-sm mt-4">Gratis und unverbindlich</p>
        </div>
      </section>

      {/* Installation Section - Mit Karussell und App Promo */}
      <section id="installation" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-2">INSTALLATION</p>
            <h2 className="section-title">Online-Beratung</h2>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Karussell */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <Image
                    src={installationSteps[currentStep].icon}
                    alt="Step Icon"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-yellow-500 font-bold text-center mb-2">{installationSteps[currentStep].step}</p>
                <h3 className="text-xl font-bold text-center mb-4">{installationSteps[currentStep].title}</h3>
                <p className="text-gray-600 text-center mb-6">{installationSteps[currentStep].description}</p>
                {currentStep === 0 && (
                  <div className="flex justify-center">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full px-6">
                      Jetzt berechnen
                    </Button>
                  </div>
                )}
              </div>

              {/* Karussell Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevStep}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {installationSteps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all ${
                        i === currentStep ? "w-8 bg-yellow-400" : "w-4 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextStep}
                  className="w-12 h-12 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* App Promo Box */}
            <div className="bg-yellow-400 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Immer auf dem Laufenden
                </h3>
                <p className="text-gray-800 mb-6">
                  Mit der Soly-App behalten Sie den gesamten Prozess und die nächsten Schritte jederzeit im Blick.
                </p>
                <div className="flex gap-3">
                  <Link href="https://play.google.com/store/apps/details?id=com.enie.customerportal" target="_blank">
                    <Image
                      src="https://ext.same-assets.com/3884434641/1306988646.png"
                      alt="Google Play"
                      width={135}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <Link href="https://apps.apple.com/nl/app/mijnsoly/id6444103242" target="_blank">
                    <Image
                      src="https://ext.same-assets.com/3884434641/4054836243.png"
                      alt="App Store"
                      width={135}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-48 h-64">
                <Image
                  src="https://ext.same-assets.com/3884434641/3677121957.webp"
                  alt="Soly App"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats Bar */}
      <section className="bg-[#1A1A1A] py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-gray-900">Werden Sie Teil der Soly Community</h3>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600">👤</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Über 40.000</p>
                  <p className="text-sm text-gray-600">zufriedene Kund*innen</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">4,3 Sterne</p>
                  <p className="text-sm text-gray-600">auf Trustpilot</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600">🌍</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">9 Länder</p>
                  <p className="text-sm text-gray-600">Weltweit aktiv</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
