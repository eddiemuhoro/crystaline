type PageBannerProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function PageBanner({ eyebrow, title, subtitle }: PageBannerProps) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white px-6 py-16 shadow-sm sm:px-10">
      <div className="space-y-4 text-center">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="text-lg text-slate-600">{subtitle}</p>
      </div>
    </section>
  );
}
