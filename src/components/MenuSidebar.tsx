'use client'

import { FaHouse } from 'react-icons/fa6'
import { cn } from '@/utils/lib'
import { useRoute } from '@/utils/useRoute'
import ArrayMap from './ArrayMap'
import RouteLink from '@/composable/route'

export default function MenuSidebar() {
  const menu = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Menu 2', href: '/admin/user' },
  ]
  const route = useRoute()
  return (
    <div className="mt-8 relative">
      <ArrayMap
        of={menu}
        render={(item, index) => (
          <RouteLink
            key={index}
            href={item.href}
            className={cn(
              'py-3 px-5 first:mt-0 mt-2 flex gap-3 items-center cursor-pointer ',
              route.pathname === item.href
                ? 'bg-gray-200 border-l-4 border-gray-400 dark:bg-transparent dark:border-transparent dark:text-white'
                : 'hover:bg-gray-100  hover:border-l-4 hover:border-gray-400 hover:dark:bg-transparent hover:dark:border-none hover:dark:border-transparent '
            )}
            active={route.pathname === item.href}
          >
            <div
              className={cn(
                'text-nowrap text-lg flex w-full h-full items-center gap-3 pl-1'
              )}
            >
              <div>
                <FaHouse />
              </div>
              {item.name}
            </div>
          </RouteLink>
        )}
      />
    </div>
  )
}
