import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'line' | 'circle' | 'rect'
}

export function Skeleton({ className, variant = 'rect' }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-shimmer',
        variant === 'circle' && 'rounded-full',
        variant === 'line'   && 'rounded h-4',
        variant === 'rect'   && 'rounded-lg',
        className
      )}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
      <Skeleton className="h-48" />
      <Skeleton variant="line" className="w-3/4" />
      <Skeleton variant="line" className="w-1/2" />
      <Skeleton variant="line" className="w-full h-3" />
      <Skeleton variant="line" className="w-4/5 h-3" />
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="line"
          className={i === lines - 1 ? 'w-2/3' : 'w-full'}
        />
      ))}
    </div>
  )
}
