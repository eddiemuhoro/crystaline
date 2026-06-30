"use client";

import { Search, X, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition, Suspense, useRef } from "react";

function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") || "");
  const [isPending, startTransition] = useTransition();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }
    params.delete("page"); // Reset to page 1 on new search
    
    startTransition(() => {
      // Use replace so we don't spam the history with every keystroke
      router.replace(`/products?${params.toString()}`, { scroll: false });
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      triggerSearch(value);
    }, 350); // 350ms debounce
  };

  const handleClear = () => {
    setQuery("");
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    triggerSearch("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    triggerSearch(query);
  };

  return (
    <form onSubmit={handleFormSubmit} className="relative w-full max-w-xl mx-auto mb-10">
      <div className="relative flex items-center shadow-sm rounded-full bg-white hover:shadow-md transition-shadow duration-300">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          {isPending ? (
            <Loader2 className="w-5 h-5 text-emerald-500 animate-spin" />
          ) : (
            <Search className="w-5 h-5 text-gray-400" />
          )}
        </div>
        <input
          type="search"
          name="q"
          className="block w-full py-3.5 pl-12 pr-[140px] text-base text-gray-900 border-2 border-transparent rounded-full bg-transparent focus:ring-0 focus:border-emerald-500 focus:outline-none placeholder-gray-400"
          placeholder="Search products by name or features..."
          value={query}
          onChange={handleInputChange}
          // The native 'search' type usually adds an X, but it's inconsistent across browsers.
          // We can disable it to use our completely custom controlled X.
          autoComplete="off"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          input[type="search"]::-webkit-search-decoration,
          input[type="search"]::-webkit-search-cancel-button,
          input[type="search"]::-webkit-search-results-button,
          input[type="search"]::-webkit-search-results-decoration {
            display: none;
          }
        `}} />
        <div className="absolute right-2.5 bottom-2.5 top-2.5 flex items-center gap-2">
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            disabled={isPending}
            className="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-semibold rounded-full text-sm h-full px-6 transition-colors disabled:opacity-80 flex items-center justify-center min-w-[100px]"
          >
            {isPending ? "..." : "Search"}
          </button>
        </div>
      </div>
    </form>
  );
}

export function ProductSearch() {
  return (
    <Suspense fallback={<div className="h-14 w-full max-w-xl mx-auto mb-10 bg-gray-100 rounded-full animate-pulse"></div>}>
      <SearchForm />
    </Suspense>
  );
}
