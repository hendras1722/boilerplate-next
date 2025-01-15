import Link from 'next/link'
import { cn } from '../../utils/lib'

export default function RouteLink({
  href,
  children,
  active,
  className,
}: Readonly<{
  href: string
  children: React.ReactNode
  active?: boolean
  className?: string
}>) {
  console.log(active)
  const cnActive = active ? 'bg-blue-600 text-white font-bold' : ''
  return (
    <Link href={href} className={cn(cnActive, ' no-underline ', className)}>
      {children}
    </Link>
  )
}
