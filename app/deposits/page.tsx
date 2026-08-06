import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Wallet, Building, Smartphone, CheckCircle2, ArrowRight, Clock, Shield, Zap, Globe } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Deposits & Withdrawals",
  description:
    "Deposit and withdraw funds easily with TradeVault Pro. 20+ payment methods, instant deposits, and fast withdrawals.",
};

const depositMethods = [
  {
    name: "Bank Wire Transfer",
    icon: Building,
    depositTime: "1-3 business days",
    withdrawTime: "1-5 business days",
    depositFee: "Free",
    withdrawFee: "Free",
    minDeposit: "$100",
    maxDeposit: "Unlimited",
    currencies: ["USD", "EUR", "GBP", "AUD", "CAD"],
    badge: null,
  },
  {
    name: "Credit / Debit Card",
    icon: CreditCard,
    depositTime: "Instant",
    withdrawTime: "3-5 business days",
    depositFee: "Free",
    withdrawFee: "Free",
    minDeposit: "$10",
    maxDeposit: "$50,000/day",
    currencies: ["USD", "EUR", "GBP"],
    badge: "Popular",
  },
  {
    name: "PayPal",
    icon: Wallet,
    depositTime: "Instant",
    withdrawTime: "24 hours",
    depositFee: "Free",
    withdrawFee: "Free",
    minDeposit: "$10",
    maxDeposit: "$10,000/day",
    currencies: ["USD", "EUR", "GBP"],
    badge: null,
  },
  {
    name: "Crypto (USDT/BTC/ETH)",
    icon: Wallet,
    depositTime: "1-6 confirmations",
    withdrawTime: "1-2 hours",
    depositFee: "Network fee",
    withdrawFee: "Network fee",
    minDeposit: "$10",
    maxDeposit: "Unlimited",
    currencies: ["USDT", "BTC", "ETH", "USDC"],
    badge: "Fast",
  },
  {
    name: "Apple Pay / Google Pay",
    icon: Smartphone,
    depositTime: "Instant",
    withdrawTime: "Not available",
    depositFee: "Free",
    withdrawFee: "—",
    minDeposit: "$10",
    maxDeposit: "$5,000/day",
    currencies: ["USD", "EUR", "GBP"],
    badge: null,
  },
  {
    name: "Skrill / Neteller",
    icon: Wallet,
    depositTime: "Instant",
    withdrawTime: "24 hours",
    depositFee: "Free",
    withdrawFee: "Free",
    minDeposit: "$10",
    maxDeposit: "$20,000/day",
    currencies: ["USD", "EUR", "GBP"],
    badge: null,
  },
];

const securityFeatures = [
  { icon: Shield, title: "Funds Segregated", desc: "Your funds are always held separately from company operating funds." },
  { icon: CheckCircle2, title: "KYC Verified", desc: "All accounts verified with identity and address documents." },
  { icon: Zap, title: "Instant Deposits", desc: "Most deposit methods are credited instantly to your trading account." },
  { icon: Globe, title: "Multi-Currency", desc: "Deposit and withdraw in 30+ currencies with competitive exchange rates." },
];

const steps = [
  { step: "01", title: "Log into your account", desc: "Access the Wallet section from your account dashboard." },
  { step: "02", title: "Choose your method", desc: "Select from 20+ deposit methods including cards, bank wire, and crypto." },
  { step: "03", title: "Enter amount & confirm", desc: "Enter the amount, review the details, and confirm the transaction." },
  { step: "04", title: "Start trading", desc: "Funds appear in your account instantly (most methods) — start trading!" },
];

export default function DepositsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
            Fast & secure payments
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Deposits & <span className="text-green-600">Withdrawals</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            Fund your account in seconds and withdraw your profits quickly. 20+ payment methods, zero
            fees, and bank-grade security.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { v: "20+", l: "Payment Methods" },
              { v: "Free", l: "Deposit Fees" },
              { v: "Instant", l: "Most Deposits" },
              { v: "30+", l: "Currencies" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{s.v}</div>
                <div className="text-white/40 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Payment <span className="text-green-600">Methods</span></h2>
            <p className="text-white/50">Choose from 20+ secure payment options — all with zero deposit fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {depositMethods.map((method) => (
              <div key={method.name} className="glass-card p-6 hover:bg-white/8 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-400/10 flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-white font-semibold">{method.name}</h3>
                  </div>
                  {method.badge && (
                    <span className="text-xs glass px-2 py-1 rounded-full text-indigo-400">{method.badge}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">Deposit Time</div>
                    <div className="text-white/70 text-sm">{method.depositTime}</div>
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">Withdrawal Time</div>
                    <div className="text-white/70 text-sm">{method.withdrawTime}</div>
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">Deposit Fee</div>
                    <div className="text-emerald-400 text-sm font-semibold">{method.depositFee}</div>
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">Withdraw Fee</div>
                    <div className="text-white/70 text-sm">{method.withdrawFee}</div>
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">Min Deposit</div>
                    <div className="text-white/70 text-sm">{method.minDeposit}</div>
                  </div>
                  <div>
                    <div className="text-white/30 text-xs mb-0.5">Max Deposit</div>
                    <div className="text-white/70 text-sm">{method.maxDeposit}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {method.currencies.map((c) => (
                    <span key={c} className="text-xs glass px-2 py-0.5 rounded text-white/40">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Deposit */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How to <span className="text-green-600">Deposit</span></h2>
            <p className="text-white/50">Fund your account in under 2 minutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-green-600-to-r from-indigo-500/50 to-transparent z-0" />
                )}
                <div className="glass-card p-5 text-center relative">
                  <div className="w-10 h-10 rounded-full green-600-brand text-white text-lg font-bold flex items-center justify-center mx-auto mb-3 glow-sm">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Your money is <span className="text-green-600">always safe</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityFeatures.map((f) => (
              <div key={f.title} className="glass-card p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-white/40 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/8 bg-black/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to <span className="text-green-600">fund your account?</span></h2>
          <p className="text-white/50 mb-6">Open your free account in minutes and make your first deposit.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
            Open Account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
          <CTA />
    </div>
  );
}
