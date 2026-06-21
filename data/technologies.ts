import type { Technology } from '@/types'

export const technologies: Technology[] = [
  // Frontend
  { id: 'react', name: 'React', icon: '/icons/react.svg', category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', icon: '/icons/nextjs.svg', category: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', icon: '/icons/typescript.svg', category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'Frontend' },
  { id: 'vue', name: 'Vue.js', icon: '/icons/vue.svg', category: 'Frontend' },
  // Mobile
  { id: 'react-native', name: 'React Native', icon: '/icons/react.svg', category: 'Mobile' },
  { id: 'flutter', name: 'Flutter', icon: '/icons/flutter.svg', category: 'Mobile' },
  // Backend
  { id: 'nodejs', name: 'Node.js', icon: '/icons/nodejs.svg', category: 'Backend' },
  { id: 'python', name: 'Python', icon: '/icons/python.svg', category: 'Backend' },
  { id: 'django', name: 'Django', icon: '/icons/django.svg', category: 'Backend' },
  { id: 'java', name: 'Java', icon: '/icons/java.svg', category: 'Backend' },
  // Database
  { id: 'postgresql', name: 'PostgreSQL', icon: '/icons/postgresql.svg', category: 'Database' },
  { id: 'mongodb', name: 'MongoDB', icon: '/icons/mongodb.svg', category: 'Database' },
  { id: 'redis', name: 'Redis', icon: '/icons/redis.svg', category: 'Database' },
  { id: 'mysql', name: 'MySQL', icon: '/icons/mysql.svg', category: 'Database' },
  // Cloud
  { id: 'aws', name: 'AWS', icon: '/icons/aws.svg', category: 'Cloud' },
  { id: 'gcp', name: 'Google Cloud', icon: '/icons/gcp.svg', category: 'Cloud' },
  { id: 'vercel', name: 'Vercel', icon: '/icons/vercel.svg', category: 'Cloud' },
  { id: 'docker', name: 'Docker', icon: '/icons/docker.svg', category: 'DevOps' },
  // AI
  { id: 'openai', name: 'OpenAI', icon: '/icons/openai.svg', category: 'AI' },
  { id: 'langchain', name: 'LangChain', icon: '/icons/langchain.svg', category: 'AI' },
  { id: 'tensorflow', name: 'TensorFlow', icon: '/icons/tensorflow.svg', category: 'AI' },
]

export const techByCategory = technologies.reduce(
  (acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech)
    return acc
  },
  {} as Record<string, Technology[]>
)
