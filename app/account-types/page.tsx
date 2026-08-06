import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, X, ArrowRight, Star, Crown, Zap, Shield, TrendingUp } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Account Types",
  description:
    "Choose the right TradeVault Pro account: Standard, Pro, Elite, or Islamic (swap-free). Compare features and minimum deposits.",
};

const accountTypes = [
  {
    name: "Standard",
    icon: Star,
    tagline: "For beginners & casual traders",
    minDeposit: "$100",
    spread: "From 1.2 pips",
    commission: "$0",
    leverage: "1:100",
    execution: "Market",
    color: "from-slate-600 to-slate-700",
    badge: null,
    features: [
      { text: "Zero commission on stocks & ETFs", ok: true },
      { text: "Access to all markets", ok: true },
      { text: "Basic charting & indicators", ok: true },
      { text: "Email & chat support", ok: true },
      { text: "Mobile & web platform", ok: true },
      { text: "Advanced order types", ok: false },
      { text: "AI market signals", ok: false },
      { text: "Dedicated manager", ok: false },
    ],
  },
  {
    name: "Pro Trader",
    icon: Zap,
    tagline: "For active & frequent traders",
    minDeposit: "$1,000",
    spread: "From 0.8 pips",
    commission: "$0",
    leverage: "1:200",
    execution: "Instant",
    color: "from-indigo-600 to-violet-700",
    badge: "Most Popular",
    features: [
      { text: "Zero commission on all assets", ok: true },
      { text: "Access to all markets", ok: true },
      { text: "200+ indicators & tools", ok: true },
      { text: "Priority 24/5 support", ok: true },
      { text: "Mobile, web & desktop", ok: true },
      { text: "Advanced order types", ok: true },
      { text: "AI market signals (50/mo)", ok: true },
      { text: "Dedicated manager", ok: false },
    ],
  },
  {
    name: "Elite",
    icon: Crown,
    tagline: "For professional & full-time traders",
    minDeposit: "$10,000",
    spread: "From 0.6 pips",
    commission: "$0",
    leverage: "1:400",
    execution: "ECN",
    color: "from-yellow-600 to-orange-600",
    badge: "Best Value",
    features: [
      { text: "Zero commission on all assets", ok: true },
      { text: "Access to all markets", ok: true },
      { text: "200+ indicators & tools", ok: true },
      { text: "24/7 VIP support", ok: true },
      { text: "All platforms + API", ok: true },
      { text: "Advanced order types", ok: true },
      { text: "Unlimited AI signals", ok: true },
      { text: "Dedicated senior manager", ok: true },
    ],
  },
  {
    name: "Islamic",
    icon: Shield,
    tagline: "Swap-free Shariah-compliant account",
    minDeposit: "$500",
    spread: "From 1.5 pips",
    commission: "Admin fee",
    leverage: "1:100",
    execution: "Market",
    color: "from-emerald-600 to-teal-700",
    badge: "Shariah Compliant",
    features: [
      { text: "Zero overnight swap", ok: true },
      { text: "Shariah-compliant structure", ok: true },
      { text: "All markets available", ok: true },
      { text: "Certificate of compliance", ok: true },
      { text: "Full platform access", ok: true },
      { text: "Advanced order types", ok: true },
      { text: "AI market signals (25/mo)", ok: true },
      { text: "Dedicated manager", ok: false },
    ],
  },
];

const comparisonTable = [
  { feature: "Minimum Deposit", standard: "$100", pro: "$1,000", elite: "$10,000", islamic: "$500" },
  { feature: "Commission", standard: "$0", pro: "$0", elite: "$0", islamic: "Admin fee" },
  { feature: "Forex Spread", standard: "1.2 pips", pro: "0.8 pips", elite: "0.6 pips", islamic: "1.5 pips" },
  { feature: "Leverage (Forex)", standard: "1:100", pro: "1:200", elite: "1:400", islamic: "1:100" },
  { feature: "Leverage (Crypto)", standard: "1:10", pro: "1:20", elite: "1:50", islamic: "1:10" },
  { feature: "Order Execution", standard: "Market", pro: "Instant", elite: "ECN", islamic: "Market" },
  { feature: "Overnight Swap", standard: "Yes", pro: "Yes", elite: "Yes", islamic: "No" },
  { feature: "AI Signals", standard: "—", pro: "50/mo", elite: "Unlimited", islamic: "25/mo" },
  { feature: "API Access", standard: "—", pro: "Basic", elite: "Full", islamic: "—" },
  { feature: "Account Manager", standard: "Shared", pro: "Dedicated", elite: "Senior", islamic: "Shared" },
];

export default function AccountTypesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
            Choose your account
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            The right account for <span className="text-green-600">every trader</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto">
            From your first $100 to your multi-million trading operation, we have an account built for you.
          </p>
        </div>
      </section>

      {/* Account Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {accountTypes.map((account) => (
              <div
                key={account.name}
                className={`glass-card overflow-hidden ${account.badge === "Most Popular" ? "ring-2 ring-indigo-500 glow" : ""}`}
              >
                {account.badge && (
                  <div className={`bg-green-600-to-r ${account.color} text-white text-xs font-bold py-1.5 text-center`}>
                    {account.badge}
                  </div>
                )}
                <div className="p-6">
                  <div className={`w-10 h-10 rounded-xl bg-green-600-to-br ${account.color} flex items-center justify-center mb-4`}>
                    <account.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-0.5">{account.name}</h3>
                  <p className="text-white/40 text-xs mb-5">{account.tagline}</p>

                  <div className="space-y-2 mb-5 pb-5 border-b border-white/8">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Min. Deposit</span>
                      <span className="text-white font-semibold">{account.minDeposit}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Spread from</span>
                      <span className="text-white font-semibold">{account.spread}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Commission</span>
                      <span className="text-white font-semibold">{account.commission}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Max Leverage</span>
                      <span className="text-white font-semibold">{account.leverage}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-white/40">Execution</span>
                      <span className="text-white font-semibold">{account.execution}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {account.features.map((f) => (
                      <li key={f.text} className={`flex items-start gap-2 text-xs ${f.ok ? "text-white/60" : "text-white/20"}`}>
                        {f.ok ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-white/15 flex-shrink-0 mt-0.5" />
                        )}
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      account.badge === "Most Popular"
                        ? "green-600-brand text-white glow-sm hover:opacity-90"
                        : "border border-white/20 text-white/70 hover:bg-white/5"
                    }`}
                  >
                    Open Account
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Detailed <span className="text-green-600">Comparison</span></h2>
          </div>
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 text-sm text-white/50 font-medium">Feature</th>
                    <th className="text-center py-4 px-4 text-sm text-white/50 font-medium">Standard</th>
                    <th className="text-center py-4 px-4 text-sm text-indigo-400 font-medium">Pro Trader</th>
                    <th className="text-center py-4 px-4 text-sm text-yellow-400 font-medium">Elite</th>
                    <th className="text-center py-4 px-4 text-sm text-emerald-400 font-medium">Islamic</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                      <td className="py-3.5 px-6 text-white/70 text-sm">{row.feature}</td>
                      <td className="py-3.5 px-4 text-center text-white/60 text-sm">{row.standard}</td>
                      <td className="py-3.5 px-4 text-center text-indigo-300 text-sm font-medium">{row.pro}</td>
                      <td className="py-3.5 px-4 text-center text-yellow-300 text-sm font-medium">{row.elite}</td>
                      <td className="py-3.5 px-4 text-center text-emerald-300 text-sm">{row.islamic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Not sure which <span className="text-green-600">account to choose?</span></h2>
          <p className="text-white/50 mb-8">Talk to one of our account specialists and we'll help you pick the right one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
              Get Advice <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white/70 hover:text-white transition-colors">
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>
          <CTA />
    </div>
  );
}
