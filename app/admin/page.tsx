'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Zap, Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ADMIN_CREDENTIALS, LOCAL_STORAGE_KEYS } from '@/lib/constants'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Redirect if already logged in
  useEffect(() => {
    const auth = localStorage.getItem(LOCAL_STORAGE_KEYS.auth)
    if (auth) {
      try {
        const parsed = JSON.parse(auth)
        if (parsed.expiresAt > Date.now()) {
          router.replace('/admin/dashboard')
        }
      } catch {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.auth)
      }
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    await new Promise((r) => setTimeout(r, 600))

    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const session = {
        email,
        token: Math.random().toString(36).slice(2),
        expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      }
      localStorage.setItem(LOCAL_STORAGE_KEYS.auth, JSON.stringify(session))
      router.push('/admin/dashboard')
    } else {
      setError('Invalid email or password.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute inset-0 gradient-radial" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg glow-primary">
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-2xl font-display font-bold gradient-text">Barbarika</span>
          </div>
          <h1 className="text-xl font-semibold text-foreground">Admin Panel</h1>
          <p className="text-sm text-muted mt-1">Sign in to manage your content</p>
        </div>

        {/* Form */}
        <div className="glass rounded-2xl border border-white/10 p-8 shadow-2xl shadow-black/20">
          <form onSubmit={handleLogin} className="space-y-5">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              icon={<Mail size={16} />}
            />

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
                  <Lock size={16} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-surface border border-border rounded-lg pl-10 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-fg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-rose text-sm bg-rose/10 rounded-lg px-3 py-2.5"
              >
                <AlertCircle size={15} className="shrink-0" />
                {error}
              </motion.div>
            )}

            <Button type="submit" variant="glow" fullWidth size="lg" loading={loading}>
              Sign In
            </Button>
          </form>

          <p className="text-xs text-muted text-center mt-6">
            Demo: <span className="text-muted-fg">{ADMIN_CREDENTIALS.email}</span> /{' '}
            <span className="text-muted-fg">{ADMIN_CREDENTIALS.password}</span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
