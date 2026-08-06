import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, ArrowRight, Globe, Headphones, Users } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TradeVault Pro's award-winning support team. Live chat, phone, email, and office locations worldwide.",
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    desc: "Chat with a real human support agent instantly.",
    action: "Start Chat",
    available: "Available 24/7",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: Phone,
    title: "Phone Support",
    desc: "+1 (800) 555-TRADE · +44 20 7946 0321",
    action: "Call Now",
    available: "Mon–Fri 8AM–8PM",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "support@tradevaultpro.com",
    action: "Send Email",
    available: "Reply within 2 hours",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    desc: "Dedicated account manager for Elite & Institutional clients.",
    action: "Contact Manager",
    available: "24/7 for Premium",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

const offices = [
  { city: "London", country: "United Kingdom", address: "1 Canada Square, Canary Wharf, London E14 5AB", flagship: true },
  { city: "New York", country: "United States", address: "1 World Trade Center, Suite 8500, New York, NY 10007" },
  { city: "Singapore", country: "Singapore", address: "1 Raffles Place, One Raffles Place Tower 2, Singapore 048616" },
  { city: "Dubai", country: "UAE", address: "Gate District, DIFC, Dubai, United Arab Emirates" },
  { city: "Sydney", country: "Australia", address: "Governor Phillip Tower, 1 Farrer Place, Sydney NSW 2000" },
];

const topics = [
  "Account opening",
  "Deposit / Withdrawal",
  "Trading question",
  "Technical issue",
  "Compliance / KYC",
  "Affiliate program",
  "Institutional enquiry",
  "Other",
];

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <Headphones className="w-3.5 h-3.5 text-indigo-400" />
            Award-winning support
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            We're here to <span className="text-green-600">help</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl mx-auto mb-10">
            Our world-class support team is available 24/7 to answer your questions and help you
            succeed as a trader.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { v: "24/7", l: "Support Available" },
              { v: "<2 min", l: "Live Chat Response" },
              { v: "4.9/5", l: "Support Rating" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{s.v}</div>
                <div className="text-white/40 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method) => (
              <div key={method.title} className="glass-card p-6 hover:bg-white/8 transition-all group">
                <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center mb-4`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <h3 className="text-white font-bold mb-1">{method.title}</h3>
                <p className="text-white/50 text-sm mb-2 leading-relaxed">{method.desc}</p>
                <div className="flex items-center gap-1 text-emerald-400 text-xs mb-4">
                  <Clock className="w-3 h-3" />
                  {method.available}
                </div>
                <button className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-all ${method.title === "Live Chat" ? "green-600-brand text-white glow-sm hover:opacity-90" : "border border-white/15 text-white/60 hover:bg-white/5"}`}>
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Offices */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a <span className="text-green-600">message</span></h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Phone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Topic</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-indigo-500 transition-colors">
                    <option value="" className="bg-gray-900">Select a topic...</option>
                    {topics.map((t) => (
                      <option key={t} value={t} className="bg-gray-900">{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-white/30 text-xs text-center">
                  We typically respond within 2 hours during business hours.
                </p>
              </form>
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our <span className="text-green-600">Offices</span></h2>
              <div className="space-y-4 mb-8">
                {offices.map((office) => (
                  <div key={office.city} className={`glass-card p-4 ${office.flagship ? "ring-1 ring-indigo-500/50" : ""}`}>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-white font-semibold">{office.city}</span>
                          <span className="text-white/40 text-xs">{office.country}</span>
                          {office.flagship && (
                            <span className="text-xs glass px-2 py-0.5 rounded-full text-indigo-400">HQ</span>
                          )}
                        </div>
                        <p className="text-white/40 text-sm">{office.address}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Support */}
              <div className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-indigo-400" />
                  <h3 className="text-white font-bold">Global Support</h3>
                </div>
                <p className="text-white/50 text-sm mb-4">
                  Our support team operates across all time zones with native speakers in 25+
                  languages including English, Spanish, French, German, Arabic, Mandarin, and more.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Languages", value: "25+" },
                    { label: "Support Agents", value: "300+" },
                    { label: "Avg Response", value: "< 2 min" },
                    { label: "Satisfaction", value: "98.4%" },
                  ].map((s) => (
                    <div key={s.label} className="glass rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600">{s.value}</div>
                      <div className="text-white/40 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Account CTA */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl green-600-brand p-10 text-center glow">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative">
              <Users className="w-10 h-10 text-white/80 mx-auto mb-4" />
              <h2 className="text-3xl font-extrabold text-white mb-3">
                Ready to start your trading journey?
              </h2>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Open your free account today and join 2 million traders worldwide.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold hover:bg-white/90 transition-all hover:scale-105"
              >
                Open Free Account
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <CTA />
    </div>
  );
}
