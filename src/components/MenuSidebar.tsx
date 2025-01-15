'use client'

import { useRoute } from '../../utils/useRoute'
import ArrayMap from './ArrayMap'
import RouteLink from './RouteLink'

export default function MenuSidebar() {
  const menu = [
    { name: '!! Dashboard', href: '/admin/dashboard' },
    { name: 'Menu 2', href: '/admin/user' },
  ]
  const route = useRoute()
  return (
    <ArrayMap
      of={menu}
      render={(item, index) => (
        <div className="py-3 px-3 first:mt-0 " key={index}>
          <RouteLink
            href={item.href}
            className="text-nowrap text-lg"
            active={route.pathname === item.href}
          >
            <span className="w-full ">{item.name}</span>
          </RouteLink>
        </div>
      )}
    />
  )
}
