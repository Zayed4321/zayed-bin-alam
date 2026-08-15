export interface CaseStudyStep {
  stepNumber: string;
  title: string;
  description: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  number: string;
  yearCategory: string;
  title: string;
  description: string;
  impactMetric: string;
  gradient: string;
  iconSymbol: "infinity" | "target" | "layers" | "crave";
  summaryDetails: string;
  fullOverview?: string;
  deliverables: string[];
  tools: string[];
  featuredImage?: string;
  detailImage?: string;
  steps?: CaseStudyStep[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "cravetheapp",
    slug: "cravetheapp",
    number: "01",
    yearCategory: "2026 • Shopify E-Commerce • GA4, Meta CAPI & Server Tracking",
    title: "Crave Shopify Store — GA4 & Meta Pixel",
    description: "Advanced server-side tracking for Crave Corner Shopify store using GTM, GA4, Meta Conversions API (Stape)",
    impactMetric: "100% Tracking Integrity",
    gradient: "from-[#0F3D2E] via-[#1E6B4F] to-[#0A2E22]",
    iconSymbol: "crave",
    featuredImage: "/Crave_main_portfolio.png",
    detailImage: "/Crave-Portfolio.png",
    summaryDetails: "This case study outlines the technical implementation of advanced server-side tracking solutions to optimize data collection and performance analysis for CraveTheApp Shopify Store by Zayed.",
    fullOverview: "For CraveTheApp, a fast-growing Shopify store, relying solely on standard browser tracking caused missing conversion data due to ad blockers, iOS privacy updates, and browser cookie restrictions. To fix this, Zayed implemented a dual-container Google Tag Manager architecture paired with server-side Meta Conversions API (Stape.io) to ensure 100% accurate revenue and event attribution.",
    deliverables: [
      "GTM Web & Server-Side Container Architecture",
      "GA4 Ecommerce Event Tracking (Purchase, Add to Cart, Begin Checkout)",
      "Meta Conversions API (Stape.io Server Integration)",
      "Tag Assistant & GA4 DebugView Validation",
      "End-to-End Data Integrity Quality Assurance",
    ],
    tools: ["Shopify", "Google Tag Manager", "Google Analytics 4", "Meta CAPI", "Stape.io"],
    steps: [
      {
        stepNumber: "Step 1",
        title: "Google Tag Manager Configuration",
        description: "Initiated the project by setting up dedicated Google Tag Manager (GTM) accounts. Both web-side and server-side containers were configured to create a scalable, secure tracking infrastructure capable of handling high-volume e-commerce traffic.",
        image: "/cravetheapp/GTM Setup1.png",
      },
      {
        stepNumber: "Step 2",
        title: "Google Analytics 4 (GA4) & Server Setup",
        description: "Following GTM setup, GA4 was fully integrated into the client's property. Server-side setup was executed via Stape.io to route data directly from the server, bypassing ad blockers and client-side browser limits.",
        image: "/cravetheapp/GTM Tag Firing2.png",
      },
      {
        stepNumber: "Step 3",
        title: "Pixel and Dataset Implementation",
        description: "With the core analytics foundation established, datasets and Meta tracking pixels were configured across key customer touchpoints—including Page View, View Item, Add to Cart, Initiate Checkout, and Purchase.",
        image: "/cravetheapp/GTM - Meta Events Manager5.png",
      },
      {
        stepNumber: "Step 4",
        title: "GA4 DebugView & Quality Assurance",
        description: "Rigorous testing was conducted to verify data integrity. Implementation was validated through Tag Assistant, GA4 DebugView, and Meta Events Manager to confirm browser-side and server-side tags fire correctly.",
        image: "/cravetheapp/GTM - Google Analytics DebugView4 .png",
      },
    ],
  },
  {
    id: "aura-skincare",
    slug: "aura-skincare",
    number: "02",
    yearCategory: "2025 • Wellness & Skincare • Meta & ChatGPT Ads",
    title: "Aura Skincare & Wellness",
    description: "A high-converting Meta & ChatGPT ad campaign scaling monthly bookings by 240% with bulletproof server-side GTM tracking.",
    impactMetric: "+240% Bookings",
    gradient: "from-[#0F3D2E] via-[#1E6B4F] to-[#1E1E1E]",
    iconSymbol: "infinity",
    summaryDetails: "Implemented end-to-end prompt-level intent mapping for ChatGPT ads paired with high-converting Meta video creative angles and GTM Conversions API tracking.",
    fullOverview: "Aura Skincare needed a scalable acquisition strategy to drive high-intent appointments. By introducing conversational ChatGPT ad placements and high-performing Meta ad creatives, monthly treatment bookings increased by 240% in under 90 days.",
    deliverables: ["ChatGPT Prompt Intent Mapping", "Meta Video Creatives", "GTM Server-Side CAPI", "ROAS Scaling Framework"],
    tools: ["ChatGPT Ads", "Meta Ads Manager", "Google Tag Manager", "Shopify"],
  },
  {
    id: "vitalis-health",
    slug: "vitalis-health",
    number: "03",
    yearCategory: "2025 • Healthcare Clinic • Google Search & PMax",
    title: "Vitalis Health Clinic",
    description: "High-intent Google Search and Performance Max campaigns driving 3.2x client acquisition at a 42% lower cost per booking.",
    impactMetric: "3.2x Client Growth",
    gradient: "from-[#1E6B4F] via-[#0F3D2E] to-[#A8CBB7]",
    iconSymbol: "target",
    summaryDetails: "Restructured Google Ads campaign hierarchy to capture ready-to-book patients searching for high-margin wellness treatments.",
    fullOverview: "Vitalis Health Clinic restructured their Google Search hierarchy to target high-intent medical queries, eliminating wasted ad spend and achieving 3.2x client acquisition growth.",
    deliverables: ["Google Search Audit", "Performance Max Setup", "Landing Page CRO", "Conversion Tracking Fix"],
    tools: ["Google Ads", "Google Analytics 4", "Looker Studio", "Hotjar"],
  },
  {
    id: "finvault-enterprise",
    slug: "finvault-enterprise",
    number: "04",
    yearCategory: "2025 • B2B SaaS • LinkedIn Ads & Tracking",
    title: "FinVault Enterprise",
    description: "Precision B2B decision-maker ad strategy paired with Meta CAPI tracking to attribute $1.8M in pipeline revenue.",
    impactMetric: "$1.8M Pipeline",
    gradient: "from-[#0F3D2E] via-[#5C6461] to-[#1E6B4F]",
    iconSymbol: "layers",
    summaryDetails: "Built account-based LinkedIn advertising funnels targeting C-suite decision-makers with personalized lead magnets and server-side tracking.",
    fullOverview: "FinVault Enterprise scaled B2B lead generation by targeting C-level decision-makers with account-based LinkedIn advertising and automated CRM lead sync.",
    deliverables: ["ABM Campaign Strategy", "LinkedIn Lead Gen Forms", "Attribution Modeling", "CRM Pipeline Sync"],
    tools: ["LinkedIn Ads", "HubSpot CRM", "Meta CAPI", "PostHog"],
  },
];
