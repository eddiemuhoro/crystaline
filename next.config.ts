import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

  output: undefined,

  async redirects() {
    return [
      {
        source: "/blog/integrating-online-ordering-and-delivery-services-with-your-pos-system",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/streamlining-table-management-with-a-restaurant-pos-system",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/future-proofing-your-business-with-scalable-and-flexible-pos-system-solutions",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/inventory-tracking-for-perishable-goods-optimizing-stock-rotation-with-a-pos-system",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/the-benefits-of-mobile-ordering-and-self-service-kiosks-in-quick-service-restaurants",
        destination: "/blog",
        permanent: true,
      },
    ];
  },

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