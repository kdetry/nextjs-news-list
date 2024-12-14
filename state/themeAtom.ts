import { atomWithStorage } from 'jotai/utils'

type Theme = 'light' | 'dark' | 'system'

export const themeAtom = atomWithStorage<Theme>('theme', 'system')
