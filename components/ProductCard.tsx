import Link from "next/link";

type ProductCardProps = {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  href: string;
  highlights: string[];
};

export function ProductCard({
  title,
  subtitle,
  description,
  price,
  href,
  highlights,
}: ProductCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{subtitle}</p>
        <p className="text-sm text-slate-600">{description}</p>
        <p className="text-base font-semibold text-slate-900">
          {price && `Starting from ${price?.toFixed(2)} / month`}
        </p>
      </div>

      {highlights && highlights.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
      >
        View details
      </Link>
    </div>
  );
}
