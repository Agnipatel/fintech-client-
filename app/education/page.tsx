import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Video, FileText, Award, ArrowRight, Play, Clock, Users, Star } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Education & Learning",
  description:
    "Learn to trade with TradeVault Pro's free education center. Beginner to advanced courses, webinars, and trading guides.",
};

const courses = [
  {
    category: "Beginner",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    badge: "bg-emerald-400/20 text-emerald-300",
    items: [
      { title: "Introduction to Financial Markets", lessons: 12, duration: "3h 20m", rating: 4.9, students: "45K" },
      { title: "Understanding Stock Markets", lessons: 10, duration: "2h 45m", rating: 4.8, students: "38K" },
      { title: "Forex Trading for Beginners", lessons: 15, duration: "4h 10m", rating: 4.9, students: "52K" },
      { title: "Crypto Investing 101", lessons: 8, duration: "2h 15m", rating: 4.7, students: "61K" },
    ],
  },
  {
    category: "Intermediate",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    badge: "bg-sky-400/20 text-sky-300",
    items: [
      { title: "Technical Analysis Mastery", lessons: 20, duration: "6h 30m", rating: 4.9, students: "29K" },
      { title: "Risk Management Strategies", lessons: 14, duration: "3h 55m", rating: 4.8, students: "22K" },
      { title: "Options Trading Fundamentals", lessons: 18, duration: "5h 20m", rating: 4.7, students: "18K" },
      { title: "Trading Psychology & Discipline", lessons: 10, duration: "2h 40m", rating: 5.0, students: "35K" },
    ],
  },
  {
    category: "Advanced",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    badge: "bg-purple-400/20 text-purple-300",
    items: [
      { title: "Algorithmic Trading with Python", lessons: 25, duration: "8h 45m", rating: 4.9, students: "12K" },
      { title: "Quantitative Analysis Deep Dive", lessons: 22, duration: "7h 20m", rating: 4.8, students: "8K" },
      { title: "Derivatives & Structured Products", lessons: 20, duration: "6h 50m", rating: 4.8, students: "9K" },
      { title: "Portfolio Management Theory", lessons: 16, duration: "5h 10m", rating: 4.9, students: "11K" },
    ],
  },
];

const webinars = [
  { title: "Weekly Market Outlook", date: "Every Monday", time: "10:00 AM GMT", host: "Chief Market Analyst", live: true },
  { title: "Technical Analysis Clinic", date: "Every Wednesday", time: "2:00 PM GMT", host: "Head of Trading Education", live: false },
  { title: "Crypto Market Deep Dive", date: "Every Friday", time: "4:00 PM GMT", host: "Crypto Specialist", live: false },
  { title: "Options Strategy Workshop", date: "2nd & 4th Tuesday", time: "11:00 AM EST", host: "Derivatives Expert", live: false },
];

const guides = [
  { title: "The Complete Guide to Reading Candlestick Charts", readTime: "15 min" },
  { title: "Fibonacci Retracement: A Trader's Handbook", readTime: "12 min" },
  { title: "Understanding Margin and Leverage", readTime: "10 min" },
  { title: "How to Create a Trading Plan That Works", readTime: "18 min" },
  { title: "Top 10 Risk Management Rules for Traders", readTime: "8 min" },
  { title: "Fundamental Analysis: A Beginner's Guide", readTime: "20 min" },
  { title: "DeFi and Crypto Derivatives Explained", readTime: "14 min" },
  { title: "Building a Diversified Investment Portfolio", readTime: "16 min" },
];

export default function EducationPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full green-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            Free for all traders
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Learn to trade <span className="text-green-600">like a pro</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            From your first trade to advanced algorithmic strategies, our education center has
            everything you need to level up your trading.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { v: "60+", l: "Courses" },
              { v: "500+", l: "Video Lessons" },
              { v: "200K+", l: "Students" },
              { v: "Free", l: "Forever" },
            ].map((s) => (
              <div key={s.l} className="glass-card p-3 text-center">
                <div className="text-2xl font-bold text-green-600">{s.v}</div>
                <div className="text-white/40 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      {courses.map((level) => (
        <section key={level.category} className="py-12 border-b border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${level.badge}`}>
                {level.category}
              </span>
              <h2 className="text-white font-bold text-xl">{level.category} Courses</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {level.items.map((course) => (
                <div key={course.title} className="glass-card p-5 hover:bg-white/8 transition-all hover:scale-[1.02] cursor-pointer group">
                  <div className={`w-10 h-10 rounded-xl ${level.bg} flex items-center justify-center mb-3`}>
                    <Video className={`w-5 h-5 ${level.color}`} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-3 leading-snug">{course.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.lessons} lessons</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-white/60">{course.rating}</span>
                      <span className="text-xs text-white/30">({course.students})</span>
                    </div>
                    <div className={`w-7 h-7 rounded-full ${level.bg} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <Play className={`w-3.5 h-3.5 ${level.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Webinars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Live <span className="text-green-600">Webinars</span></h2>
            <p className="text-white/50">Join our expert traders for real-time market analysis and Q&A sessions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {webinars.map((w) => (
              <div key={w.title} className="glass-card p-5 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${w.live ? "bg-rose-400/10" : "bg-indigo-400/10"}`}>
                  {w.live ? (
                    <span className="w-3 h-3 rounded-full bg-rose-400 animate-pulse" />
                  ) : (
                    <Video className="w-5 h-5 text-indigo-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-white font-semibold text-sm">{w.title}</h3>
                    {w.live && (
                      <span className="text-xs bg-rose-400/20 text-rose-400 px-1.5 py-0.5 rounded-full font-medium">LIVE</span>
                    )}
                  </div>
                  <div className="text-white/40 text-xs">{w.date} · {w.time} · {w.host}</div>
                </div>
                <button className="text-xs px-3 py-1.5 rounded-lg green-600-brand text-white hover:opacity-80 transition-opacity flex-shrink-0">
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Trading <span className="text-green-600">Guides</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guides.map((g) => (
              <div key={g.title} className="glass-card p-4 flex items-center gap-4 hover:bg-white/8 transition-all cursor-pointer group">
                <FileText className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-white/70 text-sm flex-1 group-hover:text-white transition-colors">{g.title}</span>
                <span className="text-white/30 text-xs flex-shrink-0 flex items-center gap-1">
                  <Clock className="w-3 h-3" />{g.readTime}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to <span className="text-green-600">start learning?</span></h2>
          <p className="text-white/50 mb-8">All courses are 100% free for TradeVault Pro account holders.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
            Get Free Access <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
          <CTA />
    </div>
  );
}
