import { NextRequest, NextResponse } from 'next/server'
import { defaultConfig } from './lib/config_lib'
import { SecurityConfig } from './type/config'

function setSecurityHeaders(response: NextResponse, config: SecurityConfig) {
  const { headers } = response

  if (config.hideHeaderPoweredBy) {
    headers.delete('x-powered-by')
  }

  if (config.xssProtection) {
    headers.set('X-XSS-Protection', '1; mode=block')
  }

  if (config.contentTypeOptions) {
    headers.set('X-Content-Type-Options', 'nosniff')
  }

  if (config.frameguard) {
    const { action, domain } = config.frameguard
    let value = action as string
    if (action === 'ALLOW-FROM' && domain) {
      value = `ALLOW-FROM ${domain}`
    }
    headers.set('X-Frame-Options', value)
  }

  if (config.contentSecurityPolicy) {
    headers.set(
      'Content-Security-Policy',
      "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
        "style-src 'self' 'unsafe-inline'; " +
        "img-src 'self' data: https:; " +
        "font-src 'self';"
    )
  }

  return response
}

// The middleware function
export async function middleware(request: NextRequest) {
  const config = defaultConfig
  const response = NextResponse.next()
  const url = new URL(request.url)

  const token = request.cookies.get('token')
  const { pathname } = new URL(request.url)

  const isProtectedRoute = pathname.startsWith('/admin')
  const isLoginPage = pathname === '/login'

  // Add response headers to prevent caching
  response.headers.set('Cache-Control', 'no-store, max-age=0')
  response.headers.set('Pragma', 'no-cache')
  response.headers.set('Expires', '-1')

  // Host validation
  if (config.allowedHosts?.length) {
    const host = request.headers.get('host')
    if (host && !config.allowedHosts.includes(host)) {
      return new NextResponse('Invalid Host header', { status: 400 })
    }
  }

  // Force SSL in production
  if (config.ssl && url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url)
  }

  // Case 1: No token and trying to access protected route
  if (!token && isProtectedRoute && pathname.includes('/admin/user')) {
    request.cookies.delete('token')

    const loginUrl = new URL('/login', request.url)
    // Add the original URL as a redirect parameter
    loginUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Case 2: Has token and trying to access login page
  if (token && isLoginPage) {
    // Check if there's a redirect URL in the query params
    const redirectUrl = new URL(request.url).searchParams.get('redirect')
    const targetUrl = redirectUrl ?? '/admin/dashboard'
    return NextResponse.redirect(new URL(targetUrl, request.url))
  }

  // Apply security headers
  return setSecurityHeaders(response, config)
}

// Matcher configuration
export const config = {
  matcher: [
    '/admin/:path*',
    '/login',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
