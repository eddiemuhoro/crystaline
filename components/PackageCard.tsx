import { Check } from "lucide-react";

type PackageCardProps = {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
};

export function PackageCard({
  name,
  price,
  description,
  features,
  isPopular,
  buttonText = "Get Started",
}: PackageCardProps) {
  // WhatsApp Order Link
  const whatsappUrl = `https://wa.me/254725473779?text=${encodeURIComponent(
    `I'm interested in the ${name} package.`
  )}`;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-md ${
        isPopular
          ? "border-brand-200 bg-brand-50/50 shadow-brand-100/50"
          : "border-slate-200 bg-white"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
          Most Popular
        </div>
      )}

      <div className="mb-6 space-y-4">
        <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
        <div className="flex items-baseline text-slate-900">
          <span className="text-3xl font-extrabold tracking-tight">Ksh {price.toLocaleString()}</span>
          <span className="ml-1 text-sm font-medium text-slate-500">/mo</span>
        </div>
        <p className="text-sm font-medium text-brand-600">{description}</p>
      </div>

      <div className="mb-8 flex-1 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-slate-900">
          What&apos;s included
        </p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </div>
                <span className="text-sm text-slate-600">{feature}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-all active:scale-95 ${
          isPopular
            ? "bg-brand-600 text-white shadow-md shadow-brand-500/20 hover:bg-brand-700 hover:shadow-lg"
            : "bg-slate-100 text-slate-900 hover:bg-slate-200"
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
}
