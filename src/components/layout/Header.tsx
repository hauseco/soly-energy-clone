"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Solaranlage", href: "/produkte/pv-anlage" },
  { label: "Stromspeicher", href: "/produkte/stromspeicher-kaufen" },
  { label: "Wallbox", href: "/produkte/wallbox-komplettangebot" },
  { label: "Soly Brain", href: "/produkte/soly-brain" },
  { label: "Dynamischer Stromtarif", href: "/produkte/dynamischer-stromtarif" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1A1A1A] text-white text-sm py-2 text-center">
        <Link href="#" className="hover:underline">
          MeinSoly Anmeldung
        </Link>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-[#1A1A1A]">S</span>
                <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mx-0.5 relative -top-0.5" />
                <span className="text-[#1A1A1A]">LY</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Link
                href="/uber-soly"
                className="hidden md:inline-flex text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                Über Soly
              </Link>
              <Link
                href="/kontakt"
                className="hidden md:inline-flex text-gray-700 hover:text-gray-900 font-medium text-sm"
              >
                Kontakt
              </Link>

              {/* Mobile menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/kontakt"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
                    >
                      Kontakt
                    </Link>
                    <Link
                      href="/uber-soly"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
                    >
                      Über Soly
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
