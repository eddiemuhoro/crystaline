import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50" id="contact">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 text-sm text-slate-600 lg:grid-cols-4 lg:px-6">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-slate-900">
            {siteConfig.shortName}
          </p>
          <p className="text-sm leading-relaxed">{siteConfig.description}</p>
          <div className="space-y-1 text-sm">
            <p className="font-semibold text-slate-900">Reach us</p>
            <p>{siteConfig.contact.addressLine}</p>
            <a
              className="block hover:text-slate-900"
              href={`tel:${siteConfig.contact.phone}`}
            >
              {siteConfig.contact.phone}
            </a>
            <a
              className="block hover:text-slate-900"
              href={`mailto:${siteConfig.contact.email}`}
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Company
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-slate-900">
                Platform
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-slate-900">
                Products
              </Link>
            </li>
            <li>
              <a
                href="https://Crystaline.co.ke/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Solutions
          </p>
          <ul className="space-y-2">
            <li>Retail & Hospitality</li>
            <li>Wholesale & Distribution</li>
            <li>Professional Services</li>
            <li>Partner Program</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Social
          </p>
          <div className="flex flex-wrap gap-3 text-slate-900">
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold"
            >
              Twitter
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/60 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <p>© {new Date().getFullYear()} Crystaline. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 font-medium">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-900">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
