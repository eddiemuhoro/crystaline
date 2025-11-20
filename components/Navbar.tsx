import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 lg:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
          aria-label="Crystal ERP home"
        >
          Crystal ERP
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://wa.me/254725473779?text=I'm%20inquiring%20about%20Crystal ERP"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 md:inline-flex"
        >
          Talk to sales
        </Link>
        <details className="w-full md:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
            Menu
            <span aria-hidden>▾</span>
          </summary>
          <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/254725473779?text=I'm%20inquiring%20about%20Crystal ERP"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Talk to sales
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
