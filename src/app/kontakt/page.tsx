"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-gray-300 text-lg">
              Haben Sie Fragen? Unser Team steht Ihnen gerne zur Verfügung.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="text-center p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold mb-2">Telefon</h3>
              <p className="text-gray-600 text-sm">Mo-Fr 9:00 - 18:00 Uhr</p>
              <p className="text-yellow-600 font-semibold mt-2">0800 123 456 7</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold mb-2">E-Mail</h3>
              <p className="text-gray-600 text-sm">Wir antworten innerhalb von 24h</p>
              <p className="text-yellow-600 font-semibold mt-2">info@soly.de</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold mb-2">Adresse</h3>
              <p className="text-gray-600 text-sm">Soly Germany GmbH</p>
              <p className="text-gray-600 text-sm">Musterstraße 123, Berlin</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold mb-2">Öffnungszeiten</h3>
              <p className="text-gray-600 text-sm">Montag - Freitag</p>
              <p className="text-gray-600 text-sm">9:00 - 18:00 Uhr</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Schreiben Sie uns</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Vorname</label>
                      <Input placeholder="Max" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Nachname</label>
                      <Input placeholder="Mustermann" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-Mail</label>
                    <Input type="email" placeholder="max@beispiel.de" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon (optional)</label>
                    <Input type="tel" placeholder="+49 123 456789" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ihre Nachricht</label>
                    <textarea
                      className="w-full min-h-[150px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>
                  <Button className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full">
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p className="text-gray-600 mb-6">
            Vielleicht finden Sie die Antwort auf Ihre Frage bereits in unseren FAQs.
          </p>
          <Button variant="outline" className="rounded-full px-8">
            Zu den FAQs
          </Button>
        </div>
      </section>
    </div>
  );
}
