// components/HideSidebarButton.tsx
'use client'

import { useState } from 'react'

export default function HideSidebarButton() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const hideSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState)
    const sidebar = document.getElementById('sidebar_nav')
    const menu = document.getElementById('sidebar_menu')
    if (isSidebarOpen) {
      if (sidebar && menu) {
        menu.classList.remove('grid-cols-[200px_1fr]')
        menu.classList.add('grid-cols-[53px_1fr]')
        sidebar.classList.remove('grid-cols-[200px_1fr]')
        sidebar.classList.add('grid-cols-[53px_1fr]')
      }
    } else if (sidebar && menu) {
      menu.classList.remove('grid-cols-[53px_1fr]')
      menu.classList.add('grid-cols-[200px_1fr]')
      sidebar.classList.remove('grid-cols-[53px_1fr]')
      sidebar.classList.add('grid-cols-[200px_1fr]')
    }
  }

  return (
    <button onClick={hideSidebar} className="p-2 bg-gray-200 rounded">
      Hide
    </button>
  )
}
