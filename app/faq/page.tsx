import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ChevronDown, ArrowRight, Search, MessageCircle } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about TradeVault Pro — accounts, trading, deposits, security, and more. Get instant answers.",
};

const categories = [
  {
    name: "Getting Started",
    icon: "🚀",
    questions: [
      {
        q: "How do I open a TradeVault Pro account?",
        a: "Opening an account takes less than 5 minutes. Click 'Open Account', provide your email and personal details, verify your identity with a government ID, and fund your account. You can start trading immediately with a free demo account while your real account is being set up.",
      },
      {
        q: "What documents do I need to verify my account?",
        a: "You'll need a valid government-issued photo ID (passport, national ID, or driving licence) and a proof of address document dated within the last 3 months (utility bill, bank statement, etc.). Most verifications are approved within 1 business day.",
      },
      {
        q: "Can I open a joint account?",
        a: "Currently, we only support individual accounts. Corporate accounts are available for businesses and can be opened by contacting our institutional team.",
      },
      {
        q: "What is the minimum deposit?",
        a: "The minimum deposit depends on your account type: Standard requires $100, Pro Trader requires $1,000, and Elite requires $10,000. There is no minimum for our free demo account.",
      },
    ],
  },
  {
    name: "Trading",
    icon: "📈",
    questions: [
      {
        q: "What assets can I trade?",
        a: "You can trade 15,000+ instruments including US, European, and Asian stocks, forex (80+ pairs), cryptocurrencies (250+), ETFs (3,500+), indices, and commodities. All from a single account.",
      },
      {
        q: "What is the maximum leverage available?",
        a: "Maximum leverage varies by account type and asset: Standard accounts offer up to 1:100 for forex, Pro accounts up to 1:200, and Elite accounts up to 1:400. Regulated leverage limits apply based on your jurisdiction.",
      },
      {
        q: "Do you charge overnight swap fees?",
        a: "Yes, overnight swap (rollover) fees apply to leveraged positions held beyond market close. Islamic accounts are swap-free but may have an administration fee instead. You can view swap rates in the platform for each instrument.",
      },
      {
        q: "Can I set stop loss and take profit orders?",
        a: "Absolutely. We support Stop Loss, Take Profit, Trailing Stop, OCO (One Cancels Other), Bracket Orders, and more. All order types are available on all account tiers.",
      },
      {
        q: "What are your trading hours?",
        a: "Stock markets follow their respective exchange hours. Forex is 24/5 (Sunday 5 PM – Friday 5 PM EST). Crypto and most indices trade 24/7. Check the platform for specific instrument hours.",
      },
    ],
  },
  {
    name: "Deposits & Withdrawals",
    icon: "💰",
    questions: [
      {
        q: "Are deposits free?",
        a: "Yes, deposits are completely free from our side. Your payment provider may charge fees depending on your method. We absorb all our processing costs.",
      },
      {
        q: "How long do withdrawals take?",
        a: "Withdrawal processing times: Bank wire 1-5 business days, credit/debit card 3-5 business days, PayPal/Skrill/Neteller within 24 hours, crypto 1-2 hours. We process all withdrawal requests within 24 hours on our end.",
      },
      {
        q: "Is there a minimum withdrawal amount?",
        a: "Yes, the minimum withdrawal is $10 for most methods and $50 for bank wire transfers.",
      },
      {
        q: "What currencies can I deposit in?",
        a: "We accept deposits in 30+ currencies including USD, EUR, GBP, AUD, CAD, JPY, CHF, and many more. USDT, BTC, and ETH are also accepted for crypto deposits.",
      },
    ],
  },
  {
    name: "Security",
    icon: "🔒",
    questions: [
      {
        q: "Are my funds safe?",
        a: "Yes. Client funds are held in segregated accounts at Tier 1 banks, completely separate from company funds. Cash is FDIC-insured up to $500,000. 95% of crypto assets are stored in cold wallets.",
      },
      {
        q: "Is my personal data secure?",
        a: "We use 256-bit AES encryption for all data at rest and in transit. We are ISO 27001 certified, SOC 2 Type II audited, and fully GDPR compliant. We never sell your data.",
      },
      {
        q: "What is 2FA and how do I enable it?",
        a: "Two-Factor Authentication (2FA) adds an extra security layer to your account. Go to Settings → Security → Two-Factor Authentication and follow the setup steps. We support Google Authenticator, Authy, and hardware security keys.",
      },
      {
        q: "What should I do if I think my account has been compromised?",
        a: "Contact our security team immediately at security@tradevaultpro.com or via live chat. We'll lock your account instantly while we investigate. Never share your password with anyone, including our staff.",
      },
    ],
  },
  {
    name: "Platform & Technology",
    icon: "💻",
    questions: [
      {
        q: "What platforms are available?",
        a: "Web platform (browser-based), desktop apps for Windows and macOS, and mobile apps for iOS and Android. All platforms are feature-complete with full parity. We also offer API access on Pro and Elite plans.",
      },
      {
        q: "How fast is order execution?",
        a: "Our average order execution speed is under 10 milliseconds. We operate 12 global data centers to ensure the fastest possible routing to each exchange.",
      },
      {
        q: "Do you offer algorithmic trading?",
        a: "Yes. Elite plan users can build, backtest, and deploy algorithmic trading strategies using our built-in scripting IDE (Python and JavaScript supported). A full REST and WebSocket API is also available.",
      },
      {
        q: "Can I use custom indicators?",
        a: "Yes. You can import or write your own custom indicators using our scripting language. You can also access our community indicator library with 1,000+ community-created indicators.",
      },
    ],
  },
  {
    name: "Regulations & Compliance",
    icon: "⚖️",
    questions: [
      {
        q: "Is TradeVault Pro regulated?",
        a: "Yes. We are regulated by 7 major global regulators including the FCA (UK), SEC (US), ASIC (Australia), CySEC (EU), MAS (Singapore), DFSA (UAE), and FSCA (South Africa).",
      },
      {
        q: "Which countries are restricted?",
        a: "We cannot accept clients from the following countries due to regulatory restrictions: North Korea, Iran, Cuba, Syria, and certain other sanctioned jurisdictions. Check our full list of restricted countries in our Terms of Service.",
      },
      {
        q: "Are there restrictions for US clients?",
        a: "US clients have access to all stocks, ETFs, and crypto. Forex CFDs are not available to US residents due to CFTC regulations. US clients are SEC-registered and subject to US trading rules.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs text-white/60 mb-6">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            Instant answers
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Got <span className="text-green-600">questions?</span>
            <br />We've got answers.
          </h1>
          <p className="text-white/50 text-xl max-w-xl mx-auto mb-10">
            Everything you need to know about TradeVault Pro, all in one place.
          </p>
          {/* Search */}
          <div className="max-w-lg mx-auto">
            <div className="flex gap-3 glass-card p-2">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
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

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                </div>
                <div className="space-y-3">
                  {category.questions.map((faq) => (
                    <details key={faq.q} className="glass-card group">
                      <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                        <span className="text-white font-medium pr-4">{faq.q}</span>
                        <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-white/8 pt-4">
                        <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-black/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-8">
            <MessageCircle className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-white/50 mb-6">Our support team is available 24/7 to help you with anything you need.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl green-600-brand text-white font-semibold hover:opacity-90 transition-opacity">
                Contact Support <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/70 hover:text-white transition-colors">
                Live Chat
              </Link>
            </div>
          </div>
        </div>
      </section>
          <CTA />
    </div>
  );
}
