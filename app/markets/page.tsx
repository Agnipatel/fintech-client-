import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, TrendingDown, ArrowRight, Globe, Search, Filter, Activity, DollarSign, BarChart2 } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "Trade 15,000+ instruments across stocks, forex, cryptocurrencies, ETFs, indices and commodities on TradeVault Pro.",
};

const marketCategories = [
  {
    name: "Stocks",
    icon: TrendingUp,
    count: "8,000+",
    desc: "US, European, Asian equities",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    instruments: [
      { symbol: "AAPL", name: "Apple Inc.", price: "189.45", change: "-0.32%", up: false, mktCap: "$2.91T" },
      { symbol: "MSFT", name: "Microsoft Corp.", price: "415.20", change: "+1.14%", up: true, mktCap: "$3.08T" },
      { symbol: "GOOGL", name: "Alphabet Inc.", price: "174.35", change: "+0.87%", up: true, mktCap: "$2.14T" },
      { symbol: "NVDA", name: "NVIDIA Corp.", price: "875.32", change: "+5.14%", up: true, mktCap: "$2.15T" },
      { symbol: "TSLA", name: "Tesla Inc.", price: "241.30", change: "+3.12%", up: true, mktCap: "$769B" },
    ],
  },
  {
    name: "Forex",
    icon: DollarSign,
    count: "80+",
    desc: "Major, minor & exotic pairs",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    instruments: [
      { symbol: "EUR/USD", name: "Euro / US Dollar", price: "1.0842", change: "+0.15%", up: true, mktCap: "Most liquid" },
      { symbol: "GBP/USD", name: "British Pound / USD", price: "1.2734", change: "-0.08%", up: false, mktCap: "3rd most liquid" },
      { symbol: "USD/JPY", name: "US Dollar / Yen", price: "151.43", change: "+0.22%", up: true, mktCap: "2nd most liquid" },
      { symbol: "USD/CHF", name: "US Dollar / Swiss Franc", price: "0.8912", change: "-0.11%", up: false, mktCap: "Safe haven" },
      { symbol: "AUD/USD", name: "Australian Dollar / USD", price: "0.6574", change: "+0.34%", up: true, mktCap: "5th most liquid" },
    ],
  },
  {
    name: "Crypto",
    icon: Activity,
    count: "250+",
    desc: "Spot & perpetual contracts",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    instruments: [
      { symbol: "BTC/USD", name: "Bitcoin", price: "67,432.80", change: "+2.34%", up: true, mktCap: "$1.32T" },
      { symbol: "ETH/USD", name: "Ethereum", price: "3,521.40", change: "+1.87%", up: true, mktCap: "$423B" },
      { symbol: "SOL/USD", name: "Solana", price: "178.45", change: "+4.12%", up: true, mktCap: "$82B" },
      { symbol: "XRP/USD", name: "XRP", price: "0.5834", change: "+4.23%", up: true, mktCap: "$32B" },
      { symbol: "ADA/USD", name: "Cardano", price: "0.4521", change: "-1.12%", up: false, mktCap: "$16B" },
    ],
  },
  {
    name: "ETFs",
    icon: BarChart2,
    count: "3,500+",
    desc: "Global ETF universe",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    instruments: [
      { symbol: "SPY", name: "SPDR S&P 500 ETF", price: "523.18", change: "-0.21%", up: false, mktCap: "$532B AUM" },
      { symbol: "QQQ", name: "Invesco QQQ Trust", price: "448.72", change: "+0.45%", up: true, mktCap: "$248B AUM" },
      { symbol: "GLD", name: "SPDR Gold Shares", price: "221.34", change: "+0.82%", up: true, mktCap: "$58B AUM" },
      { symbol: "VTI", name: "Vanguard Total Mkt", price: "261.45", change: "+0.18%", up: true, mktCap: "$421B AUM" },
      { symbol: "ARKK", name: "ARK Innovation ETF", price: "48.32", change: "+2.14%", up: true, mktCap: "$6.4B AUM" },
    ],
  },
];

const tradingConditions = [
  { label: "Min Spread", value: "0.0 pips", note: "Raw ECN account" },
  { label: "Leverage", value: "Up to 1:500", note: "Regulated limits apply" },
  { label: "Execution", value: "< 10ms", note: "Average order speed" },
  { label: "Trading Hours", value: "24/5", note: "Forex & Crypto 24/7" },
  { label: "Margin Call", value: "50%", note: "Stop out at 30%" },
  { label: "Commission", value: "$0", note: "Standard accounts" },
];

export default function MarketsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            15,000+ instruments
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Every market,<br /><span className="text-green-600">one platform</span>
          </h1>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            Stocks, forex, crypto, ETFs, commodities and indices — trade them all from a single
            unified account with institutional pricing.
          </p>
          {/* Search bar */}
          <div className="max-w-xl mx-auto">
            <div className="flex gap-3 glass-card p-2">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search instruments..."
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-sm outline-none"
                  readOnly
                />
              </div>
              <button className="px-5 py-2 rounded-lg green-600-brand text-white text-sm font-semibold">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Conditions */}
      <section className="py-12 border-y border-white/8 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tradingConditions.map((c) => (
              <div key={c.label} className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-0.5">{c.value}</div>
                <div className="text-white/70 text-sm font-medium">{c.label}</div>
                <div className="text-white/30 text-xs">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Categories */}
      {marketCategories.map((cat) => (
        <section key={cat.name} className="py-16 border-b border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl">{cat.name}</h2>
                  <p className="text-white/40 text-sm">{cat.count} instruments · {cat.desc}</p>
                </div>
              </div>
              <Link href="/platform" className="flex items-center gap-1 text-sm text-indigo-400 hover:text-white transition-colors">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/8">
                    <th className="text-left py-3 px-4 text-xs text-white/40 font-medium">Symbol</th>
                    <th className="text-left py-3 px-4 text-xs text-white/40 font-medium">Name</th>
                    <th className="text-right py-3 px-4 text-xs text-white/40 font-medium">Price</th>
                    <th className="text-right py-3 px-4 text-xs text-white/40 font-medium">24h Change</th>
                    <th className="text-right py-3 px-4 text-xs text-white/40 font-medium hidden md:table-cell">Market Cap</th>
                    <th className="py-3 px-4" />
                  </tr>
                </thead>
                <tbody>
                  {cat.instruments.map((inst) => (
                    <tr key={inst.symbol} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${cat.bg} flex items-center justify-center`}>
                            <span className={`text-xs font-bold ${cat.color}`}>{inst.symbol.slice(0, 2)}</span>
                          </div>
                          <span className="text-white font-semibold text-sm">{inst.symbol}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-white/50 text-sm">{inst.name}</td>
                      <td className="py-4 px-4 text-right text-white font-mono text-sm">{inst.price}</td>
                      <td className="py-4 px-4 text-right">
                        <span className={`flex items-center justify-end gap-1 text-sm font-semibold ${inst.up ? "text-emerald-400" : "text-rose-400"}`}>
                          {inst.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                          {inst.change}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right text-white/40 text-sm hidden md:table-cell">{inst.mktCap}</td>
                      <td className="py-4 px-4">
                        <button className="text-xs px-3 py-1.5 rounded-lg green-600-brand text-white hover:opacity-80 transition-opacity">
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to <span className="text-green-600">start trading?</span></h2>
          <p className="text-white/50 mb-8">Join 2 million traders and access every market from one account.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl green-600-brand text-white font-semibold glow hover:opacity-90 transition-opacity">
            Open Account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
          <CTA />
    </div>
  );
}
