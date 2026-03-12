import Link from "next/link";
import { siteConfig } from "@/lib/site";

const SocialSVGs = {
  twitter: (
    <svg className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-brand-600 group-hover:shadow-brand-glow" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  ),
  facebook: (
    <svg className="h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:text-brand-600" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  ),
  // Add Instagram, LinkedIn SVGs similarly
  instagram: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.017 1.8h-1.034c-3.363 0-6.1 2.738-6.1 6.1v1.034c0 3.363 2.737 6.1 6.1 6.1h1.034c3.363 0 6.1-2.737 6.1-6.1v-1.034c0-3.363-2.737-6.1-6.1-6.1zM8.954 8.954c0 .88.713 1.593 1.593 1.593.88 0 1.593-.713 1.593-1.593 0-.88-.713-1.593-1.593-1.593-.88 0-1.593.713-1.593 1.593zm7.993 9.092c-1.915 1.915-4.581 3.092-7.947 3.092s-6.032-1.177-7.947-3.092c-1.915-1.915-3.092-4.581-3.092-7.947s1.177-6.032 3.092-7.947c1.915-1.915 4.581-3.092 7.947-3.092s6.032 1.177 7.947 3.092c1.915 1.915 3.092 4.581 3.092 7.947s-1.177 6.032-3.092 7.947z" clipRule="evenodd" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="border-t border-gradient-to-r from-slate-200 via-brand-200/30 to-slate-200 bg-linear-to-b backdrop-blur-md shadow-inner" id="contact">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-8 lg:gap-16 lg:py-24">
        <div className="space-y-6 lg:col-span-1">
          <h3 className="pro-hero-heading text-2xl font-black bg-linear-to-r from-slate-900 to-brand-800 bg-clip-text">
            {siteConfig.shortName}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">{siteConfig.description}</p>
          <div className="space-y-3">
            <p className="font-bold text-slate-900 text-lg">Get in touch</p>
            <div className="space-y-2">
              <Link href={`tel:${siteConfig.contact.phone}`} className="block btn-secondary text-left p-3 rounded-xl font-semibold">
                {siteConfig.contact.phone}
              </Link>
              <Link href={`mailto:${siteConfig.contact.email}`} className="block btn-secondary text-left p-3 rounded-xl font-semibold">
                {siteConfig.contact.email}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-6 text-sm font-bold uppercase tracking-wide text-slate-600">Company</p>
          <ul className="space-y-3">
            <li><Link href="/about" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">About</Link></li>
            <li><Link href="/features" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Platform</Link></li>
            <li><Link href="/products" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Products</Link></li>
            <li><Link href="/blogs" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Blog</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-6 text-sm font-bold uppercase tracking-wide text-slate-600">Industries</p>
          <ul className="space-y-3">
            <li><Link href="/industries/supermarkets" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Supermarkets</Link></li>
            <li><Link href="/industries/bars" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Bars & Clubs</Link></li>
            <li><Link href="/industries/restaurants" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Restaurants</Link></li>
            <li><Link href="/industries/retail" className="block hover:text-brand-700 font-medium transition-colors hover:underline underline-offset-2">Retail Stores</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-8 text-sm font-bold uppercase tracking-wide text-slate-600">Follow Us</p>
          <div className="flex flex-wrap gap-4">
            {Object.entries(siteConfig.social).map(([platform, url]) => (
              platform !== 'email' && (
                <Link
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-brand-300 hover:bg-brand-50/50 transition-all duration-300 text-slate-600"
                  aria-label={`Follow on ${platform}`}
                >
                  {SocialSVGs[platform as keyof typeof SocialSVGs] || (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100/50 bg-linear-to-r from-slate-50 via-white to-slate-50">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; {new Date().getFullYear()} Crystaline. All rights reserved. | Built with ❤️ for African business.</p>
          <div className="flex flex-wrap gap-6 font-semibold text-slate-700">
            <Link href="/privacy" className="hover:text-brand-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-700 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-brand-700 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

