import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'outline'

interface BadgeProps {
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  children: React.ReactNode
  className?: string
  dot?: boolean
}

const variants: Record<BadgeVariant, string> = {
  default:  'bg-surface-2 text-muted border border-border',
  primary:  'bg-primary/10 text-primary-light border border-primary/20',
  accent:   'bg-accent/10 text-accent-light border border-accent/20',
  success:  'bg-green/10 text-green border border-green/20',
  warning:  'bg-amber/10 text-amber border border-amber/20',
  error:    'bg-rose/10 text-rose border border-rose/20',
  outline:  'bg-transparent text-foreground border border-border',
}

export function Badge({
  variant = 'default',
  size = 'sm',
  children,
  className,
  dot,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-sm px-3 py-1',
        variants[variant],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full shrink-0',
            variant === 'primary' ? 'bg-primary-light' :
            variant === 'accent'  ? 'bg-accent-light'  :
            variant === 'success' ? 'bg-green'          :
            variant === 'warning' ? 'bg-amber'          :
            variant === 'error'   ? 'bg-rose'           :
            'bg-muted'
          )}
        />
      )}
      {children}
    </span>
  )
}
