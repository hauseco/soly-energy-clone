import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const productLinks = [
  { label: "Solaranlage", href: "/produkte/pv-anlage" },
  { label: "Stromspeicher", href: "/produkte/stromspeicher-kaufen" },
  { label: "Wallbox", href: "/produkte/wallbox-komplettangebot" },
  { label: "Soly Brain®", href: "/produkte/soly-brain" },
  { label: "Dynamischer Stromtarif", href: "/produkte/dynamischer-stromtarif" },
];

const companyLinks = [
  { label: "Über Soly", href: "/uber-soly" },
  { label: "B Corp", href: "/soly-b-corp" },
  { label: "Unsere Produkte", href: "/produkte" },
  { label: "Freund*innen werben", href: "/uber-soly/sonnenfreunde" },
];

const supportLinks = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Häufig gestellte Fragen", href: "/haufig-gestellte-fragen" },
  { label: "Soly Blog", href: "/wissensbasis" },
  { label: "Karriere", href: "https://careers.soly-energy.com/?lang=de" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & B Corp */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">S<span className="inline-block w-4 h-4 bg-yellow-400 rounded-full mx-0.5" />LY</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">Solarenergie für alle.</p>
            <p className="text-yellow-400 font-semibold text-sm mb-4">Es ist möglich.</p>
            {/* B Corp Badge */}
            <div className="mt-4">
              <Image
                src="https://ext.same-assets.com/3884434641/425497186.webp"
                alt="B Corp Certified"
                width={60}
                height={90}
                className="opacity-90"
              />
            </div>
          </div>

          {/* Soly Produkte */}
          <div>
            <h4 className="font-bold mb-4">Soly Produkte</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Über Soly */}
          <div>
            <h4 className="font-bold mb-4">Über Soly</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hilfe & Kontakt */}
          <div>
            <h4 className="font-bold mb-4">Hilfe & Kontakt</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">©2025 Soly Germany Operation GmbH</p>
          <div className="flex items-center gap-6">
            <Link href="/konditionen" className="text-gray-400 hover:text-white text-sm transition-colors">AGB</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privatsphäre-Einstellungen</Link>
            <Link href="/datenschutzerklarung" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutzerklärung</Link>
            <Link href="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/SolyEnergy/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://www.instagram.com/soly_energy" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/company/soly-energy/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
