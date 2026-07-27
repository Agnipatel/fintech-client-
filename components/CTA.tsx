"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl green-600-brand p-12 text-center glow">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
                Start trading in minutes.
                <br />
                No hidden fees, ever.
              </h2>
              <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
                Open your free account today and get access to all our premium features with a
                $10,000 practice account.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00a63f] text-white font-bold text-lg hover:bg-[#009337] transition-all hover:scale-105"
                >
                  Grow Organic Visibility
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>
              <p className="text-white/50 text-xs mt-6">
                No credit card required &middot; Free demo account &middot; Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-8 bg-gray-900 border border-white/10 rounded-2xl shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-2 rounded-lg bg-[#00a63f] text-white font-bold hover:bg-[#009337] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
