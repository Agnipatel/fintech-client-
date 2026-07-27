"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Markets",
    href: "/#markets",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
  {
    title: "FAQ",
    href: "/#faq",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/#home"
            className="flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                TradeVault
              </h2>

              <p className="text-xs text-gray-400">
                Pro Broker
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-gray-300 hover:text-indigo-400 transition font-medium"
              >
                {item.title}
              </Link>
            ))}

          </nav>

          {/* Desktop Button */}

          <div className="hidden lg:block">

            <Link
              href="/#contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-105 transition-all"
            >
              Open Account
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className="lg:hidden border-t border-white/10 bg-[#0B1120]">

          <div className="flex flex-col px-6 py-6 gap-5">

            {navItems.map((item) => (

              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                {item.title}
              </Link>

            ))}

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-white font-semibold"
            >
              Open Account
            </Link>

          </div>

        </div>

      )}
    </header>
  );
}