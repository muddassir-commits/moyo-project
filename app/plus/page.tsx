"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, Star, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function MoyoPlusPage() {
  return (
    <>
      <Header />
      <main className="bg-page min-h-screen">
        
        {/* Hero Section */}
        <div className="bg-ink text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-brand-300 font-semibold text-sm tracking-wide mb-8 backdrop-blur-md">
              <Star className="w-4 h-4" /> INTRODUCING MOYO PLUS
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
              Unlock Premium Service.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-300">Save on Every Booking.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join the exclusive club of smart homeowners in Noida. Get zero platform fees, priority matching, and unconditional damage protection.
            </p>
          </div>
        </div>

        {/* Pricing & Features */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Features List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-base p-8 flex gap-6 hover:border-brand-300 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-brand" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-2">Zero Platform Fees</h3>
                  <p className="text-muted text-lg">Never pay the standard ₹49 convenience fee on any booking. Whether it's a maid or a plumber, you only pay the bid amount.</p>
                </div>
              </div>

              <div className="card-base p-8 flex gap-6 hover:border-brand-300 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-2">Priority Top-Tier Pros</h3>
                  <p className="text-muted text-lg">Your broadcasted requests are shown first to our Top 10% highest-rated professionals in Noida, ensuring premium quality.</p>
                </div>
              </div>

              <div className="card-base p-8 flex gap-6 hover:border-brand-300 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink mb-2">₹10,000 Damage Protection</h3>
                  <p className="text-muted text-lg">Complete peace of mind. If any property damage occurs during a service, MOYO Plus members are automatically insured up to ₹10,000.</p>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-1">
              <div className="card-base p-8 border-2 border-brand relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 bg-brand text-white text-xs font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>
                
                <h3 className="text-2xl font-bold text-ink mb-2">6 Months Plan</h3>
                <p className="text-muted mb-6">Perfect for regular home maintenance</p>
                
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-ink">₹299</span>
                  <span className="text-muted line-through text-lg">₹599</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand" />
                    <span className="text-ink font-medium">Pays for itself in 6 bookings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand" />
                    <span className="text-ink font-medium">Valid across all categories</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand" />
                    <span className="text-ink font-medium">Cancel anytime</span>
                  </li>
                </ul>
                
                <button className="w-full btn-primary h-[56px] text-lg flex items-center justify-center gap-2 group">
                  Join MOYO Plus <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-muted mt-4 font-medium">Secured via Razorpay</p>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
