import type { Metadata } from "next";
import Link from "next/link";
import { Users, Award, Globe, TrendingUp, Heart, Shield, ArrowRight, Target, Zap } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TradeVault Pro's mission, our team of experts, and our commitment to democratizing financial markets for everyone.",
};

const timeline = [
  { year: "2018", title: "Founded in London", desc: "Three ex-Goldman Sachs engineers set out to build the broker they always wished existed." },
  { year: "2019", title: "First 100K Users", desc: "Reached 100,000 registered traders within 18 months of launch. Raised $35M Series A." },
  { year: "2020", title: "Crypto Integration", desc: "Added 200+ cryptocurrency pairs and launched our proprietary AI market signals engine." },
  { year: "2021", title: "Global Expansion", desc: "Expanded to 150 countries, launched mobile apps and secured FCA, ASIC regulations." },
  { year: "2022", title: "$150M Series B", desc: "Raised $150M to accelerate product development and global market penetration." },
  { year: "2023", title: "1M Traders Milestone", desc: "Surpassed 1 million active traders globally. Launched institutional trading desk." },
  { year: "2024", title: "2M+ Traders", desc: "2 million active traders, 15,000+ instruments, 180+ countries. Industry leader." },
];

const values = [
  { icon: Heart, title: "Trader First", desc: "Every decision we make starts with 'how does this help our traders?'" },
  { icon: Shield, title: "Integrity Always", desc: "Transparent pricing, no hidden fees, and honest communication — always." },
  { icon: Zap, title: "Innovation Driven", desc: "We invest 30% of revenue into R&D to keep you ahead of the curve." },
  { icon: Globe, title: "Globally Inclusive", desc: "Financial freedom should be available to everyone, everywhere in the world." },
  { icon: Target, title: "Excellence Obsessed", desc: "We never ship 'good enough.' Every feature is polished to perfection." },
  { icon: Users, title: "Community Powered", desc: "Our traders shape our roadmap — your feedback drives our development." },
];

const team = [
  { name: "Alexander Reid", role: "CEO & Co-Founder", bg: "AR", bio: "Former Goldman Sachs VP. 15 years in institutional trading." },
  { name: "Priya Sharma", role: "CTO & Co-Founder", bg: "PS", bio: "Ex-Google & Two Sigma. Built the execution engine from scratch." },
  { name: "Marcus Webb", role: "CFO", bg: "MW", bio: "Former JP Morgan. Oversaw $2B+ in AUM at a London hedge fund." },
  { name: "Elena Volkov", role: "Chief Risk Officer", bg: "EV", bio: "PhD Quantitative Finance. Expert in derivatives and systemic risk." },
  { name: "Daniel Okonkwo", role: "Head of Product", bg: "DO", bio: "Product leader with 10+ years at top fintech companies." },
  { name: "Sophie Laurent", role: "Head of Compliance", bg: "SL", bio: "Former FCA regulator. Ensures we exceed regulatory standards." },
];

const awards = [
  { title: "Best Fintech Broker 2024", org: "FinTech Global Awards" },
  { title: "Top Trading Platform", org: "TechCrunch Fintech 50" },
  { title: "Best Customer Service", org: "Trading Awards UK" },
  { title: "Most Innovative Broker", org: "Benzinga FinTech Awards" },
  { title: "Best Crypto Platform", org: "CoinDesk Awards" },
  { title: "Best Mobile App", org: "App Design Awards 2024" },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-32 grid-pattern overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full green-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            Our Story
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            We believe <span className="text-green-600">everyone</span>
            <br />deserves great trading tools
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            Founded in 2018 by three ex-Goldman Sachs engineers, TradeVault Pro was built with one
            mission: democratize institutional-grade trading for everyone.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { v: "2018", l: "Founded" },
              { v: "2M+", l: "Traders" },
              { v: "180+", l: "Countries" },
              { v: "$50B+", l: "Traded Monthly" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-4 text-center">
                <div className="text-3xl font-extrabold text-green-600">{s.v}</div>
                <div className="text-white/50 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-green-600">Mission</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6 text-lg">
                For too long, the best trading tools were reserved for hedge funds and institutional
                traders with millions in capital. We're changing that.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                TradeVault Pro gives every trader — from the first-time investor to the seasoned
                professional — access to the same institutional-grade technology, analytics, and
                execution that was previously available only to the elite few.
              </p>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl green-600-brand text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Explore the Platform
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="glass-card p-4">
                  <v.icon className="w-5 h-5 text-indigo-400 mb-2" />
                  <h4 className="text-white font-semibold text-sm mb-1">{v.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our <span className="text-green-600">Journey</span></h2>
            <p className="text-white/50">From a small London startup to a global trading powerhouse.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-green-600-to-b from-indigo-500 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 pl-16 relative">
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full green-600-brand flex items-center justify-center -translate-x-1/2 glow-sm">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 glass-card p-5">
                    <div className="text-xs text-indigo-400 font-mono mb-1">{item.year}</div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet the <span className="text-green-600">Leadership Team</span></h2>
            <p className="text-white/50 max-w-xl mx-auto">World-class talent from Goldman Sachs, Google, JP Morgan, and Two Sigma.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="glass-card p-6 hover:bg-white/8 transition-all group">
                <div className="w-16 h-16 rounded-2xl green-600-brand flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:glow-sm transition-all">
                  {t.bg}
                </div>
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                <div className="text-indigo-400 text-sm mb-2">{t.role}</div>
                <p className="text-white/50 text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry <span className="text-green-600">Recognition</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {awards.map((a) => (
              <div key={a.title} className="glass-card p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{a.title}</div>
                  <div className="text-white/40 text-xs">{a.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulators */}
      <section className="py-16 border-t border-white/8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/30 text-xs uppercase tracking-widest mb-8">Globally Regulated & Licensed</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["FCA (UK)", "SEC (US)", "ASIC (AU)", "CySEC (EU)", "MAS (SG)", "DFSA (UAE)", "FSCA (ZA)"].map((r) => (
              <div key={r} className="glass px-4 py-2 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white/60">{r}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
          <CTA />
    </div>
  );
}
