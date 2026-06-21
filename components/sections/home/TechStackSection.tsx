'use client'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/animations/SectionReveal'

const techRow1 = [
  { name: 'Next.js',        color: 'text-white bg-black dark:bg-white dark:text-black' },
  { name: 'React',          color: 'text-cyan-400 bg-cyan-400/10' },
  { name: 'TypeScript',     color: 'text-blue-400 bg-blue-400/10' },
  { name: 'Tailwind CSS',   color: 'text-teal-400 bg-teal-400/10' },
  { name: 'Node.js',        color: 'text-green-400 bg-green-400/10' },
  { name: 'Python',         color: 'text-yellow-400 bg-yellow-400/10' },
  { name: 'PostgreSQL',     color: 'text-sky-400 bg-sky-400/10' },
  { name: 'MongoDB',        color: 'text-emerald-400 bg-emerald-400/10' },
  { name: 'Redis',          color: 'text-red-400 bg-red-400/10' },
  { name: 'AWS',            color: 'text-orange-400 bg-orange-400/10' },
  { name: 'Docker',         color: 'text-blue-400 bg-blue-400/10' },
  { name: 'GraphQL',        color: 'text-pink-400 bg-pink-400/10' },
]

const techRow2 = [
  { name: 'React Native',   color: 'text-cyan-400 bg-cyan-400/10' },
  { name: 'Flutter',        color: 'text-blue-400 bg-blue-400/10' },
  { name: 'Firebase',       color: 'text-amber-400 bg-amber-400/10' },
  { name: 'OpenAI',         color: 'text-green-400 bg-green-400/10' },
  { name: 'LangChain',      color: 'text-teal-400 bg-teal-400/10' },
  { name: 'Pinecone',       color: 'text-violet-400 bg-violet-400/10' },
  { name: 'Stripe',         color: 'text-indigo-400 bg-indigo-400/10' },
  { name: 'Razorpay',       color: 'text-sky-400 bg-sky-400/10' },
  { name: 'Google Cloud',   color: 'text-blue-400 bg-blue-400/10' },
  { name: 'Kubernetes',     color: 'text-blue-400 bg-blue-400/10' },
  { name: 'Django',         color: 'text-green-400 bg-green-400/10' },
  { name: 'Spring Boot',    color: 'text-green-400 bg-green-400/10' },
]

function MarqueeRow({
  items,
  direction = 'left',
  speed = 35,
}: {
  items: { name: string; color: string }[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: direction === 'left' ? [0, -(items.length * 170)] : [-(items.length * 170), 0] }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface text-sm font-semibold whitespace-nowrap shrink-0 ${tech.color}`}
          >
            <span className="w-2 h-2 rounded-full bg-current opacity-70 shrink-0" />
            {tech.name}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function TechStackSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeader
            eyebrow="Technology Stack"
            title="Built With the Best Technologies"
            description="We use battle-tested, modern technologies to build solutions that are fast, scalable, and maintainable."
          />
        </div>

        {/* Marquees — full width with fade edges */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="space-y-3">
            <MarqueeRow items={techRow1} direction="left" speed={40} />
            <MarqueeRow items={techRow2} direction="right" speed={35} />
          </div>
        </div>

        {/* Tech categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { label: 'Frontend',  count: 6,  color: 'text-cyan-400' },
              { label: 'Backend',   count: 5,  color: 'text-green-400' },
              { label: 'Mobile',    count: 2,  color: 'text-violet-400' },
              { label: 'Database',  count: 4,  color: 'text-sky-400' },
              { label: 'Cloud',     count: 3,  color: 'text-orange-400' },
              { label: 'AI & ML',   count: 4,  color: 'text-teal-400' },
            ].map((cat) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-xl bg-surface border border-border"
              >
                <div className={`text-2xl font-display font-bold ${cat.color} mb-1`}>{cat.count}+</div>
                <div className="text-xs font-semibold text-muted">{cat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
