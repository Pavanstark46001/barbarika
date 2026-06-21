'use client'
import { useRef, useCallback } from 'react'

export function useMagneticEffect(strength = 0.3) {
  const elementRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = elementRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
    },
    [strength]
  )

  const handleMouseLeave = useCallback(() => {
    const el = elementRef.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  }, [])

  const handleMouseEnter = useCallback(() => {
    const el = elementRef.current
    if (!el) return
    el.style.transition = 'transform 0.1s linear'
  }, [])

  const bind = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return
      ;(elementRef as React.MutableRefObject<HTMLElement | null>).current = node
      node.addEventListener('mousemove', handleMouseMove)
      node.addEventListener('mouseleave', handleMouseLeave)
      node.addEventListener('mouseenter', handleMouseEnter)
    },
    [handleMouseMove, handleMouseLeave, handleMouseEnter]
  )

  return { ref: elementRef, bind }
}
