'use client'

import StyledComponentsRegistry from '@/app/registry'
import ReduxProvider from '@/lib/providers/ReduxProvider'
import type { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReduxProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ReduxProvider>
  )
}
