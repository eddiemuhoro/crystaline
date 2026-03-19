import {
  Package,
  DollarSign,
  Users,
  BarChart3,
  ShoppingBag,
  Truck,
  Briefcase,
} from "lucide-react";

export const siteConfig = {
  name: "Crystal ERP & POS Software",
  shortName: "Crystal ERP",
  description:
    "Crystal ERP delivers modern ERP and POS software that helps Kenyan businesses streamline sales, inventory, finance, and people operations from one secure cloud platform.",
  url: "https://erp.crystaline.co.ke",
  keywords: [
    "ERP software Kenya",
    "POS software Kenya",
    "inventory management",
    "cloud retail system",
    "Crystal ERP",
    "business management platform",
  ],
  authors: [
    {
      name: "Crystal ERP Software",
      url: "https://erp.crystaline.co.ke",
    },
  ],
  contact: {
    email: "info@sajsoft.co.ke",
    phone: "+254 725 473779",
    addressLine: "Raja Building, Nairobi, CBD, Kenya",
  },
  social: {
    twitter: "https://twitter.com/crystaline",
    facebook: "https://www.facebook.com/profile.php?id=100089447680981",
    instagram: "https://www.instagram.com/accounts/onetap/?next=%2F",
    linkedin: "https://twitter.com/sajsoft_ltd",
  },
};

export const featureHighlights = [
  {
    title: "Unified Inventory",
    description:
      "Track stock levels, transfers, breakages, and supplier deliveries in real time with automated alerts and batch controls.",
    icon: Package,
  },
  {
    title: "Finance & Tax Control",
    description:
      "Get instant P&Ls, VAT-ready tax reports, multi-currency banking, and spend approvals that sync with your accountant’s workflow.",
    icon: DollarSign,
  },
  {
    title: "People & Payroll",
    description:
      "Manage rosters, performance reviews, payroll, and compliance from the same dashboard your HR team already lives in.",
    icon: Users,
  },
  {
    title: "Advanced Reporting",
    description:
      "Surface KPIs across devices with pixel-perfect dashboards, scheduled email digests, and embedded analytics for every department.",
    icon: BarChart3,
  },
];

export const solutionPillars = [
  {
    name: "Retail & Hospitality",
    icon: ShoppingBag,
    summary:
      "Fast omnichannel POS with kitchen display, table tracking, and loyalty tools built for high-volume stores.",
    points: [
      "Offline-ready terminals with automatic sync",
      "Recipe-level costing and modifiers",
      "Customer engagement journeys & vouchers",
    ],
  },
  {
    name: "Wholesale & Distribution",
    icon: Truck,
    summary:
      "Forecast demand, optimize purchasing, and control fleet routing with supply chain visibility.",
    points: [
      "Smart replenishment suggestions",
      "Multi-warehouse transfers and staging",
      "Driver manifests with proof-of-delivery",
    ],
  },
  {
    name: "Service Businesses",
    icon: Briefcase,
    summary:
      "Project, field-service, and subscription billing built for agencies, clinics, and professional firms.",
    points: [
      "Task boards mapped to cost centers",
      "Recurring invoices with Mpesa & card links",
      "Customer portals for approvals and assets",
    ],
  },
];

export const testimonialQuotes = [
  {
    quote:
      "Crystal ERP replaced five disconnected tools and gave every store manager real-time visibility into sales, waste, and payroll.",
    author: "Faith W., Friendly Five Supermarket",
  },
  {
    quote:
      "We deployed new branches twice as fast because inventory, ecommerce, and in-store POS now run on the same blueprint.",
    author: "Brian K., Backyard Shoes",
  },
  {
    quote:
      "Scheduling, commissions, and compliance audits are no longer weekend tasks—Crystal ERP automates them in minutes.",
    author: "Lydia M., Marksy Electricals",
  },
];

export const faqEntries = [
  {
    question: "How long does implementation take?",
    answer:
      "Typical deployments go live in 3–5 days with data migration, hardware pairing, and staff onboarding handled by the Crystal ERP success team.",
  },
  {
    question: "Can I integrate existing accounting tools?",
    answer:
      "Yes. We ship ready connectors for QuickBooks, Xero, Sage, and custom REST webhooks so your finance stack stays intact.",
  },
  {
    question: "Do you support multiple locations or franchises?",
    answer:
      "Crystal ERP manages unlimited outlets with centralized approvals, role-based access, and consolidated analytics.",
  },
];

export const productPlans = [
  {
    id: "classic",
    name: "Crystal ERP Classic",
    image: "/blog.jpg",
    description:
      "Battle-tested desktop and hybrid deployment trusted by 3,000+ Kenyan terminals for everyday POS and accounting.",
    price: "From KES 2,900 / month",
    href: "/products#classic",
    highlights: [
      "Local + cloud backups",
      "Customized fiscal receipts",
      "Dedicated support line",
    ],
  },
  {
    id: "cloud",
    name: "Crystal ERP Cloud Suite",
    image: "/blog.jpg",
    description:
      "Modern web-first ERP with mobile dashboards, embedded payments, and AI forecasting for multi-location operators.",
    price: "From KES 6,500 / month",
    href: "/products#cloud",
    highlights: [
      "Unlimited users",
      "Role-based workspaces",
      "Embedded analytics",
    ],
  },
  {
    id: "partners",
    name: "Partner & Reseller Program",
    image: "/blog.jpg",

    description:
      "Co-brand Crystal ERP, earn recurring revenue, and access enablement kits designed for ICT and telco partners.",
    price: "Custom margins",
    href: "/products#partners",
    highlights: [
      "White-label training",
      "Deal registration portal",
      "Joint marketing funds",
    ],
  },
];

export const stats = [
  { label: "Clients", value: "300+" },
  { label: "Projects", value: "600" },
  { label: "Support hours", value: "6k+" },
  { label: "Experts", value: "18" },
];

export const pricingPackages = [
  {
    name: "Basic",
    price: 2900,
    description: "For single-store retail or small service teams",
    features: [
      "Point of Sale (POS)",
      "Basic Inventory Tracking",
      "Daily Sales Reporting",
      "1 User License"
    ],
    isPopular: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: 6500,
    description: "For multi-store and growing businesses",
    features: [
      "Advanced Inventory & Transfers",
      "Finance & Tax Automation",
      "Supplier Management",
      "Up to 5 User Licenses"
    ],
    isPopular: true,
    buttonText: "Upgrade to Professional"
  },
  {
    name: "Enterprise",
    price: 15000,
    description: "For full-scale operations and large teams",
    features: [
      "People, HR & Payroll",
      "Advanced Custom Dashboards",
      "API Access & Integrations",
      "Unlimited Users"
    ],
    isPopular: false,
    buttonText: "Contact Sales"
  }
];

