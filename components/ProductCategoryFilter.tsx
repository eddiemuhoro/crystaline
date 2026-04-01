"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, Suspense } from "react";

interface CategoryPillsProps {
  categories: string[];
}

function CategoryPills({ categories }: CategoryPillsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const activeCategory = searchParams.get("category") || "All";

  const handleSelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    // Reset to page 1 whenever the category changes
    params.delete("page");

    startTransition(() => {
      router.replace(`/products?${params.toString()}`, { scroll: false });
    });
  };

  const allCategories = ["All", ...categories];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
      {allCategories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => handleSelect(cat)}
            disabled={isPending}
            aria-pressed={isActive}
            className={[
              "px-4 py-1.5 text-xs font-semibold rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500 whitespace-nowrap",
              isActive
                ? "border-emerald-600 bg-emerald-600 text-white shadow-md shadow-emerald-200"
                : "border-gray-300 bg-white text-gray-600 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-sm",
              isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

interface ProductCategoryFilterProps {
  categories: string[];
}

export function ProductCategoryFilter({ categories }: ProductCategoryFilterProps) {
  return (
    <Suspense
      fallback={
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
          {Array.from({ length: categories.length + 1 || 8 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-24 rounded-full bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      }
    >
      <CategoryPills categories={categories} />
    </Suspense>
  );
}
