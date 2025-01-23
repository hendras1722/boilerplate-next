'use client'

import { cn } from '@/utils/lib'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Body({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <body className={cn(`${poppins.variable} antialiased`, className)}>
      {children}
    </body>
  )
}
