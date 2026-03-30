"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const SocialSVGs = {
  twitter: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  ),
  facebook: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  ),
  instagram: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  linkedin: (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-brand-600 to-transparent opacity-40" />

      {/* Main grid */}
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 lg:grid-cols-4 lg:px-8 lg:py-18">

        {/* Brand column */}
        <div className="space-y-5 lg:col-span-1">
          <Link href="/" className="group inline-block">
            <Image
              src="/crystaline_logo-02.png"
              alt="Crystaline"
              width={200}
              height={48}
              className="h-12 w-auto rounded-lg transition-all duration-300 group-hover:scale-105"
              priority
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate-500">
            {siteConfig.description}
          </p>
          {/* Social icons */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {Object.entries(siteConfig.social).map(
              ([platform, url]) =>
                platform !== "email" && (
                  <Link
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-200 hover:scale-105 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 hover:shadow-md hover:shadow-brand-600/15"
                    aria-label={`Follow on ${platform}`}
                  >
                    {SocialSVGs[platform as keyof typeof SocialSVGs]}
                  </Link>
                )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Quick Links
          </p>
          <ul className="space-y-3">
            {[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/products", label: "Our Products" },
              { href: "/blog", label: "Insights & News" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2.5 text-sm text-slate-500 transition-all duration-200 hover:text-brand-700"
                >
                  <span className="h-px w-3 flex-shrink-0 bg-slate-300 transition-all duration-300 group-hover:w-5 group-hover:bg-brand-500" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Industries
          </p>
          <ul className="space-y-3">
            {[
              { href: "/industries/supermarkets", label: "Supermarkets" },
              { href: "/industries/bars", label: "Bars & Clubs" },
              { href: "/industries/restaurants", label: "Restaurants" },
              { href: "/industries/retail", label: "Retail Stores" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2.5 text-sm text-slate-500 transition-all duration-200 hover:text-brand-700"
                >
                  <span className="h-px w-3 flex-shrink-0 bg-slate-300 transition-all duration-300 group-hover:w-5 group-hover:bg-brand-500" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-700">
            Get in Touch
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 border border-brand-100">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-sm leading-snug text-slate-500">
                {siteConfig.contact.addressLine}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 border border-brand-100">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="text-sm text-slate-500 transition-colors hover:text-brand-700"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 border border-brand-100">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-slate-500 transition-colors hover:text-brand-700"
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-600">{siteConfig.name}</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 font-medium text-slate-500">
            <Link href="/privacy" className="transition-colors hover:text-brand-700">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-brand-700">Terms</Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-brand-700">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
