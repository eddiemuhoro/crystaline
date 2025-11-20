type TestimonialCardProps = {
  quote: string;
  author: string;
};

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <figure className="h-full rounded-2xl border border-slate-100 bg-white p-6 text-slate-600 shadow-sm shadow-slate-900/5">
      <blockquote className="text-base italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-slate-900">
        {author}
      </figcaption>
    </figure>
  );
}
