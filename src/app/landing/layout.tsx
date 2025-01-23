import Body from '@/components/layouts/Body'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Body>{children}</Body>
    </html>
  )
}
