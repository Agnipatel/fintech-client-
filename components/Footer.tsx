// import Link from "next/link";
// //import { TrendingUp, Twitter, Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

// const footerLinks = {
//   Platform: [
//     { label: "Trading Platform", href: "/platform" },
//     { label: "Mobile App", href: "/mobile" },
//     { label: "Features", href: "/features" },
//     { label: "Security", href: "/security" },
//   ],
//   Markets: [
//     { label: "Stocks", href: "/markets" },
//     { label: "Forex", href: "/markets" },
//     { label: "Crypto", href: "/markets" },
//     { label: "ETFs", href: "/markets" },
//     { label: "Commodities", href: "/markets" },
//   ],
//   Accounts: [
//     { label: "Account Types", href: "/account-types" },
//     { label: "Pricing & Fees", href: "/pricing" },
//     { label: "Deposits & Withdrawals", href: "/deposits" },
//     { label: "Affiliate Program", href: "/affiliate" },
//   ],
//   Support: [
//     { label: "Education", href: "/education" },
//     { label: "News & Analysis", href: "/news" },
//     { label: "FAQ", href: "/faq" },
//     { label: "Contact Us", href: "/contact" },
//     { label: "About Us", href: "/about" },
//   ],
// };

// // const socials = [
// //   { icon: Twitter, href: "#", label: "Twitter" },
// //   { icon: Linkedin, href: "#", label: "LinkedIn" },
// //   { icon: Youtube, href: "#", label: "YouTube" },
// //   { icon: Facebook, href: "#", label: "Facebook" },
// //   { icon: Instagram, href: "#", label: "Instagram" },
// // ];

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/8 bg-background">
//       {/* Top section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-2">
//             <Link href="/" className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
//                 <TrendingUp className="w-4 h-4 text-white" />
//               </div>
//               <span className="font-bold text-lg text-white">
//                 Trade<span className="text-gradient">Vault</span> Pro
//               </span>
//             </Link>
//             <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
//               A next-generation fintech broker empowering millions of traders worldwide with
//               institutional-grade tools and zero commission trading.
//             </p>
//             <div className="flex items-center gap-3">
//               {socials.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors"
//                 >
//                   <Icon className="w-3.5 h-3.5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {Object.entries(footerLinks).map(([section, links]) => (
//             <div key={section}>
//               <h4 className="text-sm font-semibold text-white mb-4">{section}</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       href={link.href}
//                       className="text-sm text-white/50 hover:text-white transition-colors"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-xs text-white/30">
//             © 2026 TradeVault Pro. All rights reserved. Regulated by FCA & SEC.
//           </p>
//           <div className="flex flex-wrap items-center gap-6">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy", "Risk Disclosure"].map((t) => (
//               <Link key={t} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
//                 {t}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Risk disclaimer */}
//       <div className="border-t border-white/5">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <p className="text-xs text-white/20 leading-relaxed">
//             Risk Warning: Trading financial instruments involves significant risk and is not
//             suitable for all investors. You should carefully consider your investment objectives,
//             level of experience, and risk appetite before investing. Past performance is not
//             indicative of future results. Capital at risk.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
