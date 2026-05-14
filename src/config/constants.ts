export const APP_CONFIG = {
  name: 'Fettlemed',
  tagline: "India's Health Operating System",
  description: 'Revolutionary EHR and practice management platform for Indian healthcare',
  url: 'https://fettlemed.com',
  email: 'hello@fettlemed.com',
  supportEmail: 'partners@fettlemed.com',
  phone: '+91-999-999-9999', // Updated placeholder to a more standard demo format or remove if not needed
} as const;

export const THEME = {
  colors: {
    primary: '#2F6F73',
    secondary: '#4A9FA3',
    accent: '#73C2C6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1280px',
  },
} as const;

export const ROUTES = {
  home: '/',
  privacy: '/privacy',
  terms: '/terms',
  security: '/security',
} as const;

export const ANALYTICS = {
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  events: {
    hero_cta_click: 'hero_cta_click',
    demo_request: 'demo_request',
    pricing_view: 'pricing_view',
    video_play: 'video_play',
  },
} as const;

export const FEATURES_CONFIG = {
  ehr: {
    title: 'Electronic Health Records',
    description: 'Complete patient history at your fingertips',
    icon: 'medical-record',
  },
  practice: {
    title: 'Practice Management',
    description: 'Streamline appointments, billing, and inventory',
    icon: 'calendar-check',
  },
  abdm: {
    title: 'ABDM Integration',
    description: 'Fully compliant with India\'s health stack',
    icon: 'shield-check',
  },
  ai: {
    title: 'AI-Powered Insights',
    description: 'Clinical decision support powered by Google Gemini',
    icon: 'brain',
  },
} as const;

export const COMPLIANCE_BADGES = [
  {
    name: 'ABDM Certified',
    logo: '/assets/badges/abdm.svg',
    link: 'https://abdm.gov.in',
  },
  {
    name: 'ISO 27001',
    logo: '/assets/badges/iso27001.svg',
    link: '#',
  },
  {
    name: 'Data in India',
    logo: '/assets/badges/data-india.svg',
    link: '#',
  },
] as const;
