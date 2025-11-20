type Stat = {
  label: string;
  value: string;
};

type StatGridProps = {
  stats: Stat[];
};

export function StatGrid({ stats }: StatGridProps) {
  return (
    <div className="grid gap-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-1">
          <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
          <p className="text-sm uppercase tracking-wide text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
