"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Gift, Share2, Copy, IndianRupee, Users } from "lucide-react";
import { useState } from "react";

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "RAHUL500";

  const handleCopy = () => {
    navigator.clipboard.writeText(`Use my code ${referralCode} to get ₹500 off on MOYO!`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="bg-page min-h-screen pb-24">
        {/* Hero Section */}
        <div className="bg-brand-deep text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand/50">
            <Gift className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Give ₹500, Get ₹500</h1>
          <p className="text-lg md:text-xl text-brand-100 max-w-2xl mx-auto mb-8">
            Invite your friends to MOYO. They get ₹500 off their first booking, and you get ₹500 in your MOYO Wallet when their service is completed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="card-base p-8 text-center shadow-xl mb-12">
            <h2 className="text-sm font-bold text-muted uppercase tracking-widest mb-4">Your Referral Code</h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl px-8 py-4 font-mono text-3xl font-black text-ink tracking-widest">
                {referralCode}
              </div>
              <button 
                onClick={handleCopy}
                className="w-16 h-16 bg-brand-50 text-brand rounded-xl flex flex-col items-center justify-center hover:bg-brand hover:text-white transition-colors"
              >
                {copied ? <CheckIcon className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                <span className="text-[10px] font-bold mt-1 uppercase">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            
            <button className="w-full btn-primary h-[56px] text-lg flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" /> Share via WhatsApp
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="card-base p-6 text-center border-none bg-green-50">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-black text-green-700">3</div>
              <div className="text-sm font-medium text-green-800">Friends Joined</div>
            </div>
            <div className="card-base p-6 text-center border-none bg-brand-50">
              <IndianRupee className="w-8 h-8 text-brand mx-auto mb-2" />
              <div className="text-3xl font-black text-brand-deep">₹1,500</div>
              <div className="text-sm font-medium text-brand-deep">Total Earned</div>
            </div>
          </div>

          {/* How it works */}
          <h3 className="text-xl font-bold text-ink mb-6 text-center">How it works</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center shrink-0">1</div>
              <div>
                <h4 className="font-bold text-ink text-lg">Share your code</h4>
                <p className="text-muted">Send your unique code to friends and family in Noida.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center shrink-0">2</div>
              <div>
                <h4 className="font-bold text-ink text-lg">They book a service</h4>
                <p className="text-muted">Your friend uses the code at checkout and instantly saves ₹500.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-brand text-white font-bold flex items-center justify-center shrink-0">3</div>
              <div>
                <h4 className="font-bold text-ink text-lg">You get rewarded</h4>
                <p className="text-muted">Once their service is completed, ₹500 is added to your MOYO Wallet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
