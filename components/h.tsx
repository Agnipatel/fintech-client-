"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TrendingUp, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    // {
    //   label: "Platform",
    //   href: "/platform",
    //   children: [
    //     { label: "Trading Platform", href: "/platform" },
    //     { label: "Mobile App", href: "/mobile" },
    //     { label: "Features", href: "/features" },
    //   ],
    // },
    // {
    //   label: "Markets",
    //   href: "/markets",
    //   children: [
    //     { label: "All Markets", href: "/markets" },
    //     { label: "Account Types", href: "/account-types" },
    //     { label: "Deposits & Withdrawals", href: "/deposits" },
    //   ],
    // },
    // { label: "Pricing", href: "/pricing" },
    // {
    //   label: "Learn",
    //   href: "/education",
    //   children: [
    //     { label: "Education", href: "/education" },
    //     { label: "News & Analysis", href: "/news" },
    //   ],
    // },
    // { label: "About", href: "/about" },
    // { label: "Security", href: "/security" },
    { label: "Affiliate", href: "/affiliate" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export default function H() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdown, setDropdown] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/8 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center glow-sm group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-lg text-white">
                            Trade<span className="text-gradient">Vault</span> Pro
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    {/* <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-48 glass-card p-1 shadow-2xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            pathname === child.href
                              ? "text-white bg-white/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav> */}

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="/contact"
                            className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-semibold px-5 py-2 rounded-lg gradient-brand text-white glow-sm hover:opacity-90 transition-opacity"
                        >
                            Start Trading
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="lg:hidden p-2 text-white/70 hover:text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-white/8 glass py-4">
                    <div className="max-w-7xl mx-auto px-4 space-y-1">
                        {/* {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <p className="px-3 py-1 text-xs text-white/40 uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block pl-6 pr-3 py-2 text-sm rounded-md transition-colors ${
                          pathname === child.href
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      pathname === link.href
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))} */}
                        <div className="pt-3 border-t border-white/8 flex gap-3">
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="flex-1 text-center text-sm py-2.5 rounded-lg border border-white/20 text-white/80"
                            >
                                Log In
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="flex-1 text-center text-sm font-semibold py-2.5 rounded-lg gradient-brand text-white"
                            >
                                Start Trading
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
