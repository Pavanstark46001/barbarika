import type { Solution } from '@/types'

export const solutions: Solution[] = [
  // Healthcare
  {
    id: 'hospital-management',
    slug: 'hospital-management',
    industry: 'Healthcare',
    title: 'Hospital Management System',
    shortDescription: 'End-to-end digitization of hospital operations — from OPD to billing.',
    description:
      'A comprehensive Hospital Management System covering patient registration, appointment scheduling, EMR, pharmacy, billing, lab management, and doctor portals.',
    icon: 'Hospital',
    color: 'from-red-500 to-rose-600',
    features: [
      { title: 'Patient Registration & OPD', description: 'Digital patient onboarding with UHID generation' },
      { title: 'Electronic Medical Records', description: 'Secure, structured EMR with history and prescriptions' },
      { title: 'Appointment Scheduling', description: 'Online and in-person booking with doctor calendars' },
      { title: 'Pharmacy Management', description: 'Drug inventory, prescriptions, and billing integration' },
      { title: 'Lab & Radiology', description: 'Test orders, results, and report generation' },
      { title: 'Insurance & Billing', description: 'TPA integration, cashless claims, and invoicing' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'HL7 FHIR', 'AWS', 'Redis'],
  },
  {
    id: 'clinic-management',
    slug: 'clinic-management',
    industry: 'Healthcare',
    title: 'Clinic Management System',
    shortDescription: 'Smart clinic software for single and multi-specialty practices.',
    description:
      'Streamline your clinic with digital appointments, patient records, billing, and telehealth capabilities built for modern healthcare practices.',
    icon: 'Stethoscope',
    color: 'from-pink-500 to-rose-500',
    features: [
      { title: 'Appointment Booking', description: 'Online scheduling with SMS and WhatsApp reminders' },
      { title: 'Digital Prescriptions', description: 'Structured e-prescriptions with drug database' },
      { title: 'Patient History', description: 'Complete longitudinal patient records' },
      { title: 'Telehealth Module', description: 'Video consultations with secure file sharing' },
      { title: 'Revenue Analytics', description: 'Collections, outstanding, and growth reports' },
      { title: 'WhatsApp Integration', description: 'Automated follow-ups and health reminders' },
    ],
    technologies: ['Next.js', 'Supabase', 'Twilio', 'Stripe', 'TypeScript', 'Tailwind'],
  },
  // Education
  {
    id: 'school-erp',
    slug: 'school-erp',
    industry: 'Education',
    title: 'School ERP System',
    shortDescription: 'Complete school management from admissions to academics.',
    description:
      'A powerful School ERP covering student lifecycle management, academics, fees, HR, transport, library, and parent communication in one unified platform.',
    icon: 'School',
    color: 'from-blue-500 to-indigo-600',
    features: [
      { title: 'Student Lifecycle', description: 'Admissions, enrollment, and alumni management' },
      { title: 'Academic Management', description: 'Timetables, attendance, marks, and report cards' },
      { title: 'Fee Management', description: 'Online payments, receipts, and due tracking' },
      { title: 'Parent Portal', description: 'Real-time updates, attendance, and communication' },
      { title: 'Transport Module', description: 'Bus routes, GPS tracking, and stop management' },
      { title: 'Library System', description: 'Book catalog, issue/return, and fine management' },
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'Razorpay', 'Firebase', 'AWS'],
  },
  {
    id: 'college-erp',
    slug: 'college-erp',
    industry: 'Education',
    title: 'College ERP System',
    shortDescription: 'Higher education management built for universities and colleges.',
    description:
      'Comprehensive ERP for colleges covering admissions, academics, examination, placements, hostel management, and regulatory compliance.',
    icon: 'GraduationCap',
    color: 'from-violet-500 to-purple-600',
    features: [
      { title: 'Admission Portal', description: 'Online applications with merit-based selection' },
      { title: 'Academic Module', description: 'Course management, faculty load, and LMS integration' },
      { title: 'Examination Module', description: 'Exam scheduling, hall tickets, and results' },
      { title: 'Placement Portal', description: 'Job postings, applications, and company connect' },
      { title: 'Hostel Management', description: 'Room allotment, fees, and warden portal' },
      { title: 'NAAC/NBA Compliance', description: 'Reports and documentation for accreditation' },
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3', 'Redis', 'Docker'],
  },
  // Finance
  {
    id: 'loan-management',
    slug: 'loan-management',
    industry: 'Finance',
    title: 'Loan Management System',
    shortDescription: 'End-to-end loan lifecycle from application to closure.',
    description:
      'Automate loan origination, credit assessment, disbursement, EMI collection, and NPA management for NBFCs, MFIs, and cooperative banks.',
    icon: 'Banknote',
    color: 'from-green-500 to-emerald-600',
    features: [
      { title: 'Loan Origination', description: 'Digital application with document collection' },
      { title: 'Credit Assessment', description: 'Bureau integration, CIBIL, and risk scoring' },
      { title: 'Disbursement', description: 'Bank transfer integration and loan agreements' },
      { title: 'EMI Collection', description: 'Auto-debit, NACH mandates, and payment tracking' },
      { title: 'NPA Management', description: 'Early warning system and recovery workflow' },
      { title: 'Regulatory Reports', description: 'RBI and compliance reporting' },
    ],
    technologies: ['React', 'Java Spring Boot', 'Oracle DB', 'RazorpayX', 'AWS', 'Kafka'],
  },
  // Business / Retail
  {
    id: 'crm',
    slug: 'crm',
    industry: 'Business',
    title: 'CRM System',
    shortDescription: 'Close more deals faster with an intelligent CRM built for your business.',
    description:
      'A powerful Customer Relationship Management system with pipeline management, lead tracking, automated follow-ups, and sales analytics to supercharge your team.',
    icon: 'Users2',
    color: 'from-amber-500 to-orange-600',
    features: [
      { title: 'Lead Management', description: 'Capture, qualify, and track every lead' },
      { title: 'Pipeline View', description: 'Kanban and list views with drag-and-drop' },
      { title: 'Email Automation', description: 'Drip campaigns and follow-up sequences' },
      { title: 'WhatsApp Integration', description: 'Send messages directly from CRM' },
      { title: 'Sales Analytics', description: 'Revenue forecasting and team performance' },
      { title: 'Mobile CRM', description: 'Full-featured iOS and Android app' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'SendGrid', 'AWS'],
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    industry: 'Retail',
    title: 'E-Commerce Platform',
    shortDescription: 'Sell more online with a high-converting e-commerce store.',
    description:
      'Feature-rich e-commerce solution with product catalog, cart, payments, inventory management, order tracking, and marketing tools — all in one platform.',
    icon: 'ShoppingCart',
    color: 'from-cyan-500 to-sky-600',
    features: [
      { title: 'Product Catalog', description: 'Unlimited products with variants and rich media' },
      { title: 'Payment Gateway', description: 'Razorpay, Stripe, UPI, and COD support' },
      { title: 'Order Management', description: 'Order tracking, returns, and refund workflow' },
      { title: 'Inventory Control', description: 'Multi-warehouse stock management' },
      { title: 'Marketing Tools', description: 'Coupons, flash sales, and abandoned cart recovery' },
      { title: 'Analytics Dashboard', description: 'Sales, revenue, and customer insights' },
    ],
    technologies: ['Next.js', 'Shopify Headless', 'GraphQL', 'PostgreSQL', 'Razorpay', 'AWS'],
  },
  // Construction
  {
    id: 'construction-erp',
    slug: 'construction-erp',
    industry: 'Construction',
    title: 'Construction ERP',
    shortDescription: 'Manage projects, materials, and workforce on one platform.',
    description:
      'Complete construction project management covering site management, material procurement, labor tracking, project progress, billing, and compliance.',
    icon: 'HardHat',
    color: 'from-yellow-500 to-amber-600',
    features: [
      { title: 'Project Management', description: 'Gantt charts, milestones, and progress tracking' },
      { title: 'Material Management', description: 'BOM, procurement, and inventory control' },
      { title: 'Labor Management', description: 'Attendance, payroll, and contractor management' },
      { title: 'Site Monitoring', description: 'Daily reports with photo/video documentation' },
      { title: 'Client Portal', description: 'Real-time project updates for clients' },
      { title: 'Budget Control', description: 'Cost tracking, variance analysis, and alerts' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Firebase', 'Docker'],
  },
  // AI
  {
    id: 'ai-chatbot',
    slug: 'ai-chatbot',
    industry: 'AI',
    title: 'AI Chatbot & Sales Agent',
    shortDescription: 'Intelligent AI agents that qualify leads and close deals 24/7.',
    description:
      'Deploy AI-powered chatbots that engage visitors, qualify leads, answer product questions, book appointments, and hand off to sales reps — all automatically.',
    icon: 'Bot',
    color: 'from-teal-500 to-green-600',
    features: [
      { title: 'Lead Qualification', description: 'Ask smart questions to qualify prospects' },
      { title: 'Product Knowledge', description: 'Trained on your catalog, FAQs, and pricing' },
      { title: 'Appointment Booking', description: 'Sync with Google Calendar and Calendly' },
      { title: 'Multi-Channel', description: 'Website, WhatsApp, Instagram, and Facebook' },
      { title: 'CRM Integration', description: 'Push qualified leads directly to your CRM' },
      { title: 'Escalation to Human', description: 'Seamless handoff when needed' },
    ],
    technologies: ['OpenAI GPT-4', 'LangChain', 'Python', 'FastAPI', 'Pinecone', 'Twilio'],
  },
  // Real Estate
  {
    id: 'real-estate-portal',
    slug: 'real-estate-portal',
    industry: 'Construction',
    title: 'Real Estate Portal',
    shortDescription: 'Buy, sell, and rent properties on a modern digital platform.',
    description:
      'A complete real estate portal with property listings, virtual tours, lead management, EMI calculator, and agent management for developers and agencies.',
    icon: 'Building2',
    color: 'from-stone-500 to-neutral-600',
    features: [
      { title: 'Property Listings', description: 'Rich media listings with 3D floor plans' },
      { title: 'Search & Filters', description: 'Advanced search by location, type, price, and more' },
      { title: 'Virtual Tours', description: '360° property walkthroughs embedded' },
      { title: 'EMI Calculator', description: 'Loan eligibility and EMI estimation tool' },
      { title: 'Agent Portal', description: 'Lead distribution, follow-ups, and reporting' },
      { title: 'Document Management', description: 'Agreement drafts, RERA compliance documents' },
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Google Maps API', 'AWS S3', 'Stripe'],
  },
]

export const getSolutionBySlug = (slug: string) =>
  solutions.find((s) => s.slug === slug)

export const getSolutionsByIndustry = (industry: string) =>
  solutions.filter((s) => s.industry === industry)

export const industries = [...new Set(solutions.map((s) => s.industry))]
