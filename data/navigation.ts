import type { NavLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Website Development', href: '/services/web-development' },
      { label: 'Web App Development', href: '/services/web-app-development' },
      { label: 'Mobile App Development', href: '/services/mobile-app-development' },
      { label: 'AI Agent Development', href: '/services/ai-agent-development' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Healthcare', href: '/solutions?industry=Healthcare' },
      { label: 'Education', href: '/solutions?industry=Education' },
      { label: 'Finance', href: '/solutions?industry=Finance' },
      { label: 'Retail & E-Commerce', href: '/solutions?industry=Retail' },
      { label: 'Construction', href: '/solutions?industry=Construction' },
      { label: 'AI Solutions', href: '/solutions?industry=AI' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Marketing', href: '/digital-marketing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  services: [
    { label: 'Website Development', href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'AI Agent Development', href: '/services/ai-agent-development' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ],
  solutions: [
    { label: 'Hospital Management', href: '/solutions/hospital-management' },
    { label: 'School ERP', href: '/solutions/school-erp' },
    { label: 'E-Commerce Platform', href: '/solutions/ecommerce' },
    { label: 'CRM System', href: '/solutions/crm' },
    { label: 'Construction ERP', href: '/solutions/construction-erp' },
    { label: 'Loan Management', href: '/solutions/loan-management' },
  ],
  company: [
    { label: 'About Us',       href: '/about' },
    { label: 'Portfolio',      href: '/portfolio' },
    { label: 'Careers',        href: '/careers' },
    { label: 'Blog',           href: '/blog' },
    { label: 'Contact',        href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}
