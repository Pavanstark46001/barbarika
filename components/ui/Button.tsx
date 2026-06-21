'use client'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'glow' | 'destructive'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl active:scale-[0.98] ' +
    'relative overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-110%] before:skew-x-12 hover:before:translate-x-[110%] before:transition-transform before:duration-500',
  glow:
    'gradient-primary text-white hover:opacity-90 glow-primary hover:glow-accent shadow-xl ' +
    'active:scale-[0.98] transition-all duration-300',
  secondary:
    'bg-surface-2 text-foreground hover:bg-border border border-border ' +
    'hover:border-muted-fg active:scale-[0.98]',
  ghost:
    'bg-transparent text-foreground hover:bg-surface-2 active:scale-[0.98]',
  outline:
    'bg-transparent text-foreground border border-border hover:border-primary hover:text-primary ' +
    'active:scale-[0.98]',
  destructive:
    'bg-rose text-white hover:bg-rose/90 active:scale-[0.98]',
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'text-xs px-3 py-1.5 rounded-md gap-1.5',
  sm: 'text-sm px-4 py-2 rounded-lg gap-2',
  md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
  lg: 'text-base px-7 py-3 rounded-xl gap-2.5',
  xl: 'text-lg px-9 py-4 rounded-xl gap-3',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-semibold cursor-pointer',
          'transition-all duration-200 select-none focus-ring',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
