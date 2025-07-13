'use client'

import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { SquaresExclude, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Else, If } from '../atoms/if'

export default function ListMenuSidebar({
  sidebarCollapsed,
  handleLogout,
}: {
  readonly sidebarCollapsed: boolean
  readonly handleLogout: () => void
}) {
  const pathName = usePathname()
  return (
    <nav className="!px-2 !py-4 space-y-1 ">
      <div className="space-y-1">
        <If condition={!sidebarCollapsed}>
          <Button
            variant={pathName === '/admin/product' ? 'contained' : 'text'}
            href="/admin/product"
            startIcon={<SquaresExclude />}
            size="small"
            className={`!shadow-none !w-full flex !justify-start`}
            color={pathName === '/admin/product' ? 'primary' : 'inherit'}
            classes={{
              root:
                pathName === '/admin/product'
                  ? 'group flex items-center gap-1 !px-3 !py-2 text-sm font-medium rounded-lg transition-colors duration-150 !text-black hover:!bg-primary-600 !text-white'
                  : '!text-black ',
            }}
          >
            {!sidebarCollapsed && 'product'}
          </Button>
          <Else key="else-1">
            <IconButton
              href="/admin/product"
              aria-label="dashboard"
              color={pathName === '/admin/product' ? 'primary' : 'default'}
            >
              <SquaresExclude />
            </IconButton>
          </Else>
        </If>
      </div>

      <div className="space-y-1">
        <If condition={!sidebarCollapsed}>
          <Button
            variant={pathName === '/admin/logout' ? 'contained' : 'text'}
            onClick={handleLogout}
            startIcon={<LogOut />}
            size="small"
            className={`!shadow-none !w-full flex !justify-start`}
            classes={{
              root:
                pathName === '/admin/logout'
                  ? 'group flex items-center gap-1 !px-3 !py-2 text-sm font-medium rounded-lg transition-colors duration-150 !text-black hover:!bg-primary-600 !text-white'
                  : '!text-black  !px-3 !py-2',
            }}
          >
            {!sidebarCollapsed && 'logout'}
          </Button>
          <Else key="else-1">
            <IconButton onClick={handleLogout} aria-label="dashboard">
              <LogOut />
            </IconButton>
          </Else>
        </If>
      </div>
    </nav>
  )
}
