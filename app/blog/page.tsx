import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export const metadata = generateSeoMetadata({
  title: "MOYO Blog — Home Services Guides & Tips for Noida",
  description: "Guides on home services in Noida — costs, how-tos and tips for maids, cleaning, repairs, beauty & more.",
  path: "/blog",
});

const BLOG_POSTS = [
  {
    title: "How Much Does a Maid Cost in Noida in 2026?",
    slug: "maid-cost-in-noida-2026",
    excerpt: "A complete breakdown of maid salaries in Noida across different sectors, for part-time, full-time, and live-in roles.",
    category: "Domestic Help",
    date: "July 2026",
    imageUrl: "/images/blog-maid-cost.jpg"
  },
  {
    title: "Full-Time vs Part-Time Maid: Which Do You Need?",
    slug: "full-time-vs-part-time-maid",
    excerpt: "Struggling to decide between a live-in maid and a part-time helper? Here's how to choose based on your family's routine and budget.",
    category: "Domestic Help",
    date: "July 2026",
    imageUrl: "/images/blog-maid-type.jpg"
  }
];

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="bg-page min-h-screen pb-24">
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-6">
              MOYO Blog — Home Service Guides for Noida
            </h1>
            <p className="text-xl text-muted max-w-3xl leading-relaxed">
              Expert advice, cost breakdowns, and practical tips on managing your home and finding the best service professionals in Noida.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-12 justify-center max-w-5xl mx-auto">
            <span className="px-5 py-2 rounded-full bg-brand text-white font-medium text-sm shadow-sm cursor-default">All Posts</span>
            <span className="px-5 py-2 rounded-full bg-white border border-line text-ink hover:border-brand hover:text-brand transition-colors font-medium text-sm cursor-pointer shadow-sm">Domestic Help</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[16px] border border-line overflow-hidden shadow-card hover:shadow-cardHover hover:border-brand-200 transition-all duration-300 ease-expo hover:-translate-y-1"
              >
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-gradient-to-br from-brand-50 to-amber-50">
                  {/* Real thumbnail logic: if no real image yet, keep gradient + pill */}
                  {post.imageUrl.includes("blog-") ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-amber/30 flex items-center justify-center border-b border-brand/10 group-hover:scale-105 transition-transform duration-500 ease-expo">
                      <span className="text-brand-deep/70 font-bold text-sm uppercase tracking-widest bg-white/50 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-sm">{post.category} Guide</span>
                    </div>
                  ) : (
                    <Image 
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-expo"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-brand-deep uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-md">{post.category}</span>
                    <span className="text-xs font-medium text-muted flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      4 min read
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted leading-relaxed line-clamp-2 mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-col gap-5 mt-auto">
                    <div className="flex items-center gap-2.5 pt-4 border-t border-line">
                      <div className="w-7 h-7 rounded-full bg-ink text-white flex items-center justify-center text-xs font-bold">M</div>
                      <span className="text-sm font-semibold text-ink">Moyo Team</span>
                      <span className="text-muted text-xs mx-1">•</span>
                      <span className="text-sm text-muted">{post.date}</span>
                    </div>
                    <div className="text-brand font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read article <span className="ml-1.5 text-lg leading-none">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
