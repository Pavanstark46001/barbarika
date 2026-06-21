import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'medcare-hms',
    slug: 'medcare-hms',
    title: 'MedCare Hospital Management System',
    category: 'Healthcare',
    description: 'End-to-end HMS for a 200-bed multi-specialty hospital',
    longDescription:
      'A comprehensive hospital management platform serving 200+ beds, 50+ doctors, and 500+ daily patients. Reduced billing time by 80% and eliminated paper records across all departments.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
    imageUrl: '/images/portfolio/medcare.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '80% reduction in patient wait time',
      '100% digital records — zero paper',
      '₹50L saved annually in operational costs',
      'Real-time bed availability tracking',
    ],
    featured: true,
  },
  {
    id: 'eduspark-erp',
    slug: 'eduspark-erp',
    title: 'EduSpark School ERP',
    category: 'Education',
    description: 'Complete school management for a chain of 12 schools',
    longDescription:
      'A centralized ERP platform managing 12 schools, 8,000+ students, and 600+ staff. Covers academics, fees, attendance, transport, and parent communication.',
    techStack: ['Next.js', 'Django', 'PostgreSQL', 'Razorpay', 'Firebase', 'AWS'],
    imageUrl: '/images/portfolio/eduspark.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '98% fee collection efficiency',
      '40% reduction in admin workload',
      '8,000 parents on mobile app',
      'Real-time transport GPS tracking',
    ],
    featured: true,
  },
  {
    id: 'buildpro-erp',
    slug: 'buildpro-erp',
    title: 'BuildPro Construction ERP',
    category: 'Construction',
    description: 'Project management platform for a mid-size construction company',
    longDescription:
      'Digitized 20+ live construction projects worth ₹500Cr. Tracks labor, materials, expenses, and progress across all sites with real-time mobile access for site engineers.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Firebase', 'Docker'],
    imageUrl: '/images/portfolio/buildpro.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '30% reduction in material wastage',
      '₹2Cr saved in 6 months',
      '100% on-time project delivery rate',
      'Complete digital audit trail',
    ],
    featured: true,
  },
  {
    id: 'shopify-plus-store',
    slug: 'shopify-plus-store',
    title: 'StyleHub E-Commerce Platform',
    category: 'Retail',
    description: 'High-converting fashion e-commerce with 10,000+ SKUs',
    longDescription:
      'A headless e-commerce platform for a fashion brand with 10,000+ products, multi-warehouse inventory, and AI-powered product recommendations. Processes 500+ orders per day.',
    techStack: ['Next.js', 'Shopify', 'GraphQL', 'PostgreSQL', 'Razorpay', 'AWS'],
    imageUrl: '/images/portfolio/stylehub.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '4.2x increase in conversion rate',
      '₹10Cr+ monthly GMV processed',
      '60% reduction in cart abandonment',
      '3s page load time on mobile',
    ],
    featured: true,
  },
  {
    id: 'lendwise-lms',
    slug: 'lendwise-lms',
    title: 'LendWise Loan Management',
    category: 'Finance',
    description: 'NBFC loan management for ₹200Cr+ loan book',
    longDescription:
      'A fully automated loan management system for an NBFC managing ₹200Cr+ loan portfolio. Automated credit scoring, NACH mandates, NPA detection, and RBI reporting.',
    techStack: ['React', 'Java Spring Boot', 'Oracle DB', 'RazorpayX', 'AWS', 'Kafka'],
    imageUrl: '/images/portfolio/lendwise.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '90% faster loan disbursement',
      'NPA reduced from 4.2% to 1.8%',
      '100% automated EMI collection via NACH',
      'Real-time RBI compliance reporting',
    ],
    featured: false,
  },
  {
    id: 'ai-sales-agent',
    slug: 'ai-sales-agent',
    title: 'AI Sales Agent for EdTech',
    category: 'AI',
    description: 'GPT-4 powered sales agent handling 5,000+ leads/month',
    longDescription:
      'An intelligent AI sales agent deployed on WhatsApp and website chat for an EdTech company. Qualifies leads, gives course demos, answers objections, and books counselor calls — 24/7.',
    techStack: ['OpenAI GPT-4', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'Twilio'],
    imageUrl: '/images/portfolio/ai-agent.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '5x increase in lead response rate',
      '70% reduction in cost per lead',
      '24/7 sales coverage without human agents',
      'Qualified 5,000+ leads per month',
    ],
    featured: true,
  },
  {
    id: 'restro-pos',
    slug: 'restro-pos',
    title: 'RestroHub Restaurant POS',
    category: 'Restaurant',
    description: 'Smart POS and management for a chain of 8 restaurants',
    longDescription:
      'A complete restaurant management platform with POS, online ordering, kitchen display system, inventory, and loyalty program for a QSR chain across 8 outlets.',
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'Razorpay', 'AWS'],
    imageUrl: '/images/portfolio/restro.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '35% reduction in order errors',
      '25% increase in average order value',
      '10,000+ loyalty members in 3 months',
      'Real-time inventory tracking across outlets',
    ],
    featured: false,
  },
  {
    id: 'propnest-portal',
    slug: 'propnest-portal',
    title: 'PropNest Real Estate Portal',
    category: 'Real Estate',
    description: 'Property marketplace for a real estate developer with 500+ listings',
    longDescription:
      'A comprehensive real estate portal for a developer with 3 ongoing projects, 500+ units, and 1,000+ leads per month. Features virtual tours, EMI calculator, and AI-powered lead nurturing.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps', 'AWS S3', 'Stripe'],
    imageUrl: '/images/portfolio/propnest.jpg',
    screenshots: [],
    demoUrl: '#',
    benefits: [
      '3x increase in online enquiries',
      '45% shorter sales cycle',
      '₹50Cr in bookings through portal',
      '90% faster document collection',
    ],
    featured: false,
  },
]

export const getFeaturedProjects = () => projects.filter((p) => p.featured)

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)

export const getProjectsByCategory = (category: string) =>
  category === 'All' ? projects : projects.filter((p) => p.category === category)

export const projectCategories = [
  'All',
  'Healthcare',
  'Education',
  'Finance',
  'Retail',
  'AI',
  'Construction',
  'Real Estate',
  'Restaurant',
] as const
