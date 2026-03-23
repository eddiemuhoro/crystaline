"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
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
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      (mobileMenuRef.current as HTMLDetailsElement).open = false;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/50 bg-white/95 backdrop-blur-xl shadow-md shadow-slate-100/50">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 lg:px-6">
        <Link href="/" aria-label="Crystaline home" className="group">
          <Image
            src="/crystaline_logo-02.png"
            alt="Crystaline"
            width={200}
            height={40}
            className="transition-all duration-300 group-hover:scale-105 hover:shadow-md rounded-lg"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-base font-semibold text-slate-700 md:flex lg:gap-10">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-all duration-300 hover:text-brand-700 hover:underline hover:underline-offset-4 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-brand-600 after:to-brand-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1.5 text-base font-semibold text-slate-700 transition-all duration-300 hover:text-brand-700">
              Industries
              <span
                aria-hidden
                className="text-sm transition-transform duration-300 group-hover:rotate-180"
              >
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full z-10 mt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="card-hover rounded-2xl border border-slate-100/50 bg-white/95 p-4 shadow-2xl shadow-slate-200/50 backdrop-blur-md w-64">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-brand-50/80 hover:text-brand-700 hover:shadow-brand-glow"
                    onClick={closeMobileMenu}
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
              className="relative transition-all duration-300 hover:text-brand-700 hover:underline hover:underline-offset-4 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-brand-600 after:to-brand-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="https://wa.me/254725473779?text=I'm%20interested%20in%20Crystaline%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden btn-primary rounded-2xl px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-2xl md:inline-flex  lg:text-base bg-gradient-to-r from-brand-700 to-brand-600"
        >
          Talk to Sales
        </Link>

        <details className="md:hidden" ref={mobileMenuRef}>
          <summary className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border-2 border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-brand-300 hover:bg-brand-50/50 hover:shadow-md hover:shadow-brand-200/30 active:scale-95">
            <svg
              className="h-6 w-6"
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
          <div className="absolute left-0 right-0 top-full mt-1 border-t border-slate-100/50 bg-white/95 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-md flex-col px-4 py-6">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="group rounded-xl px-5 py-4 text-lg font-semibold text-slate-800 transition-all hover:bg-brand-50 hover:text-brand-700 hover:shadow-md"
                >
                  {link.label}
                </Link>
              ))}

              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-xl px-5 py-4 text-lg font-semibold text-slate-800 transition-all hover:bg-brand-50 hover:text-brand-700 group-hover:shadow-md">
                  <span>Industries</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
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
                <div className="ml-6 mt-2 border-l-2 border-brand-200 pl-4">
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-slate-700 transition-all hover:bg-brand-100 hover:text-brand-700 hover:shadow-sm"
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
                  className="group rounded-xl px-5 py-4 text-lg font-semibold text-slate-800 transition-all hover:bg-brand-50 hover:text-brand-700 hover:shadow-md"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-6 border-t border-slate-100 pt-6">
                <Link
                  href="https://wa.me/254725473779?text=I'm%20interested%20in%20Crystaline%20ERP"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="btn-primary flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-bold text-white shadow-xl hover:shadow-2xl hover:shadow-brand-glow transition-all duration-300 bg-gradient-to-r from-brand-700 to-brand-600"
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35m-5.42 7.4h-.004a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98.998-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.36-9.88 9.89-9.88c2.64 0 5.12 1.03 6.99 2.89a9.825 9.825 2.89 6.99c-.003 5.45-4.37 9.88-9.89 9.88m8.41-18.3A11.81 9.88 12.05 0C5.49 0 .16 5.35 .16 11.89c0 2.09 .55 4.42 1.59 5.95L.06 24l6.31-1.65a11.88 2.89 6.99h.005c6.55 0 11.89-5.35 11.89-11.89a11.81 11.81 0 00-3.48-8.41Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Talk to Sales
                </Link>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
