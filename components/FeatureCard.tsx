type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const iconMap: Record<string, string> = {
  inventory: "📦",
  finance: "💰",
  people: "🧑‍💼",
  reporting: "📊",
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-md">
      <span className="text-3xl" aria-hidden>
        {iconMap[icon] ?? "✨"}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
    </article>
  );
}
