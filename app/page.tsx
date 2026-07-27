import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  BarChart2,
  Lock,
  Users,
  Star,
  ChevronRight,
  CheckCircle2,
  Award,
  DollarSign,
  Activity,
  Cpu,
} from "lucide-react";
import ContactPage from "./contact/page";
import FAQPage from "./faq/page";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "TradeVault Pro — The Smart Fintech Broker",
  description:
    "Trade stocks, forex, crypto & ETFs with zero commission. Access institutional-grade tools with TradeVault Pro, trusted by 2M+ traders worldwide.",
};

const tickers = [
  { symbol: "BTC/USD", price: "67,432.80", change: "+2.34%", up: true },
  { symbol: "ETH/USD", price: "3,521.40", change: "+1.87%", up: true },
  { symbol: "AAPL", price: "189.45", change: "-0.32%", up: false },
  { symbol: "EUR/USD", price: "1.0842", change: "+0.15%", up: true },
  { symbol: "TSLA", price: "241.30", change: "+3.12%", up: true },
  { symbol: "GOLD", price: "2,341.50", change: "+0.82%", up: true },
  { symbol: "S&P 500", price: "5,234.18", change: "-0.21%", up: false },
  { symbol: "NVDA", price: "875.32", change: "+5.14%", up: true },
  { symbol: "GBP/USD", price: "1.2734", change: "-0.08%", up: false },
  { symbol: "XRP/USD", price: "0.5834", change: "+4.23%", up: true },
];

const stats = [
  { value: "2M+", label: "Active Traders" },
  { value: "$0", label: "Commission" },
  { value: "15,000+", label: "Instruments" },
  { value: "180+", label: "Countries" },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Execution",
    desc: "Orders executed in under 10ms with our global infrastructure spanning 12 data centers.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "Your funds are segregated, FDIC-insured up to $500K, with 256-bit encryption.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Globe,
    title: "Global Markets",
    desc: "Trade stocks, forex, crypto, ETFs and commodities from 50+ global exchanges.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: BarChart2,
    title: "Pro Analytics",
    desc: "Over 200 technical indicators, AI market insights, and real-time chart analysis.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Cpu,
    title: "AI-Powered Tools",
    desc: "Sentiment analysis, predictive signals, and automated portfolio rebalancing.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Lock,
    title: "Regulated & Trusted",
    desc: "Licensed by FCA (UK), SEC (US), ASIC (AU) and 12 other global regulators.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

const markets = [
  { name: "Stocks", count: "8,000+", desc: "US, EU & Asian equities", icon: TrendingUp },
  { name: "Forex", count: "80+", desc: "Major, minor & exotic pairs", icon: DollarSign },
  { name: "Crypto", count: "250+", desc: "Spot & derivatives", icon: Activity },
  { name: "ETFs", count: "3,500+", desc: "Global ETF universe", icon: BarChart2 },
  { name: "Commodities", count: "40+", desc: "Metals, energy & agriculture", icon: Globe },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Professional Trader",
    avatar: "SM",
    rating: 5,
    text: "TradeVault Pro changed how I trade. The execution speed and charting tools are world-class. I've tried 8 brokers and this is the best by far.",
  },
  {
    name: "James Chen",
    role: "Portfolio Manager",
    avatar: "JC",
    rating: 5,
    text: "The institutional-grade analytics at retail pricing is unreal. The AI insights alone have improved my returns by 23% this year.",
  },
  {
    name: "Maria Santos",
    role: "Crypto Investor",
    avatar: "MS",
    rating: 5,
    text: "Finally a broker that takes security seriously. The 2FA, cold storage, and insurance gives me peace of mind I never had before.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Live Ticker */}
      <div className="border-b border-white/8 bg-black/20 py-2 overflow-hidden">
        <div className="flex gap-8 ticker-scroll whitespace-nowrap">
          {[...tickers, ...tickers].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs">
              <span className="text-white/50">{t.symbol}</span>
              <span className="text-white font-mono">{t.price}</span>
              <span className={t.up ? "text-emerald-400" : "text-rose-400"}>
                {t.up ? (
                  <TrendingUp className="inline w-3 h-3 mr-0.5" />
                ) : (
                  <TrendingDown className="inline w-3 h-3 mr-0.5" />
                )}
                {t.change}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="relative min-h-[92vh] flex items-center grid-pattern overflow-hidden">
        {/* green-600 orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full green-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full green-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full green-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/70 mb-8 fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live markets open · Trusted by 2M+ traders globally
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight fade-up">
            Trade Smarter.
            <br />
            <span className="text-green-600">Grow Faster.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed fade-up">
            Access 15,000+ instruments across stocks, forex, crypto and ETFs with zero commission,
            institutional-grade execution, and AI-powered market intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-up">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold text-lg glow hover:opacity-90 transition-all hover:scale-105"
            >
              Open Free Account
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/platform"
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-all"
            >
              View Live Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs">
            {["FCA Regulated", "SEC Licensed", "FDIC Insured", "ISO 27001", "SOC 2 Type II"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {badge}
              </span>
            ))}
          </div>

          {/* Floating chart card */}
          <div className="mt-20 relative max-w-4xl mx-auto">
            <div className="glass-card p-6 float">
              {/* Mock chart */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-white font-bold text-xl">BTC/USD</div>
                  <div className="text-white/50 text-sm">Bitcoin · Crypto</div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-2xl font-mono">$67,432.80</div>
                  <div className="text-emerald-400 text-sm flex items-center gap-1 justify-end">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +2.34% today
                  </div>
                </div>
              </div>
              <svg className="w-full h-32" viewBox="0 0 800 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C50,75 100,90 150,70 C200,50 250,65 300,45 C350,25 400,55 450,35 C500,15 550,40 600,25 C650,10 700,30 750,20 C775,15 790,18 800,15 L800,120 L0,120 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,80 C50,75 100,90 150,70 C200,50 250,65 300,45 C350,25 400,55 450,35 C500,15 550,40 600,25 C650,10 700,30 750,20 C775,15 790,18 800,15"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/8 py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-extrabold text-green-600 mb-1">{s.value}</div>
                <div className="text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-4">
              <Award className="w-3.5 h-3.5 text-yellow-400" />
              Award-winning platform
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Built for{" "}
              <span className="text-green-600">serious traders</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Everything you need in one powerful platform — from beginners to hedge fund managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-card p-6 hover:bg-white/8 transition-all group hover:scale-[1.02] hover:glow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* Markets */}
      <section id="markets" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              One platform, <span className="text-green-600">every market</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Access all the world's financial markets from a single account.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {markets.map((m) => (
              <Link
                key={m.name}
                href="/markets"
                className="glass-card p-5 text-center hover:bg-white/8 transition-all hover:scale-105 group"
              >
                <div className="w-10 h-10 mx-auto rounded-lg green-600-brand flex items-center justify-center mb-3 group-hover:glow-sm transition-all">
                  <m.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-white font-semibold mb-0.5">{m.name}</div>
                <div className="text-green-600 font-bold text-lg">{m.count}</div>
                <div className="text-white/40 text-xs">{m.desc}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/markets"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors text-sm font-medium"
            >
              Explore all markets
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Loved by <span className="text-green-600">2 million+ traders</span>
            </h2>
            <p className="text-white/50">Don't take our word for it — hear from our community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full green-600-brand flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTA />

      <section id="faq" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQPage />
        </div>
      </section>

      <CTA />

      <section id="contact">
        <ContactPage />
      </section>


      {/* Awards */}
      <section className="py-12 border-t border-white/8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">
            Award-winning broker trusted by millions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/20">
            {[
              "Best Fintech Broker 2024",
              "Top Trading Platform 2024",
              "Best Customer Service 2024",
              "Most Innovative Broker 2024",
              "Best Crypto Platform 2024",
            ].map((award) => (
              <div key={award} className="flex items-center gap-2 text-xs">
                <Award className="w-4 h-4 text-yellow-400/50" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
