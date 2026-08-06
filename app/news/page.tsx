import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, TrendingDown, Clock, ArrowRight, Tag, Rss } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "News & Market Analysis",
  description:
    "Stay ahead with TradeVault Pro's real-time market news, expert analysis, and AI-powered insights on stocks, forex, and crypto.",
};

const breakingNews = [
  {
    tag: "Crypto",
    title: "Bitcoin Surges Past $67,000 as Institutional Buying Accelerates",
    summary: "BTC reached a 3-month high as ETF inflows hit record levels, with analysts targeting $75K next resistance.",
    time: "2 min ago",
    impact: "bullish",
    tagColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    tag: "Forex",
    title: "Fed Signals Possible Rate Cut in Q3 2026, Dollar Weakens",
    summary: "EUR/USD jumped 0.4% after Fed minutes revealed dovish tones, suggesting September rate reduction likely.",
    time: "15 min ago",
    impact: "bearish",
    tagColor: "text-sky-400 bg-sky-400/10",
  },
  {
    tag: "Stocks",
    title: "NVIDIA Reports Record Q1 Revenue, Shares Jump 8% Pre-Market",
    summary: "NVDA beat estimates by 23%, driven by AI chip demand. Analysts raise price target to $1,100.",
    time: "1 hr ago",
    impact: "bullish",
    tagColor: "text-emerald-400 bg-emerald-400/10",
  },
];

const articles = [
  {
    tag: "Analysis",
    title: "S&P 500 Technical Outlook: Key Levels to Watch This Week",
    author: "James Chen, CMT",
    time: "3 hours ago",
    readTime: "8 min",
    tagColor: "text-indigo-400 bg-indigo-400/10",
  },
  {
    tag: "Crypto",
    title: "Ethereum Merge Anniversary: Where DeFi Stands Today",
    author: "Sarah Mitchell",
    time: "5 hours ago",
    readTime: "12 min",
    tagColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    tag: "Forex",
    title: "USD/JPY: Bank of Japan's Next Move Could Trigger 500-Pip Swing",
    author: "Marco Rossi, FX Analyst",
    time: "7 hours ago",
    readTime: "6 min",
    tagColor: "text-sky-400 bg-sky-400/10",
  },
  {
    tag: "Stocks",
    title: "Tech Earnings Season Preview: What to Expect from Big Tech",
    author: "Elena Volkov",
    time: "1 day ago",
    readTime: "10 min",
    tagColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    tag: "Macro",
    title: "Global Inflation Data: 5 Charts Every Trader Must See",
    author: "Dr. Priya Sharma",
    time: "1 day ago",
    readTime: "15 min",
    tagColor: "text-purple-400 bg-purple-400/10",
  },
  {
    tag: "Commodities",
    title: "Gold Near All-Time Highs: Supply Constraints or Safe-Haven Demand?",
    author: "Daniel Okonkwo",
    time: "2 days ago",
    readTime: "9 min",
    tagColor: "text-orange-400 bg-orange-400/10",
  },
];

const economicCalendar = [
  { event: "US Non-Farm Payrolls", date: "Fri, Jul 5", impact: "High", previous: "272K", forecast: "185K" },
  { event: "ECB Rate Decision", date: "Thu, Jul 18", impact: "High", previous: "4.50%", forecast: "4.25%" },
  { event: "UK CPI Inflation", date: "Wed, Jul 17", impact: "Medium", previous: "2.3%", forecast: "2.1%" },
  { event: "Fed Chair Powell Speech", date: "Tue, Jul 16", impact: "High", previous: "—", forecast: "—" },
  { event: "China GDP Q2", date: "Mon, Jul 15", impact: "Medium", previous: "5.3%", forecast: "5.1%" },
];

const marketSummary = [
  { name: "S&P 500", value: "5,234", change: "-0.21%", up: false },
  { name: "NASDAQ", value: "18,442", change: "+0.34%", up: true },
  { name: "DOW", value: "39,127", change: "-0.15%", up: false },
  { name: "Gold", value: "$2,341", change: "+0.82%", up: true },
  { name: "Oil (WTI)", value: "$78.42", change: "+1.24%", up: true },
  { name: "BTC", value: "$67,432", change: "+2.34%", up: true },
];

export default function NewsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 grid-pattern overflow-hidden border-b border-white/8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-4">
            <Rss className="w-4 h-4 text-indigo-400" />
            <span className="text-xs text-white/50 uppercase tracking-widest">Live Market Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
            News & <span className="text-green-600">Analysis</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Real-time news, expert analysis, and AI-powered insights to keep you ahead of the market.
          </p>
        </div>
      </section>

      {/* Market Summary Bar */}
      <div className="border-b border-white/8 bg-black/20 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            {marketSummary.map((m) => (
              <div key={m.name} className="flex items-center gap-2 flex-shrink-0">
                <span className="text-white/40 text-xs">{m.name}</span>
                <span className="text-white text-sm font-mono font-semibold">{m.value}</span>
                <span className={`text-xs flex items-center gap-0.5 ${m.up ? "text-emerald-400" : "text-rose-400"}`}>
                  {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {m.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Breaking News */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                Breaking News
              </h2>
              <div className="space-y-4">
                {breakingNews.map((news) => (
                  <div key={news.title} className="glass-card p-5 hover:bg-white/8 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${news.tagColor}`}>{news.tag}</span>
                      <span className="text-white/30 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />{news.time}
                      </span>
                      <span className={`ml-auto text-xs flex items-center gap-1 ${news.impact === "bullish" ? "text-emerald-400" : "text-rose-400"}`}>
                        {news.impact === "bullish" ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {news.impact}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{news.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis Articles */}
            <div>
              <h2 className="text-lg font-bold text-white mb-4">Latest Analysis</h2>
              <div className="space-y-3">
                {articles.map((a) => (
                  <div key={a.title} className="glass-card p-4 flex gap-4 hover:bg-white/8 transition-all cursor-pointer group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${a.tagColor}`}>{a.tag}</span>
                        <span className="text-white/30 text-xs">{a.time}</span>
                      </div>
                      <h3 className="text-white/80 font-semibold text-sm group-hover:text-white transition-colors leading-snug">
                        {a.title}
                      </h3>
                      <div className="text-white/30 text-xs mt-1">{a.author} · {a.readTime} read</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 flex-shrink-0 self-center group-hover:text-white/60 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Economic Calendar */}
            <div className="glass-card p-5">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                Economic Calendar
              </h3>
              <div className="space-y-3">
                {economicCalendar.map((ev) => (
                  <div key={ev.event} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/70 text-xs font-medium">{ev.event}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        ev.impact === "High" ? "bg-rose-400/15 text-rose-400" : "bg-yellow-400/15 text-yellow-400"
                      }`}>{ev.impact}</span>
                    </div>
                    <div className="flex justify-between text-xs text-white/30">
                      <span>{ev.date}</span>
                      <span>Prev: {ev.previous} | Fcst: {ev.forecast}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass-card p-5">
              <h3 className="text-white font-bold mb-2">Market Brief Newsletter</h3>
              <p className="text-white/50 text-sm mb-4">Daily market insights delivered to your inbox every morning.</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-white/30 mb-3 outline-none focus:border-indigo-500"
                readOnly
              />
              <button className="w-full py-2 rounded-lg green-600-brand text-white text-sm font-semibold">
                Subscribe Free
              </button>
            </div>

            {/* Tags */}
            <div className="glass-card p-5">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4 text-indigo-400" />
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Bitcoin", "Forex", "S&P 500", "Tech Stocks", "Fed Policy", "Earnings", "ETFs", "Gold", "Oil", "Crypto", "Options", "Macro"].map((t) => (
                  <span key={t} className="glass text-xs px-3 py-1 rounded-full text-white/50 hover:text-white cursor-pointer transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
          <CTA />
    </div>
  );
}
