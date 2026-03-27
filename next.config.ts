import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // Enable static exports for better SEO
  output: undefined, // Keep as server-side for dynamic sitemap

  // Setup 301 Redirects to maintain SEO for old indexed pages
  // Redirecting all old individual blogs to the new main blog landing page
  async redirects() {
    return [
      {
        source: "/blog/:slug*",
        destination: "/blogs",
        permanent: true, // Passes existing SEO "link juice" to your new blog page
      },
    ];
  },
  //old A - 217.20.124.83
  // www cname - 217.20.124.83
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
