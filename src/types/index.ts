// Common types used across the application
import React from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'INR';
  billingPeriod: 'month' | 'year';
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Integration {
  id: string;
  name: string;
  logo: string;
  category: 'health-stack' | 'diagnostic' | 'pharmacy' | 'telehealth';
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  location: string;
  organizationType: 'clinic' | 'hospital' | 'diagnostic' | 'pharmacy';
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: Testimonial;
  image?: string;
}

export type Language = 'en' | 'hi' | 'ta' | 'te' | 'mr' | 'bn';

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}
