import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, X, ArrowRight, Zap, Shield, Crown, Star } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "TradeVault Pro pricing: zero commission trading, transparent fees, and plans for every type of trader from beginner to institution.",
};

const plans = [
  {
    name: "Starter",
    icon: Star,
    price: "Free",
    period: "",
    desc: "Perfect for beginners learning to trade",
    badge: null,
    color: "from-slate-600 to-slate-700",
    features: [
      { text: "Zero commission on stocks & ETFs", ok: true },
      { text: "$10,000 demo account", ok: true },
      { text: "100+ technical indicators", ok: true },
      { text: "Basic charting tools", ok: true },
      { text: "Email support", ok: true },
      { text: "Advanced order types", ok: false },
      { text: "AI market signals", ok: false },
      { text: "Level 2 data", ok: false },
      { text: "API access", ok: false },
      { text: "Dedicated account manager", ok: false },
    ],
  },
  {
    name: "Pro",
    icon: Zap,
    price: "$29",
    period: "/month",
    desc: "For active traders who want an edge",
    badge: "Most Popular",
    color: "from-indigo-600 to-violet-700",
    features: [
      { text: "Zero commission on all assets", ok: true },
      { text: "Unlimited practice accounts", ok: true },
      { text: "200+ technical indicators", ok: true },
      { text: "Advanced charting tools", ok: true },
      { text: "Priority support 24/5", ok: true },
      { text: "Advanced order types", ok: true },
      { text: "AI market signals (50/month)", ok: true },
      { text: "Level 2 data", ok: true },
      { text: "API access", ok: false },
      { text: "Dedicated account manager", ok: false },
    ],
  },
  {
    name: "Elite",
    icon: Crown,
    price: "$99",
    period: "/month",
    desc: "Maximum power for professional traders",
    badge: "Best Value",
    color: "from-yellow-600 to-orange-600",
    features: [
      { text: "Zero commission on all assets", ok: true },
      { text: "Unlimited practice accounts", ok: true },
      { text: "200+ technical indicators", ok: true },
      { text: "Advanced charting tools", ok: true },
      { text: "Priority support 24/7", ok: true },
      { text: "Advanced order types", ok: true },
      { text: "Unlimited AI market signals", ok: true },
      { text: "Level 2 data", ok: true },
      { text: "API access (1,000 req/min)", ok: true },
      { text: "Dedicated account manager", ok: true },
    ],
  },
  {
    name: "Institutional",
    icon: Shield,
    price: "Custom",
    period: "",
    desc: "White-glove service for hedge funds & firms",
    badge: null,
    color: "from-slate-700 to-slate-800",
    features: [
      { text: "Everything in Elite", ok: true },
      { text: "Custom commission structure", ok: true },
      { text: "DMA (Direct Market Access)", ok: true },
      { text: "FIX API connectivity", ok: true },
      { text: "Colocation services", ok: true },
      { text: "Prime brokerage services", ok: true },
      { text: "Unlimited API calls", ok: true },
      { text: "24/7 dedicated support team", ok: true },
      { text: "Custom reporting & analytics", ok: true },
      { text: "On-site training", ok: true },
    ],
  },
];

const feeTable = [
  { category: "US Stocks", starter: "$0", pro: "$0", elite: "$0", inst: "Custom" },
  { category: "EU Stocks", starter: "$0", pro: "$0", elite: "$0", inst: "Custom" },
  { category: "Forex (Spread)", starter: "1.2 pips", pro: "0.8 pips", elite: "0.6 pips", inst: "0.0 pips" },
  { category: "Crypto (Spot)", starter: "0.25%", pro: "0.15%", elite: "0.10%", inst: "0.05%" },
  { category: "ETFs", starter: "$0", pro: "$0", elite: "$0", inst: "Custom" },
  { category: "Options", starter: "$0.65/contract", pro: "$0.50/contract", elite: "$0.35/contract", inst: "Custom" },
  { category: "Overnight Fee", starter: "Standard", pro: "Reduced 20%", elite: "Reduced 40%", inst: "Custom" },
  { category: "Deposit", starter: "Free", pro: "Free", elite: "Free", inst: "Free" },
  { category: "Withdrawal", starter: "Free", pro: "Free", elite: "Free", inst: "Free" },
];

const faqs = [
  { q: "Is there really zero commission?", a: "Yes! On US/EU stocks and ETFs there is absolutely zero commission. For other assets, we earn a small spread which is included in the quoted price." },
  { q: "Are there hidden fees?", a: "No. We are fully transparent. The only costs are: spreads on forex/crypto, overnight financing for leveraged positions, and optional premium plan fees." },
  { q: "Can I switch plans anytime?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades." },
  { q: "Is the free plan really free forever?", a: "Yes. The Starter plan is free forever with no credit card required. We never charge you unless you choose to upgrade." },
];

export default function PricingPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full green-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            No hidden fees, ever
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Simple, <span className="text-green-600">transparent</span> pricing
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            Start free. Upgrade when you're ready. No gotchas, no surprises — just great trading.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card overflow-hidden ${plan.badge === "Most Popular" ? "ring-2 ring-indigo-500 glow" : ""}`}
              >
                {plan.badge && (
                  <div className={`bg-green-600-to-r ${plan.color} text-white text-xs font-bold py-1.5 text-center`}>
                    {plan.badge}
                  </div>
                )}
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl bg-green-600-to-br ${plan.color} flex items-center justify-center mb-4`}>
                    <plan.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-white/40 text-sm mb-4">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-white/40 text-sm">{plan.period}</span>
                  </div>
                  <Link
                    href="/contact"
                    className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-all mb-6 ${
                      plan.badge === "Most Popular"
                        ? "green-600-brand text-white glow-sm hover:opacity-90"
                        : "border border-white/20 text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Link>
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f.text} className={`flex items-start gap-2 text-xs ${f.ok ? "text-white/70" : "text-white/25"}`}>
                        {f.ok ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" />
                        )}
                        {f.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Table */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Complete <span className="text-green-600">Fee Schedule</span></h2>
            <p className="text-white/50">Full transparency. Every fee, listed clearly.</p>
          </div>
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-sm text-white/50 font-medium">Asset Class</th>
                    <th className="text-center py-4 px-4 text-sm text-white/50 font-medium">Starter</th>
                    <th className="text-center py-4 px-4 text-sm text-indigo-400 font-medium">Pro</th>
                    <th className="text-center py-4 px-4 text-sm text-yellow-400 font-medium">Elite</th>
                    <th className="text-center py-4 px-4 text-sm text-white/50 font-medium">Institutional</th>
                  </tr>
                </thead>
                <tbody>
                  {feeTable.map((row, i) => (
                    <tr key={row.category} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                      <td className="py-3.5 px-6 text-white/70 text-sm">{row.category}</td>
                      <td className="py-3.5 px-4 text-center text-white text-sm font-mono">{row.starter}</td>
                      <td className="py-3.5 px-4 text-center text-indigo-300 text-sm font-mono">{row.pro}</td>
                      <td className="py-3.5 px-4 text-center text-yellow-300 text-sm font-mono">{row.elite}</td>
                      <td className="py-3.5 px-4 text-center text-white/70 text-sm font-mono">{row.inst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Pricing <span className="text-green-600">FAQs</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Start for <span className="text-green-600">free today</span></h2>
          <p className="text-white/50 mb-8">No credit card required. No hidden fees. Just great trading.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
            Open Free Account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
          <CTA />
    </div>
  );
}
