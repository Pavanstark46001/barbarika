'use client'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps {
  src?: string
  alt: string
  size?: AvatarSize
  fallback?: string
  className?: string
}

const sizeMap: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: 'w-6 h-6',   text: 'text-xs' },
  sm: { container: 'w-8 h-8',   text: 'text-xs' },
  md: { container: 'w-10 h-10', text: 'text-sm' },
  lg: { container: 'w-14 h-14', text: 'text-base' },
  xl: { container: 'w-20 h-20', text: 'text-xl' },
}

export function Avatar({ src, alt, size = 'md', fallback, className }: AvatarProps) {
  const [imgError, setImgError] = useState(false)
  const { container, text } = sizeMap[size]
  const initials = (fallback || alt)
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const showImage = src && !imgError

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden flex-shrink-0',
        'bg-gradient-to-br from-primary to-accent',
        container,
        className,
      )}
    >
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className={cn(
            'absolute inset-0 flex items-center justify-center text-white font-semibold',
            text,
          )}
        >
          {initials}
        </span>
      )}
    </div>
  )
}
