'use client'
import { useMemo, useCallback } from 'react'

// Define the Computed type
// interface Computed<T> {
//   readonly value: T
// }

interface WritableComputed<T> {
  value: T
}

// Type untuk useComputed hook
export default function useComputed<T>(
  getter: () => T,
  setter?: (newValue: T) => void
): WritableComputed<T> {
  // Compute value menggunakan useMemo
  const computedValue = useMemo(() => {
    try {
      return getter()
    } catch (error) {
      console.error('Error in computed getter:', error)
      return undefined as T
    }
  }, [getter])

  // Setter function
  const setterFn = useCallback(
    (newValue: T) => {
      if (setter) {
        setter(newValue)
      }
    },
    [setter]
  )

  // Reactive object dengan getter/setter
  const reactive = useMemo(() => {
    return {
      get value(): T {
        return computedValue
      },
      set value(newVal: T) {
        setterFn(newVal)
      },
    }
  }, [computedValue, setterFn])

  return reactive
}

// Read-only computed
// function useReadonlyComputed<T>(getter: () => T): Computed<T> {
//   const computedValue = useMemo(() => {
//     try {
//       return getter()
//     } catch (error) {
//       console.error('Error in computed getter:', error)
//       return undefined as T
//     }
//   }, [getter])

//   return useMemo(
//     () => ({
//       get value(): T {
//         return computedValue
//       },
//     }),
//     [computedValue]
//   )
// }
