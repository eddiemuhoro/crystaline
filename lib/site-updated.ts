export const pricingPackages = [
  {
    name: "Crystaline Server Edition",
    price: 45000,
    pricePrefix: "from",
    description: "Dedicated server deployment",
    features: [
      "Server Software Installation",
      "Centralized Database",
      "Network Management Tools"
    ],
    isPopular: true,
    buttonText: "Get Server Edition"
  },
  {
    name: "Crystaline Client Edition",
    price: 30000,
    pricePrefix: "from",
    description: "Multi-user client access",
    features: [
      "Client Software Installation",
      "Connect to Server Database",
      "User-friendly Interface"
    ],
    isPopular: false,
    buttonText: "Get Client Edition"
  },
  {
    name: "Crystaline Client-Server Edition",
    price: 50000,
    pricePrefix: "from",
    description: "All-in-one standalone setup",
    features: [
      "Server Software Installation",
      "Client Software Installation",
      "Unified System Management",
      "Single computer deployment"
    ],
    isPopular: false,
    buttonText: "Get Client-Server Edition"
  },
  {
    name: "Crystaline Mobile App Edition",
    price: 2500,
    priceSuffix: "/mo",
    description: "Mobile sales & orders",
    features: [
      "Make Sales and Orders",
      "Mobile Accessibility",
      "Real-time Setup"
    ],
    isPopular: false,
    buttonText: "Get Mobile App Edition"
  },
  {
    name: "e-TIMS Integration",
    price: 60000,
    pricePrefix: "from",
    description: "Seamless e-TIMS integration with your ERP stack.",
    features: [
      "Seamless e-TIMS Setup",
      "Automated Tax Compliance",
      "Real-time KRA Sync"
    ],
    isPopular: false,
    buttonText: "Get e-TIMS Integration"
  },
  {
    name: "M-Pesa Integration (without STK push)",
    price: 10000,
    pricePrefix: "from",
    description: "Standard tracking and reconciliation of M-Pesa payments.",
    features: [
      "Process M-Pesa Payments",
      "Automated Reconciliation",
      "Payment Tracking"
    ],
    isPopular: false,
    buttonText: "Get M-Pesa Integration"
  },
  {
    name: "M-Pesa Integration (with STK push)",
    price: 20000,
    pricePrefix: "from",
    description: "Enable direct automated prompt styling for M-Pesa checkouts.",
    features: [
      "Direct STK Push to Customers",
      "Faster Checkouts",
      "Enhanced Customer Experience"
    ],
    isPopular: false,
    buttonText: "Get Fast M-Pesa Integration"
  }
];
