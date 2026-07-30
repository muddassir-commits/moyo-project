"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, MessageCircle, MapPin, Navigation, ShieldAlert, KeyRound } from "lucide-react";
import Image from "next/image";
import { use } from "react";

export default function LiveTrackingPage({ params }: { params: Promise<{ id: string }> }) {
  // In a real app, fetch tracking data via Supabase Realtime using params.id
  const resolvedParams = use(params);
  const booking = {
    id: resolvedParams.id,
    service: "AC Repair & Servicing",
    status: "on_the_way", // on_the_way, arrived, in_progress, completed
    eta: "14 mins",
    provider: {
      name: "Rahul Sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
      rating: 4.8,
      temperature: "98.4°F",
      vaccinated: true
    },
    startOtp: "4921",
    endOtp: "8302",
    amount: "₹450"
  };

  return (
    <>
      <Header />
      <main className="bg-page min-h-screen">
        
        {/* Mock Map Area */}
        <div className="h-[40vh] w-full bg-[#E5E3DF] relative overflow-hidden">
          {/* A CSS pattern to simulate a map grid */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* Path Line */}
          <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-brand rounded-full transform -translate-y-1/2 opacity-50 border-dashed border-2 border-brand" />
          
          {/* Provider Marker */}
          <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-white rounded-full p-1 shadow-lg relative z-10 animate-bounce">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src={booking.provider.avatar} alt="Pro" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-brand/30 rounded-full animate-ping scale-150" />
          </div>

          {/* Customer Location Marker */}
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-center">
            <div className="w-10 h-10 bg-ink text-white rounded-full flex items-center justify-center shadow-lg mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="bg-white px-2 py-1 rounded text-xs font-bold mt-1 shadow-sm">Home</div>
          </div>
        </div>

        {/* Tracking Details */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-24">
          <div className="card-base p-6 shadow-xl mb-6">
            
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-line">
              <div>
                <h1 className="text-xl font-bold text-ink mb-1">{booking.service}</h1>
                <div className="flex items-center gap-2 text-brand font-semibold">
                  <Navigation className="w-4 h-4 animate-pulse" />
                  Provider is on the way (ETA: {booking.eta})
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted mb-1">Final Amount</div>
                <div className="text-2xl font-black text-ink">{booking.amount}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a href={`/pro/rahul`} className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <img src={booking.provider.avatar} alt={booking.provider.name} className="w-full h-full object-cover" />
                </a>
                <div>
                  <a href={`/pro/rahul`} className="font-bold text-ink text-lg hover:text-brand transition-colors">
                    {booking.provider.name}
                  </a>
                  <div className="flex items-center gap-2 text-sm text-muted mt-1">
                    <span className="font-medium text-amber-600">★ {booking.provider.rating}</span>
                    <span>•</span>
                    <span className="text-green-600 flex items-center gap-1"><ShieldAlert className="w-3.5 h-3.5" /> Background Verified</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 rounded-full bg-brand-50 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition-colors shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors shadow-sm">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-base p-6 bg-brand-deep text-white border-none">
              <div className="flex items-center gap-3 mb-2 opacity-80">
                <KeyRound className="w-5 h-5" />
                <h3 className="font-bold tracking-wide">Start OTP</h3>
              </div>
              <p className="text-sm opacity-80 mb-4">Share this code to start the service.</p>
              <div className="text-4xl font-mono font-black tracking-[0.2em]">{booking.startOtp}</div>
            </div>

            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-2 text-ink">
                <KeyRound className="w-5 h-5" />
                <h3 className="font-bold tracking-wide">End OTP</h3>
              </div>
              <p className="text-sm text-muted mb-4">Share this code when the service is complete.</p>
              <div className="text-4xl font-mono font-black tracking-[0.2em] text-gray-400">{booking.endOtp}</div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
