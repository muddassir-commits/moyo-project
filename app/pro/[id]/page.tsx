import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Star, ShieldCheck, MapPin, CheckCircle, Video, Clock } from "lucide-react";
import Image from "next/image";

export default function ProviderProfilePage({ params }: { params: { id: string } }) {
  // In a real app, fetch provider data from Supabase using params.id
  // For the demo, we will mock the provider data
  const provider = {
    name: "Rahul Sharma",
    profession: "Professional Electrician",
    rating: 4.8,
    reviews: 124,
    location: "Sector 62, Noida",
    memberSince: "Aug 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
    about: "I have over 8 years of experience working with residential and commercial electrical systems. I specialize in inverter setups, AC wiring, and deep home fault finding.",
    verified: {
      aadhaar: true,
      police: true,
      skills: true
    },
    services: ["AC Repair", "Inverter Setup", "House Wiring", "Switchboard Repair"],
    recentReviews: [
      { id: 1, user: "Amit K.", text: "Very professional and arrived exactly on time. Fixed my AC wiring in 20 minutes.", rating: 5, date: "2 days ago" },
      { id: 2, user: "Priya M.", text: "Polite and charged exactly what was agreed upon during the bid.", rating: 5, date: "1 week ago" }
    ]
  };

  return (
    <>
      <Header />
      <main className="bg-page min-h-screen pb-24">
        
        {/* Cover Photo Area */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-brand to-brand-deep relative">
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-24 relative z-10">
          <div className="card-base p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
            
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden bg-white shadow-sm shrink-0">
              <img src={provider.avatar} alt={provider.name} className="w-full h-full object-cover" />
            </div>

            {/* Main Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-ink">{provider.name}</h1>
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xl text-muted font-medium mb-4">{provider.profession}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-ink font-medium">
                <div className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3 py-1 rounded-md">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{provider.rating} ({provider.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted">
                  <MapPin className="w-4 h-4" />
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted">
                  <Clock className="w-4 h-4" />
                  <span>Member since {provider.memberSince}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full md:w-auto">
              <button className="w-full btn-primary h-[48px] px-8">
                Request Service
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column (About & Reviews) */}
            <div className="md:col-span-2 space-y-8">
              <div className="card-base p-8">
                <h2 className="text-xl font-bold text-ink mb-4">About Me</h2>
                <p className="text-muted leading-relaxed text-lg">
                  {provider.about}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {provider.services.map(service => (
                    <span key={service} className="bg-section-alt border border-line text-ink px-3 py-1.5 rounded-full text-sm font-medium">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-base p-8">
                <h2 className="text-xl font-bold text-ink mb-6">Recent Reviews</h2>
                <div className="space-y-6">
                  {provider.recentReviews.map(review => (
                    <div key={review.id} className="border-b border-line last:border-0 pb-6 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-ink">{review.user}</span>
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-xs ml-1 font-bold">{review.rating}</span>
                        </div>
                        <span className="text-xs text-muted ml-auto">{review.date}</span>
                      </div>
                      <p className="text-muted leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Trust & Verification) */}
            <div className="space-y-8">
              <div className="card-base p-6">
                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                  MOYO Verified
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-ink text-sm">Aadhaar Identity</div>
                      <div className="text-xs text-muted">ID matched with government records</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-ink text-sm">Police Verification</div>
                      <div className="text-xs text-muted">Background check cleared</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-ink text-sm">Skill Assessment</div>
                      <div className="text-xs text-muted">Passed MOYO practical test</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-base p-6 text-center">
                <div className="w-12 h-12 bg-brand-50 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-ink mb-2">Video Introduction</h3>
                <p className="text-sm text-muted mb-6">Watch {provider.name.split(' ')[0]} introduce themselves and their work.</p>
                <div className="aspect-[9/16] bg-section-dark rounded-xl relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
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
