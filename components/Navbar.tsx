"use client";

import Link from "next/link";
import { useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/blogs", label: "Blog" },
  { href: "/products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

const industries = [
  { href: "/industries/supermarkets", label: "Supermarkets" },
  { href: "/industries/bars", label: "Bars & Clubs" },
  { href: "/industries/restaurants", label: "Restaurants" },
  { href: "/industries/retail", label: "Retail Stores" },
];

export function Navbar() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

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
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}

          {/* Industries Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 transition hover:text-slate-900">
              Industries
              <span aria-hidden className="text-xs">
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-lg">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block whitespace-nowrap rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {industry.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(2).map((link) => (
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
          className="hidden rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 md:inline-flex"
        >
          Talk to sales
        </Link>

        {/* Mobile Menu */}
        <details className="md:hidden" ref={mobileMenuRef}>
          <summary className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 active:bg-slate-100">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute left-0 right-0 top-full mt-1 border-b border-slate-100 bg-white shadow-lg">
            <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 active:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}

              {/* Industries submenu for mobile */}
              <details className="group/submenu">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 active:bg-slate-100">
                  <span>Industries</span>
                  <svg
                    className="h-4 w-4 transition-transform group-open/submenu:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="ml-4 border-l-2 border-slate-100 pl-3">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-700 active:bg-brand-100"
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </details>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 active:bg-slate-100"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 border-t border-slate-100 pt-3">
                <Link
                  href="https://wa.me/254725473779?text=I'm%20inquiring%20about%20Crystal ERP"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-brand-800 active:bg-brand-900"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Talk to sales
                </Link>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
