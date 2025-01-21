import { useCallback, useEffect, useRef } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export function useBeforeRouteLeave(guardCallback) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const nextPathRef = useRef<string | null>(null)

  const getCurrentLocation = () => ({
    path: pathname,
    searchParams: Object.fromEntries(searchParams.entries()),
  })

  const handleBeforeUnload = useCallback(
    (event) => {
      const shouldBlock = guardCallback(
        { path: window.location.pathname }, // Use actual destination from window
        getCurrentLocation(),
        (allow) => {
          if (!allow) {
            event.preventDefault()
            event.returnValue = ''
            return ''
          }
          return undefined
        }
      )

      if (shouldBlock === false) {
        event.preventDefault()
        event.returnValue = ''
        return ''
      }
    },
    [guardCallback, pathname, searchParams]
  )

  useEffect(() => {
    const interceptNavigation = async (e) => {
      if (!e?.target?.closest('a[href]')) return

      const link = e.target.closest('a[href]')
      const href = link.getAttribute('href')

      // Skip external links
      if (link.target === '_blank' || link.origin !== window.location.origin) {
        return
      }

      e.preventDefault()

      // Parse the href to get the path and search params
      const url = new URL(href, window.location.origin)
      const to = {
        path: url.pathname,
        searchParams: Object.fromEntries(url.searchParams.entries()),
      }

      const from = getCurrentLocation()

      try {
        await new Promise((resolve, reject) => {
          const next = (redirectOrBoolean) => {
            if (redirectOrBoolean === false) {
              reject(new Error('Navigation cancelled'))
            } else if (typeof redirectOrBoolean === 'string') {
              nextPathRef.current = redirectOrBoolean
              resolve(false)
              setTimeout(() => {
                router.push(redirectOrBoolean)
              }, 15)
            } else if (
              typeof redirectOrBoolean === 'object' &&
              redirectOrBoolean !== null
            ) {
              const queryString = new URLSearchParams(
                redirectOrBoolean.query
              ).toString()
              const url = `${redirectOrBoolean.path || '/'}${
                queryString ? `?${queryString}` : ''
              }${redirectOrBoolean.hash || ''}`
              nextPathRef.current = url
              resolve(false)
              setTimeout(() => {
                if (redirectOrBoolean.replace) {
                  router.replace(url)
                } else {
                  router.push(url)
                }
              }, 15)
            } else {
              nextPathRef.current = href
              resolve(true)
              router.push(href)
            }
          }

          guardCallback(to, from, next)
        })
      } catch (error) {
        // Navigation was cancelled
        console.debug('Navigation cancelled:', error)
      }
    }

    // Add event listeners
    document.addEventListener('click', interceptNavigation)
    window.addEventListener('beforeunload', handleBeforeUnload)

    // Watch for pathname changes to reset nextPathRef
    if (
      nextPathRef.current &&
      pathname === new URL(nextPathRef.current, window.location.origin).pathname
    ) {
      nextPathRef.current = null
    }

    return () => {
      document.removeEventListener('click', interceptNavigation)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [router, pathname, searchParams, guardCallback, handleBeforeUnload])
}
