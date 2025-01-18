'use client'

import { useEffect, useRef } from 'react'

const debounce = <T extends (...args: any) => any>(func: T, wait?: number) => {
  let timeout: NodeJS.Timeout | number | undefined

  return (...args: any) => {
    const later = () => {
      timeout = undefined

      func(...args)
    }

    clearTimeout(timeout as number | undefined)

    timeout = setTimeout(later, wait)
  }
}

export const useDebounce = <T extends Array<any>>(
  func: (...args: [...T]) => void,
  args: T,
  wait?: number,
  funcBeforeDebounce?: () => void
) => {
  const debounceProcess = useRef(debounce(func, wait))

  const listener = () => {
    funcBeforeDebounce?.()
    debounceProcess.current(...args)
  }

  useEffect(listener, [...args])
}
