import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-indigo-50 via-white to-slate-50 px-6 py-16 shadow-sm sm:px-10 lg:flex lg:items-center lg:gap-12">
      <div className="max-w-2xl space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Trusted ERP & POS in Kenya
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Run every store, team, and channel from one Crystal ERP control
            panel.
          </h1>
          <p className="text-lg text-slate-600">
            Automate point of sale, inventory, finance, HR, and reporting with a
            cloud suite built for ambitious African operators. Launch faster,
            react in real time, and delight customers on every screen.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-700"
          >
            Explore products
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            See full feature map
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 text-xs font-medium uppercase tracking-wide text-slate-500">
          <span>Mpesa & Card Ready</span>
          <span>Edge-secured</span>
          <span>ISO 27001 aligned</span>
        </div>
      </div>
      <div className="mt-12 flex flex-1 justify-center lg:mt-0">
        <Image
          src="/hero-operations.svg"
          alt="Crystal ERP dashboard mockups"
          width={540}
          height={420}
          className="max-w-full"
          priority
        />
      </div>
    </section>
  );
}
