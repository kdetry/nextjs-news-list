'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { themeAtom } from '@/state/themeAtom'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme] = useAtom(themeAtom)

  useEffect(() => {
    const root = window.document.documentElement
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.remove('light', 'dark')
      root.classList.add(systemTheme)
    } else {
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
    }
  }, [theme])

  return <>{children}</>
} 