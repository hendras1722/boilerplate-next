'use client'

import { useRoute } from '@/composable/useRoute'
import MenuSidebar from '../MenuSidebar'
import {
  FaCalendarDays,
  FaClock,
  FaComputerMouse,
  FaDatabase,
  FaDownLeftAndUpRightToCenter,
  FaFile,
  FaHouse,
  FaNetworkWired,
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
    {
      name: 'Base64',
      href: '/admin/base64',
      icon: () => <FaFile />,
    },
    {
      name: 'Debounce',
      href: '/admin/debounce',
      icon: () => <FaClock />,
    },
    {
      name: 'Format Date',
      href: '/admin/formatDate',
      icon: () => <FaCalendarDays />,
    },
    {
      name: 'network',
      href: '/admin/network',
      icon: () => <FaNetworkWired />,
    },
    {
      name: 'Fetching Data',
      href: '/admin/fetch',
      icon: () => <FaDownLeftAndUpRightToCenter />,
    },
  ]
  return <MenuSidebar menu={menu} route={route} />
}
