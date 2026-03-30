import { Check } from "lucide-react";

type PackageCardProps = {
  name: string;
  price: number | string;
  pricePrefix?: string;
  priceSuffix?: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
};

export function PackageCard({
  name,
  price,
  pricePrefix,
  priceSuffix,
  features,
  isPopular,
  buttonText = "Get Started",
}: PackageCardProps) {
  // WhatsApp Order Link
  const whatsappUrl = `https://wa.me/254725473779?text=${encodeURIComponent(
    `Hello, i'd love to enquire on ${name} package`
  )}`;

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
        isPopular
          ? "border-brand-200/50 bg-linear-to-br from-brand-50/70 bg-emerald-50/50 shadow-emerald-200/40 ring-1 ring-brand-200/50"
          : "border-slate-200/50 bg-white/80 shadow-slate-200/60 hover:shadow-slate-300/80 ring-1 ring-slate-200/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-linear-to-r from-emerald-500 to-emerald-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-6 space-y-4">
        <h3 className="text-base font-bold text-slate-900">{name}</h3>
        <div className="flex items-baseline text-slate-900 flex-wrap">
          {pricePrefix && <span className="mr-1 sm:mr-4 text-xs font-medium text-slate-500">{pricePrefix}</span>}
          <span className="text-2xl font-extrabold tracking-tight">Ksh {typeof price === 'number' ? price.toLocaleString() : price}</span>
          {priceSuffix && <span className="ml-1 text-xs font-medium text-slate-500">{priceSuffix}</span>}
        </div>
      </div>

      <div className="mb-8 flex-1 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-900">
          What&apos;s included
        </p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-xs text-slate-600">{feature}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

        <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex w-full items-center justify-center rounded-2xl px-4 py-1.5 text-xs font-bold shadow-lg transition-all duration-200 active:scale-[0.97] ${
          isPopular
            ? "bg-linear-to-r from-emerald-600 to-emerald-700 text-white shadow-brand-500/30 hover:from-brand-700 hover:to-brand-800 hover:shadow-brand-500/50 hover:shadow-xl"
            : "bg-linear-to-r from-emerald-50 to-emerald-100 text-slate-900 shadow-slate-200/50 hover:from-slate-100 hover:to-slate-200 hover:shadow-slate-300/60 hover:shadow-lg"
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
}
