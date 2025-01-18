'use client'

import { useRoute } from '@/composable/useRoute'
import MenuSidebar from '../MenuSidebar'
import {
  FaComputerMouse,
  FaDatabase,
  FaHouse,
  FaTable,
  FaTarpDroplet,
} from 'react-icons/fa6'

export default function ListMenu() {
  const route = useRoute()
  const menu = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: () => <FaHouse /> },
    { name: 'Table', href: '/admin/table', icon: () => <FaTable /> },
    {
      name: 'Draggable',
      href: '/admin/draggable',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'LocalStorage',
      href: '/admin/localstorage',
      icon: () => <FaDatabase />,
    },
    {
      name: 'Dropzone',
      href: '/admin/dropzone',
      icon: () => <FaTarpDroplet />,
    },
  ]
  return <MenuSidebar menu={menu} route={route} />
}
