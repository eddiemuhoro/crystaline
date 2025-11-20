import Link from "next/link";

export function CallToAction() {
  return (
    <section className="rounded-3xl bg-slate-900 px-6 py-14 text-white sm:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Always-on support
          </p>
          <h3 className="text-3xl font-semibold leading-tight">
            Ready to modernize your ERP and POS in less than a week?
          </h3>
          <p className="text-sm text-slate-200">
            Our Nairobi success engineers migrate your data, train your team,
            and keep Crystal ERP running 24/7.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="https://wa.me/254725473779?text=I'm%20inquiring%20about%20Crystal ERP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
          >
            Book a demo
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Download brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
