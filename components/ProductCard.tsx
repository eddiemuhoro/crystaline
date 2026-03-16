"use client";

import Image from "next/image";
import { useState } from "react";

type ProductCardProps = {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  href: string;
  highlights: string[];
  image?: string;
};

export function ProductCard({
  title,
  subtitle,
  description,
  price,
  image,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // WhatsApp Order Link
  // Replace the phone number or message as needed.
  const whatsappUrl = `https://wa.me/254725473779?text=${encodeURIComponent(
    `I'm interested in the ${title} package.`
  )}`;

  return (
    <>
      <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5">
        <div className="space-y-3 flex-grow">
          {image && (
            <Image
              src={image}
              width={500}
              height={500}
              alt="Product image"
              className="w-full h-48 object-cover rounded-xl"
            />
          )}
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          
          <div className="relative">
            <p className="text-sm text-slate-600 line-clamp-2">{subtitle}</p>
            {/* Minimal fade effect at the bottom of the clamped text */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-95"
          >
            View more
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all hover:shadow-lg hover:shadow-brand-500/30 active:scale-95"
          >
            Order
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 p-2 text-slate-500 backdrop-blur-md transition-all hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col">
              {image && (
                <div className="w-full h-64 sm:h-80 relative">
                  <Image
                    src={image}
                    fill
                    alt={title}
                    className="object-cover rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none rounded-t-3xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white drop-shadow-md">{title}</h2>
                    {/* <p className="mt-1 text-brand-300 font-medium text-lg drop-shadow-md">{subtitle}</p> */}
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8 space-y-6">
                {!image && (
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
                   
                  </div>
                )}
                
                <div className="prose prose-slate max-w-none">
                   <p className="mt-1 text-brand-600 font-medium text-lg">{subtitle}</p>
                  <p className="text-slate-700 text-lg leading-relaxed">{description}</p>
                </div>
                
                {price ? (
                  <div className="py-4 border-y border-slate-100">
                    <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Pricing</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">KSH {price.toFixed(2)}</p>
                  </div>
                ) : null}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="order-2 sm:order-1 flex-1 py-3.5 rounded-xl border-2 border-slate-100 font-bold text-slate-600 transition-all hover:bg-slate-50 hover:border-slate-200 hover:text-slate-900"
                  >
                    Back to Products
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="order-1 sm:order-2 flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-brand-700 to-brand-600 font-bold text-white shadow-xl shadow-brand-500/20 transition-all hover:shadow-2xl hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
