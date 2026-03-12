type PageBannerProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function PageBanner({ eyebrow, title, subtitle }: PageBannerProps) {
  return (
    <section className="card-hover rounded-3xl border border-slate-100/50 bg-gradient-to-br from-brand-50/20 via-white/90 to-slate-50/80 px-8 py-20 shadow-xl shadow-slate-200/40 backdrop-blur-md sm:px-12 lg:py-24">
      <div className="space-y-6 text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-2 h-10 bg-gradient-to-b from-brand-600 to-brand-400 rounded-full shadow-sm" />
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700 hover:underline hover:underline-offset-2 transition-all">
              {eyebrow}
            </p>
          ) : null}
          <div className="w-2 h-10 bg-gradient-to-b from-brand-600 to-brand-400 rounded-full shadow-sm" />
        </div>
        <h1 className="pro-hero-heading text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-brand-900 bg-clip-text text-transparent drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-xl lg:text-2xl text-slate-700/90 leading-relaxed font-medium max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

