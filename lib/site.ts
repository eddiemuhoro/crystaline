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
      "We have been using this ERP software for our retail business for the past 6 years and it transformed the way we manage my inventory and finances. The HR management tools are user-friendly. We highly recommend this software to businesses looking to streamline their operations.",
    author: "Friendly Five Supermarket",
  },
  {
    quote:
      "As a small business owner, I was looking for an all-in-one solution to manage my HR, inventory, and finances. This ERP software has exceeded my expectations and has made my life so much easier. The point of sale system is fast and efficient and helped me identify growth areas.",
    author: "Marksy Electricals",
  },
  {
    quote:
      "I am extremely impressed with the functionality and ease of use of this ERP software. The HR management tools are top-notch and the inventory management system as well as the data visualization features has saved me so much time and effort. I highly recommend this software.",
    author: "Monross Hardware Ltd",
  },
  {
    quote:
      "Using this ERP software for my manufacturing business for the past year and it has been a game changer. The inventory management system is extremely efficient and the accounting and finance tools are very user-friendly. The point of sale system was a great addition to our work.",
    author: "Cindy Electricals",
  },
  {
    quote:
      "I was looking for an ERP software that could handle all of my business needs and this one has exceeded my expectations. The HR management tools are very user-friendly, the inventory management system is efficient. I couldn't be happier with my decision to switch to this software.",
    author: "Backyard Shoes",
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

