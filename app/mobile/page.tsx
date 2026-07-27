import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import {
  Smartphone, Bell, BarChart2, Zap, Lock, RefreshCw,
  ArrowRight, CheckCircle2, Star, Download
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App",
  description:
    "Trade on the go with TradeVault Pro's iOS and Android app. Full platform power in your pocket — charts, orders, alerts and more.",
};

const appFeatures = [
  { icon: BarChart2, title: "Full Charting Suite", desc: "11 chart types, 200+ indicators, and drawing tools on mobile." },
  { icon: Bell, title: "Smart Push Alerts", desc: "Price, news, and signal alerts delivered instantly to your device." },
  { icon: Zap, title: "One-Tap Trading", desc: "Open, modify, and close positions with a single tap." },
  { icon: Lock, title: "Biometric Security", desc: "Face ID, fingerprint, or PIN protection for every session." },
  { icon: RefreshCw, title: "Real-time Sync", desc: "All positions sync instantly across all your devices." },
  { icon: Smartphone, title: "Watch App", desc: "Apple Watch companion for quick portfolio glances and alerts." },
];

const reviews = [
  { name: "Alex T.", rating: 5, text: "Best trading app I've ever used. The charting on mobile is incredible.", platform: "App Store" },
  { name: "Priya M.", rating: 5, text: "The biometric login and one-tap trading make this unbeatable.", platform: "Google Play" },
  { name: "Jordan K.", rating: 5, text: "I switched from 3 different apps to just this one. Perfect.", platform: "App Store" },
];

const appStats = [
  { value: "4.9", label: "App Store Rating", sub: "50,000+ reviews" },
  { value: "4.8", label: "Google Play Rating", sub: "30,000+ reviews" },
  { value: "1M+", label: "Downloads", sub: "Worldwide" },
  { value: "#1", label: "Finance App", sub: "App Store UK" },
];

export default function MobilePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-[600px] bg-indigo-600/8 rounded-full green-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                iOS & Android
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
                The full platform
                <br />
                <span className="text-green-600">in your pocket</span>
              </h1>
              <p className="text-white/50 text-xl mb-8 leading-relaxed">
                Every feature of our award-winning desktop platform, beautifully reimagined for
                mobile. Trade, chart, and manage your portfolio on the go.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#"
                  className="flex items-center gap-3 glass-card px-5 py-3 hover:bg-white/8 transition-all"
                >
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Download on the</div>
                    <div className="text-white font-semibold text-sm">App Store</div>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 glass-card px-5 py-3 hover:bg-white/8 transition-all"
                >
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                      <path d="M3.18 23.76c.3.17.65.19.96.06l12.29-7.02-2.67-2.67-10.58 9.63zm-1.41-19.4C1.61 4.67 1.5 5.04 1.5 5.5v13c0 .46.11.83.27 1.14l.07.06 7.28-7.28v-.17L1.77 4.3l-.01.06zm17.72 8.24l-2.47-1.41-2.97 2.96 2.97 2.97 2.47-1.42c.71-.4.71-1.7 0-2.1zM4.14.24L16.43 7.26l-2.67 2.67L3.18.3a1.07 1.07 0 0 1 .96-.06z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">Get it on</div>
                    <div className="text-white font-semibold text-sm">Google Play</div>
                  </div>
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Free Download", "No Ads", "Regular Updates"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-xs text-white/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-[520px] rounded-[3rem] glass border border-white/15 overflow-hidden float shadow-2xl">
                  {/* Status bar */}
                  <div className="h-8 bg-black/20 flex items-center justify-between px-5">
                    <span className="text-white/50 text-xs">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 rounded-sm bg-white/50" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-xs">Portfolio</span>
                      <span className="text-emerald-400 text-xs">+$1,247.80</span>
                    </div>
                    <div className="text-3xl font-bold text-white font-mono">$48,392.14</div>
                    <svg className="w-full h-24" viewBox="0 0 200 80">
                      <defs>
                        <linearGradient id="mGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,50 C25,45 50,60 75,35 C100,10 125,40 150,25 C175,10 185,20 200,15 L200,80 L0,80 Z" fill="url(#mGrad)" />
                      <path d="M0,50 C25,45 50,60 75,35 C100,10 125,40 150,25 C175,10 185,20 200,15" fill="none" stroke="#6366f1" strokeWidth="2" />
                    </svg>
                    <div className="space-y-2">
                      {[
                        { s: "BTC", v: "$67,432", c: "+2.34%", up: true },
                        { s: "AAPL", v: "$189.45", c: "-0.32%", up: false },
                        { s: "ETH", v: "$3,521", c: "+1.87%", up: true },
                      ].map((item) => (
                        <div key={item.s} className="flex justify-between items-center glass px-3 py-2 rounded-lg">
                          <span className="text-white/70 text-xs font-semibold">{item.s}</span>
                          <span className="text-white text-xs font-mono">{item.v}</span>
                          <span className={`text-xs ${item.up ? "text-emerald-400" : "text-rose-400"}`}>{item.c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -right-8 top-1/4 w-32 h-20 rounded-2xl glass p-3 float" style={{ animationDelay: "1s" }}>
                  <div className="text-white/40 text-xs mb-1">Alert Triggered</div>
                  <div className="text-white font-semibold text-sm">BTC hit $68K</div>
                  <div className="text-emerald-400 text-xs">+$3,200 P&L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Stats */}
      <section className="py-12 border-y border-white/8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {appStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-extrabold text-green-600 mb-0.5">{s.value}</div>
                <div className="text-white/70 text-sm">{s.label}</div>
                <div className="text-white/30 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything you need, <span className="text-green-600">optimized for mobile</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">Not a stripped-down version. The full platform power, redesigned for touch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {appFeatures.map((f) => (
              <div key={f.title} className="glass-card p-6 hover:bg-white/8 transition-all hover:scale-[1.02]">
                <div className="w-12 h-12 rounded-xl bg-indigo-400/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Traders <span className="text-green-600">love our app</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="glass-card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-white/30 text-xs">{r.platform}</span>
                </div>
                <p className="text-white/70 text-sm mb-3">"{r.text}"</p>
                <div className="text-white/40 text-xs">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <Download className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">Download <span className="text-green-600">now — it's free</span></h2>
            <p className="text-white/50 mb-8">Available on iOS 14+ and Android 8+. Scan the QR code or click below.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#" className="flex items-center gap-3 glass-card px-6 py-3 hover:bg-white/10 transition-all">
                <div className="text-left">
                  <div className="text-white/40 text-xs">Download on the</div>
                  <div className="text-white font-semibold">App Store</div>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-3 glass-card px-6 py-3 hover:bg-white/10 transition-all">
                <div className="text-left">
                  <div className="text-white/40 text-xs">Get it on</div>
                  <div className="text-white font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
          <CTA />
    </div>
  );
}
