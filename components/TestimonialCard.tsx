type TestimonialCardProps = {
  quote: string;
  author: string;
  link?: string;
};

export function TestimonialCard({ quote, author, link }: TestimonialCardProps) {
  return (
    <figure className="h-full rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 text-slate-600 shadow-sm shadow-slate-900/5 transition-transform hover:-translate-y-1 hover:shadow-md">
      <svg className="mb-3 h-6 w-6 text-brand-200" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-sm font-medium leading-relaxed italic text-slate-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-2 text-xs font-bold text-brand-700">
        &mdash; {author}
      </figcaption>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-xs text-brand-500 underline hover:text-brand-700"
        >
          View {author}&apos;s profile
        </a>
      )}
    </figure>
  );
}
