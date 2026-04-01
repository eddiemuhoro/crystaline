"use client";

import { TestimonialCard } from "./TestimonialCard";
import { testimonialQuotes } from "@/lib/site";

export function TestimonialSlider() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scrollX {
          animation: scrollX 40s linear infinite;
        }
        .animate-scrollX:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="flex w-max shrink-0 animate-scrollX gap-6 py-4">
        {[...testimonialQuotes, ...testimonialQuotes].map((testimonial, index) => (
          <div key={`${testimonial.author}-${index}`} className="w-[280px] md:w-[340px]">
            <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
          </div>
        ))}
      </div>
    </div>
  );
}
