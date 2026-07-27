import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import {
  Monitor, Smartphone, BarChart2, Zap, Cpu, Settings, ArrowRight,
  TrendingUp, Bell, Eye, LineChart, Layers, CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trading Platform",
  description:
    "TradeVault Pro's award-winning trading platform. 200+ indicators, AI signals, ultra-fast execution and advanced order types.",
};

const platformFeatures = [
  { icon: BarChart2, title: "200+ Technical Indicators", desc: "RSI, MACD, Bollinger Bands and 200+ more built-in indicators with custom scripting support." },
  { icon: Zap, title: "Sub-10ms Execution", desc: "Our global server network ensures your orders are executed before markets move." },
  { icon: Cpu, title: "AI Market Signals", desc: "Machine learning models scan 1,000+ data points to surface high-probability trade setups." },
  { icon: Bell, title: "Smart Alerts", desc: "Price, volume, news, and pattern-based alerts delivered instantly to any device." },
  { icon: Eye, title: "Level 2 Data", desc: "Full order book depth with real-time bid/ask spreads and volume analysis." },
  { icon: LineChart, title: "Advanced Charting", desc: "11 chart types, multi-timeframe analysis, drawing tools and layout saving." },
  { icon: Layers, title: "Multi-Asset Portfolios", desc: "Manage stocks, forex, crypto and ETFs in one unified portfolio view." },
  { icon: Settings, title: "Algorithmic Trading", desc: "Build, test and deploy automated strategies with our built-in scripting IDE." },
];

const orderTypes = [
  "Market Orders", "Limit Orders", "Stop Loss", "Take Profit",
  "Trailing Stop", "OCO Orders", "Bracket Orders", "Fill or Kill",
  "Good Till Cancelled", "Iceberg Orders",
];

const platforms = [
  { name: "Web Platform", desc: "Full-featured browser-based platform. No download required.", icon: Monitor, badge: "Most Popular" },
  { name: "Desktop App", desc: "Professional-grade app for Windows & macOS with enhanced performance.", icon: Monitor, badge: "Power Users" },
  { name: "Mobile App", desc: "iOS & Android apps with complete feature parity. Trade anywhere.", icon: Smartphone, badge: "On the Go" },
];

export default function PlatformPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full green-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
            Award-winning platform
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            The platform that <span className="text-green-600">pros trust</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            Institutional-grade technology designed for traders of every level. More power, more
            precision, more possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mobile" className="px-8 py-4 rounded-xl border border-white/15 text-white/80 hover:text-white transition-colors">
              Get Mobile App
            </Link>
          </div>
        </div>
      </section>

      {/* Mock Platform UI */}
      <section className="py-16 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-2 overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-white/8">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="glass rounded px-3 py-1 text-xs text-white/30 max-w-xs">platform.tradevaultpro.com</div>
              </div>
            </div>
            {/* Chart area */}
            <div className="p-4 grid grid-cols-4 gap-3 h-80">
              <div className="col-span-3 glass rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-white font-bold">BTC/USD</div>
                    <div className="text-3xl font-bold font-mono text-white">$67,432.80</div>
                    <div className="text-emerald-400 text-sm flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +2.34%
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {["1m", "5m", "15m", "1H", "4H", "1D"].map(t => (
                      <button key={t} className={`text-xs px-2 py-1 rounded ${t === "1H" ? "green-600-brand text-white" : "glass text-white/50"}`}>{t}</button>
                    ))}
                  </div>
                </div>
                <svg className="w-full h-32" viewBox="0 0 600 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,60 C60,55 120,70 180,50 C240,30 300,45 360,30 C420,15 480,35 540,20 C570,12 585,15 600,10 L600,100 L0,100 Z" fill="url(#pGrad)" />
                  <path d="M0,60 C60,55 120,70 180,50 C240,30 300,45 360,30 C420,15 480,35 540,20 C570,12 585,15 600,10" fill="none" stroke="#6366f1" strokeWidth="2" className="chart-line" />
                </svg>
              </div>
              <div className="space-y-3">
                <div className="glass rounded-lg p-3">
                  <div className="text-xs text-white/40 mb-2">Order Book</div>
                  {[["67,450", "12.4"], ["67,435", "8.2"], ["67,420", "15.7"]].map(([p, v]) => (
                    <div key={p} className="flex justify-between text-xs mb-1">
                      <span className="text-rose-400">{p}</span>
                      <span className="text-white/40">{v}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/8 my-1" />
                  {[["67,410", "9.1"], ["67,400", "22.3"], ["67,385", "6.8"]].map(([p, v]) => (
                    <div key={p} className="flex justify-between text-xs mb-1">
                      <span className="text-emerald-400">{p}</span>
                      <span className="text-white/40">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="glass rounded-lg p-3">
                  <button className="w-full py-2 rounded-lg bg-emerald-500 text-white text-xs font-bold mb-2">BUY</button>
                  <button className="w-full py-2 rounded-lg bg-rose-500 text-white text-xs font-bold">SELL</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Everything a <span className="text-green-600">pro needs</span></h2>
            <p className="text-white/50">Every feature you need to analyse, trade, and manage risk.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformFeatures.map((f) => (
              <div key={f.title} className="glass-card p-5 hover:bg-white/8 transition-all hover:scale-[1.02]">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Types */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Advanced <span className="text-green-600">Order Types</span></h2>
              <p className="text-white/50 mb-8">Trade with precision using professional-grade order management tools used by hedge funds.</p>
              <div className="grid grid-cols-2 gap-3">
                {orderTypes.map((o) => (
                  <div key={o} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {platforms.map((p) => (
                <div key={p.name} className="glass-card p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-white font-semibold">{p.name}</h3>
                      <span className="text-xs glass px-2 py-0.5 rounded-full text-indigo-400">{p.badge}</span>
                    </div>
                    <p className="text-white/50 text-sm">{p.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to <span className="text-green-600">experience it?</span></h2>
          <p className="text-white/50 mb-8">Start with a free $10,000 demo account. No risk, no obligation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
            Open Demo Account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
          <CTA />
    </div>
  );
}
