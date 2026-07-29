import Link from "next/link";
import Image from "next/image";
import { PILLARS } from "@/config/navigation";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";

export function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Browse Services by Category</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">From home repairs to professional consulting, find the exact expertise you need in Noida.</p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <StaggerItem key={pillar.href} className="flex flex-col">
              <Link 
                href={pillar.href}
                className="group flex flex-col flex-1 card-base card-hover overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-grow relative bg-white z-10">
                  {/* Category Image */}
                  <div className="mb-6 w-[72px] h-[72px] bg-brand-50 rounded-full flex items-center justify-center p-[14px] group-hover:scale-110 transition-transform duration-500 ease-expo shadow-sm border border-brand/10 mx-auto">
                    {pillar.image && (
                      <Image 
                        src={pillar.image} 
                        alt={pillar.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  
                  <h3 className="font-bold text-lg text-ink group-hover:text-brand text-center transition-colors mb-4 line-clamp-2">
                    {pillar.name}
                  </h3>
                  
                  <div className="mt-auto flex items-center justify-center gap-2 text-sm text-brand-deep font-semibold">
                    <span className="capitalize">{pillar.href.replace('/', '').replace(/-/g, ' ')}</span>
                    <span className="group-hover:translate-x-1 transition-transform ease-expo">→</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
