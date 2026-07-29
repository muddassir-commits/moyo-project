import { Download, Search, CalendarClock, UserCheck, Star } from "lucide-react";

const STEPS = [
  { icon: <Download className="w-8 h-8" />, title: "Download", desc: "Get the Moyo app and create your account in seconds." },
  { icon: <Search className="w-8 h-8" />, title: "Choose", desc: "Select the service you need from our 170+ categories." },
  { icon: <CalendarClock className="w-8 h-8" />, title: "Set Price", desc: "Professionals bid for your job. You pick the best price." },
  { icon: <UserCheck className="w-8 h-8" />, title: "Get Matched", desc: "A verified expert arrives at your doorstep." },
  { icon: <Star className="w-8 h-8" />, title: "Rate", desc: "Review your experience and keep our community trusted." },
];

export function StepsHowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">How MOYO Works</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">Your journey to getting things done seamlessly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-brand-200 z-0" />
          
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#FFF7ED] flex items-center justify-center mb-6 shadow-cardHover text-brand transform hover:scale-110 transition-transform duration-300 ease-expo">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
