// ============================================================
// BARBARIKA — Core Domain Types
// ============================================================

// ---- Navigation ----
export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

// ---- Services ----
export interface ServiceFeature {
  icon: string
  title: string
  description: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  color: string
  features: ServiceFeature[]
  benefits: string[]
  process: ServiceProcess[]
  technologies: string[]
  image?: string
}

// ---- Solutions / Industries ----
export interface SolutionFeature {
  title: string
  description: string
}

export interface Solution {
  id: string
  slug: string
  industry: string
  title: string
  shortDescription: string
  description: string
  icon: string
  color: string
  features: SolutionFeature[]
  technologies: string[]
  image?: string
}

// ---- Portfolio ----
export type ProjectCategory =
  | 'Healthcare'
  | 'Education'
  | 'Finance'
  | 'Retail'
  | 'AI'
  | 'Construction'
  | 'Travel'
  | 'Restaurant'
  | 'Real Estate'
  | 'All'

export interface Project {
  id: string
  slug: string
  title: string
  category: ProjectCategory
  description: string
  longDescription: string
  techStack: string[]
  imageUrl: string
  screenshots: string[]
  demoUrl?: string
  benefits: string[]
  featured: boolean
}

// ---- Testimonials ----
export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  avatar: string
  rating: number
  content: string
  industry: string
}

// ---- Pricing ----
export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number | 'Custom'
  period: 'month' | 'project' | 'custom'
  features: PricingFeature[]
  highlighted: boolean
  badge?: string
  cta: string
}

// ---- Team ----
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  socials: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

// ---- Technologies ----
export interface Technology {
  id: string
  name: string
  icon: string
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Cloud' | 'AI' | 'DevOps'
}

// ---- FAQ ----
export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

// ---- Contact / Lead ----
export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
  createdAt: string
  status: 'new' | 'contacted' | 'converted' | 'closed'
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

// ---- Admin ----
export interface AdminSettings {
  companyName: string
  logo: string
  email: string
  phone: string
  address: string
  socialLinks: {
    linkedin?: string
    twitter?: string
    instagram?: string
    facebook?: string
    youtube?: string
  }
}

export interface AdminUser {
  email: string
  token: string
  expiresAt: number
}

// ---- Stat / Metric ----
export interface Stat {
  value: string
  label: string
  suffix?: string
  prefix?: string
  numericValue: number
}

// ---- Digital Marketing ----
export interface MarketingMetric {
  id: string
  label: string
  value: number
  suffix: string
  icon: string
  color: string
}
