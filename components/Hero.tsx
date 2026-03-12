import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-100/50 bg-linear-to-br from-brand-50/30 via-white to-slate-50/50 px-6 py-20 shadow-2xl shadow-slate-200/50 backdrop-blur-md lg:px-10 lg:py-28 lg:flex lg:items-center lg:gap-16 before:absolute before:inset-0 before:bg-linear-to-b before:from-brand-900/5 before:to-transparent">
      <div className="relative z-10 max-w-3xl space-y-8 lg:max-w-2xl lg:space-y-10">
        <p className="inline-flex items-center gap-2 rounded-2xl border-2 border-brand-200/60 bg-white/80 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-800 shadow-md backdrop-blur-sm hover:shadow-lg hover:shadow-brand-400/20 transition-all duration-300">
          <svg className="h-3.5 w-3.5 text-brand-700" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5-.518 1.523h-2.997V10H9.764v.952H6.764L6.246 9H5.5l.518 1.523H3.748L3.09 12H6.03l.522-1.523h2.899l.522 1.523h2.963L15.97 9h-2z" clipRule="evenodd" />
          </svg>
          Trusted ERP & POS in Kenya
        </p>
        <div className="space-y-6">
          <h1 className="text-4xl font-black leading-none tracking-tight text-slate-900 bg-linear-to-r from-slate-900 via-brand-800 to-slate-900 bg-clip-text drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
            Run every store, team,<br className="hidden md:inline" />
            <span className="bg-linear-to-r from-brand-700 via-brand-600 to-brand-800 bg-clip-text text-transparent drop-shadow-2xl">channel </span>
            from one control panel.
          </h1>
          <p className="text-xl text-slate-600/90 leading-relaxed max-w-lg backdrop-blur-sm">
            Automate POS, inventory, finance, HR, and reporting with a cloud suite built for African operators. Launch fast, react real-time, delight on every screen.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-2xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-slate-900/30 transition-all duration-300 hover:from-slate-800 hover:to-slate-900 hover:shadow-3xl hover:shadow-slate-900/50 hover:scale-105 hover:translate-y-0.5 active:scale-[0.98] ring-4 ring-slate-200/50 backdrop-blur-md border border-slate-900/20"
          >
            <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Explore Products
          </Link>
          <Link
            href="/features"
            className="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200/60 px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-300 hover:border-brand-600 hover:bg-brand-50/80 hover:shadow-xl hover:shadow-brand-300/30 hover:scale-[1.02] active:scale-95 backdrop-blur-sm hover:ring-4 ring-brand-400/30"
          >
            See Full Features
            <svg className="h-5 w-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-slate-500/80 divide-x divide-slate-300/50">
          <span className="inline-flex items-center gap-2 pr-6 border-r pl-0">M-Pesa Ready</span>
          <span className="inline-flex items-center gap-2 pr-6 border-r">Edge Secured</span>
          <span className="inline-flex items-center gap-2">ISO 27001 Aligned</span>
        </div>
      </div>
      <div className="mt-16 flex flex-1 justify-center lg:mt-0 lg:pl-8 xl:pl-12">
        <div className="relative max-w-4xl">
          <Image
            src="/hero.png"
            alt="Professional Crystal ERP dashboard and operations showcase"
            width={900}
            height={560}
            className="w-full max-w-5xl rounded-3xl shadow-2xl shadow-slate-200/60 transition-all duration-700 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-2 object-contain sm:object-cover lg:object-contain mx-auto"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRgwGAABXRUJQVlA4WAoAAAAgAAAAAQAAAgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZGVzYwAAAAAAAAAsAAAAZQABAABkAAAcABAAHAAAABQAAAAAQAAAAlAAAAAEAAAAAYWNzcE1TRlQAAAAAAN7cGFzcE1TRlQAAAABAAAGfmludAAAAABEAAAAEAAP/bAAADZGVzYwAAAAAAAAAsAAAAZQABAABkAAAcABAAHAAAABQAAAAAQAAAAlAAAAAEAAAAAYWNzcE1TRlQAAAAAAN7cGFzcE1TRlQAAAABAAAGfmludAAAAABEAAAAEAAP/bAAADZGVzYwAAAAAAAAAsAAAAZQABAABkAAAcABAAHAAAABQAAAAAQAAAAlAAAAAEAAAAAYWNzcE1TRlQAAAAAAN7cGFzcE1TRlQAAAABAAAGfmludAAAAABEAAAAEAAP//AA=="
          />
          <div className="absolute -inset-2 bg-linear-to-r from-brand-500/10 via-transparent to-brand-600/10 rounded-3xl blur-xl opacity-75 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

