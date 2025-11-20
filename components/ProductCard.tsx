import Link from "next/link";

type ProductCardProps = {
  id?: string;
  name: string;
  description: string;
  price: string;
  href: string;
  highlights: string[];
};

export function ProductCard({
  id,
  name,
  description,
  price,
  href,
  highlights,
}: ProductCardProps) {
  return (
    <article
      id={id}
      className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5"
    >
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <p className="text-sm text-slate-600">{description}</p>
        <p className="text-base font-semibold text-slate-900">{price}</p>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span aria-hidden>✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
      >
        View details
      </Link>
    </article>
  );
}
