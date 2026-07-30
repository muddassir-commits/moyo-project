"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownRight, History, CreditCard, ShieldCheck } from "lucide-react";

export default function WalletPage() {
  const balance = 2450;
  
  const transactions = [
    { id: 1, type: "debit", amount: 450, title: "AC Repair Payment", date: "Today, 10:30 AM", status: "completed" },
    { id: 2, type: "credit", amount: 1000, title: "Wallet Top-up", date: "Yesterday", status: "completed" },
    { id: 3, type: "credit", amount: 500, title: "Referral Bonus (Rahul)", date: "Jul 25, 2026", status: "completed" },
    { id: 4, type: "debit", amount: 1200, title: "Deep Home Cleaning", date: "Jul 20, 2026", status: "completed" },
  ];

  return (
    <>
      <Header />
      <main className="bg-page min-h-screen pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-ink">MOYO Wallet</h1>
            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-full font-medium">
              <ShieldCheck className="w-4 h-4" />
              100% Secure
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Balance Card */}
            <div className="md:col-span-1">
              <div className="card-base p-8 bg-gradient-to-br from-brand to-brand-deep border-none text-white shadow-xl relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/10 blur-xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 opacity-90">
                    <WalletIcon className="w-6 h-6" />
                    <span className="font-semibold tracking-wide uppercase text-sm">Available Balance</span>
                  </div>
                  <div className="text-5xl font-black mb-2 tracking-tight">₹{balance}</div>
                  <p className="text-sm opacity-80 mb-8">Can be used for any service</p>
                  
                  <button className="w-full bg-white text-brand font-bold py-3.5 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <CreditCard className="w-5 h-5" />
                    Top up Wallet
                  </button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-brand-50 rounded-xl border border-brand-200">
                <h3 className="font-bold text-brand-deep mb-2">Why use MOYO Wallet?</h3>
                <ul className="text-sm text-brand-deep/80 space-y-2">
                  <li className="flex items-center gap-2">✨ Instant 1-click payments</li>
                  <li className="flex items-center gap-2">🚀 Faster bid acceptance</li>
                  <li className="flex items-center gap-2">💰 5% cashback on all bookings</li>
                </ul>
              </div>
            </div>

            {/* Transaction History */}
            <div className="md:col-span-2">
              <div className="card-base p-0 overflow-hidden">
                <div className="p-6 border-b border-line flex items-center gap-3">
                  <History className="w-5 h-5 text-muted" />
                  <h2 className="text-lg font-bold text-ink">Recent Transactions</h2>
                </div>
                
                <div className="divide-y divide-line">
                  {transactions.map(tx => (
                    <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                          tx.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {tx.type === 'credit' ? <ArrowDownRight className="w-6 h-6" /> : <ArrowUpRight className="w-6 h-6" />}
                        </div>
                        <div>
                          <p className="font-bold text-ink text-lg">{tx.title}</p>
                          <p className="text-sm text-muted">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-black text-lg ${tx.type === 'credit' ? 'text-green-600' : 'text-ink'}`}>
                          {tx.type === 'credit' ? '+' : '-'}₹{tx.amount}
                        </p>
                        <p className="text-xs font-bold text-muted uppercase tracking-wider">{tx.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-gray-50 text-center border-t border-line">
                  <button className="text-brand font-semibold text-sm hover:underline">View All Transactions</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
