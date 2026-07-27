import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import {
  Zap, BarChart2, Bell, Eye, Cpu, Layers, Settings, Globe, Smartphone,
  RefreshCw, Shield, CheckCircle2, ArrowRight, TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Features",
  description:
    "Explore all TradeVault Pro features: advanced charting, AI signals, real-time alerts, algorithmic trading, and more.",
};

const featureGroups = [
  {
    title: "Trading & Execution",
    desc: "Execute trades with precision and speed.",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    features: [
      "Sub-10ms order execution globally",
      "10 advanced order types",
      "One-click trading mode",
      "Partial fill management",
      "Slippage protection",
      "Price improvement technology",
      "Smart order routing",
      "Pre-market & after-hours trading",
    ],
  },
  {
    title: "Charting & Analysis",
    desc: "Visualize the market like a professional.",
    icon: BarChart2,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    features: [
      "11 chart types (candlestick, Renko, etc.)",
      "200+ built-in technical indicators",
      "Custom indicator scripting",
      "Multi-timeframe analysis",
      "Drawing & annotation tools",
      "Chart templates & layouts",
      "Volume profile analysis",
      "Multi-chart workspace",
    ],
  },
  {
    title: "AI & Market Intelligence",
    desc: "Let machine learning do the heavy lifting.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    features: [
      "AI trade signal generation",
      "Sentiment analysis from 50K+ sources",
      "Pattern recognition engine",
      "Predictive price modeling",
      "News impact analysis",
      "Portfolio optimization AI",
      "Risk-adjusted signal scoring",
      "Earnings surprise predictions",
    ],
  },
  {
    title: "Alerts & Notifications",
    desc: "Never miss a market opportunity.",
    icon: Bell,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    features: [
      "Price & volume alerts",
      "Technical indicator crossing alerts",
      "News & event alerts",
      "Portfolio threshold alerts",
      "Margin call warnings",
      "Multi-channel delivery (push, email, SMS)",
      "Scheduled alerts",
      "AI-recommended alerts",
    ],
  },
  {
    title: "Portfolio Management",
    desc: "Manage risk and track performance.",
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    features: [
      "Real-time P&L tracking",
      "Multi-asset portfolio dashboard",
      "Risk exposure analysis",
      "Correlation matrix",
      "Historical performance reports",
      "Tax lot management",
      "Dividend tracking",
      "Portfolio rebalancing tools",
    ],
  },
  {
    title: "Algorithmic Trading",
    desc: "Automate your trading strategies.",
    icon: Settings,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    features: [
      "Built-in strategy scripting IDE",
      "Python & JavaScript support",
      "Backtesting with 10 years of data",
      "Walk-forward optimization",
      "Paper trading for live strategies",
      "Full REST & WebSocket API",
      "Webhook integrations",
      "Strategy marketplace",
    ],
  },
  {
    title: "Market Data",
    desc: "Real-time data you can trust.",
    icon: Eye,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    features: [
      "Level 1 & Level 2 order book",
      "Time & sales (tape reading)",
      "Option chain viewer",
      "Economic calendar",
      "Earnings calendar",
      "Corporate actions tracker",
      "Real-time news feed (30+ sources)",
      "Alternative data (satellite, web traffic)",
    ],
  },
  {
    title: "Mobile & Access",
    desc: "Trade from anywhere, anytime.",
    icon: Smartphone,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    features: [
      "iOS & Android native apps",
      "Feature parity with desktop",
      "Biometric authentication",
      "Offline portfolio viewing",
      "Widget support",
      "Apple Watch companion app",
      "Dark & light themes",
      "Multi-language support (25 languages)",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full green-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
            100+ premium features
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Everything you need to <span className="text-green-600">trade smarter</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            A complete suite of professional tools — from AI market signals to algorithmic trading,
            all in one powerful platform.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { v: "200+", l: "Indicators" },
              { v: "10ms", l: "Execution" },
              { v: "25", l: "Languages" },
              { v: "24/7", l: "Support" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{s.v}</div>
                <div className="text-white/40 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Groups */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {featureGroups.map((group) => (
            <div key={group.title} className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${group.bg} flex items-center justify-center flex-shrink-0`}>
                  <group.icon className={`w-6 h-6 ${group.color}`} />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">{group.title}</h2>
                  <p className="text-white/40 text-sm">{group.desc}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {group.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-white/60">
                    <CheckCircle2 className={`w-4 h-4 ${group.color} flex-shrink-0 mt-0.5`} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8">
            <Shield className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">All features. All plans.</h2>
            <p className="text-white/50 mb-6">
              Core features are available on all plans including Starter (Free). Premium features
              like AI signals and API access unlock on Pro and Elite plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="px-6 py-3 rounded-xl green-600-brand text-white font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Compare Plans <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-colors">
                Start Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>
          <CTA />
    </div>
  );
}
