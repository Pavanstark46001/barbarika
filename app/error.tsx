'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-500/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-500/25 flex items-center justify-center mx-auto mb-6"
        >
          <AlertTriangle size={28} className="text-rose-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-rose-500/50" />
            <span className="text-xs font-semibold text-rose-400 uppercase tracking-widest">Something went wrong</span>
            <span className="h-px w-6 bg-rose-500/50" />
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            An unexpected error occurred
          </h1>

          <p className="text-muted text-base mb-3 leading-relaxed">
            We&apos;re sorry for the inconvenience. This error has been logged and our team
            will look into it shortly.
          </p>

          {error.digest && (
            <p className="text-xs text-muted/60 font-mono mb-8">
              Error ID: {error.digest}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button
            variant="glow"
            size="lg"
            icon={<RefreshCw size={17} />}
            iconPosition="left"
            onClick={reset}
          >
            Try Again
          </Button>
          <a href="/">
            <Button variant="secondary" size="lg" icon={<Home size={17} />} iconPosition="left">
              Go Home
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
