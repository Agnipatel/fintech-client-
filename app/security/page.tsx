import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle2, ArrowRight, Globe } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Security",
  description:
    "TradeVault Pro's industry-leading security: 256-bit encryption, cold storage, 2FA, FDIC insurance and regulatory compliance.",
};

const securityPillars = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    desc: "All data is encrypted in transit and at rest using AES-256, the same standard used by the US military and global financial institutions.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Server,
    title: "Cold Storage",
    desc: "95% of crypto assets are stored in air-gapped cold wallets, physically secured in geographically distributed vaults.",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Shield,
    title: "FDIC Insurance",
    desc: "Cash balances are held in FDIC-insured bank accounts, protecting up to $500,000 per account in the unlikely event of bank failure.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    desc: "Our dedicated security operations center monitors all systems and accounts around the clock for suspicious activity.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Key,
    title: "Multi-Factor Auth",
    desc: "Enforce 2FA via authenticator apps, hardware security keys (YubiKey), or biometrics. All logins are verified.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection AI",
    desc: "Machine learning models detect unusual trading patterns and flag potential account takeovers in milliseconds.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Information Security Management", year: "2020" },
  { name: "SOC 2 Type II", desc: "Security, Availability & Confidentiality", year: "2021" },
  { name: "PCI DSS Level 1", desc: "Payment Card Industry Compliance", year: "2020" },
  { name: "GDPR Compliant", desc: "EU Data Protection Regulation", year: "2018" },
  { name: "CCPA Compliant", desc: "California Consumer Privacy Act", year: "2020" },
  { name: "CSA STAR", desc: "Cloud Security Alliance Certification", year: "2022" },
];

const regulators = [
  { name: "FCA", country: "United Kingdom", license: "FRN 987654" },
  { name: "SEC", country: "United States", license: "CRD 12345" },
  { name: "ASIC", country: "Australia", license: "AFS 456789" },
  { name: "CySEC", country: "European Union", license: "CIF 123/15" },
  { name: "MAS", country: "Singapore", license: "MAS-TVC-001" },
  { name: "DFSA", country: "UAE / Dubai", license: "DFSA-F0034" },
  { name: "FSCA", country: "South Africa", license: "FSP 50065" },
];

const securityPractices = [
  "Regular third-party penetration testing",
  "Bug bounty program with $100K max reward",
  "Employee background checks",
  "Segregated client funds",
  "Real-time transaction monitoring",
  "Automatic session timeout",
  "IP whitelisting option",
  "Withdrawal confirmation emails",
  "API key scoping & rate limiting",
  "Zero-knowledge architecture for passwords",
  "Disaster recovery with 99.99% uptime SLA",
  "Annual external security audits",
];

export default function SecurityPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-emerald-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Bank-grade protection
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Your assets are <span className="text-green-600">fortress safe</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            We've invested millions into building security infrastructure that exceeds the standards
            of the world's leading financial institutions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["ISO 27001", "SOC 2 Type II", "FDIC Insured", "256-bit SSL", "2FA Protected"].map((b) => (
              <div key={b} className="glass px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white/70">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Six layers of <span className="text-green-600">protection</span></h2>
            <p className="text-white/50">Every aspect of our platform is designed with security as the top priority.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPillars.map((p) => (
              <div key={p.title} className="glass-card p-6 hover:bg-white/8 transition-all">
                <div className={`w-12 h-12 rounded-xl ${p.bg} flex items-center justify-center mb-4`}>
                  <p.icon className={`w-6 h-6 ${p.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Security */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">How we <span className="text-green-600">protect your funds</span></h2>
              <div className="space-y-4">
                {[
                  { pct: "95%", label: "of crypto in cold storage", color: "bg-emerald-500" },
                  { pct: "100%", label: "of fiat in FDIC-insured accounts", color: "bg-sky-500" },
                  { pct: "$500K", label: "per account FDIC insurance limit", color: "bg-indigo-500" },
                  { pct: "£85K", label: "FSCS protection (UK clients)", color: "bg-purple-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 glass-card p-4">
                    <div className={`text-lg font-bold text-green-600 min-w-[80px]`}>{item.pct}</div>
                    <div className="flex-1 text-white/60 text-sm">{item.label}</div>
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Security Best Practices</h3>
              <div className="grid grid-cols-1 gap-2">
                {securityPractices.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Certifications & <span className="text-green-600">Compliance</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((c) => (
              <div key={c.name} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white font-bold">{c.name}</span>
                  <span className="text-white/30 text-xs ml-auto">Since {c.year}</span>
                </div>
                <p className="text-white/40 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulators */}
      <section className="py-16 bg-black/20 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white mb-8">
            Globally <span className="text-green-600">Regulated</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {regulators.map((r) => (
              <div key={r.name} className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Globe className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-white font-bold text-sm">{r.name}</span>
                </div>
                <div className="text-white/40 text-xs">{r.country}</div>
                <div className="text-white/20 text-xs font-mono mt-1">{r.license}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Trade with <span className="text-green-600">total confidence</span></h2>
          <p className="text-white/50 mb-8">Your funds are protected by the most advanced security infrastructure in fintech.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
            Open Secure Account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
          <CTA />
    </div>
  );
}
