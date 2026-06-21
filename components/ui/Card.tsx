import { cn } from '@/lib/utils'

type CardVariant = 'default' | 'glass' | 'gradient' | 'bordered' | 'elevated'

interface CardProps {
  variant?: CardVariant
  hover?: boolean
  glow?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const variants: Record<CardVariant, string> = {
  default:  'bg-surface border border-border',
  glass:    'glass',
  gradient: 'bg-surface border border-border relative before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:bg-gradient-to-br before:from-primary/20 before:via-transparent before:to-accent/20 before:-z-10',
  bordered: 'bg-surface border-2 border-border',
  elevated: 'bg-surface border border-border shadow-lg shadow-black/20',
}

export function Card({
  variant = 'default',
  hover = false,
  glow = false,
  className,
  children,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-xl overflow-hidden',
        'transition-all duration-300',
        variants[variant],
        hover && 'hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 cursor-pointer',
        glow && 'hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('p-6 pb-4', className)}>{children}</div>
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('px-6 pb-6', className)}>{children}</div>
}

export function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('px-6 pb-6 pt-0 flex items-center gap-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={cn('text-lg font-semibold text-foreground', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn('text-sm text-muted mt-1', className)}>{children}</p>
}
