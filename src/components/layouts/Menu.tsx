'use client'

import { useRoute } from '@/composable/useRoute'
import MenuSidebar from '../MenuSidebar'
import { FaHouse, FaTable } from 'react-icons/fa6'

export default function ListMenu() {
  const route = useRoute()
  const menu = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: () => <FaHouse /> },
    { name: 'Table', href: '/admin/table', icon: () => <FaTable /> },
  ]
  return <MenuSidebar menu={menu} route={route} />
}
