'use client'
import { useStorage } from '@/composable/useLocalStorage'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function useLocalStorage() {
  const { setTheme } = useTheme()

  // Basic usage with localStorage
  // const [value, setValue, removeValue] = useStorage('my-key', 'default value')

  // With sessionStorage and options
  const [data, setData, removeData] = useStorage(
    'user-preferences',
    { theme: 'light' },
    sessionStorage,
    {
      mergeDefaults: true,
      onError: (e) => console.warn('Storage error:', e),
    }
  )

  useEffect(() => {
    setTheme(data.theme)
  }, [data])

  const handleIncrementVisits = () => {
    setData((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light',
    }))
  }
  const handleResetAll = () => {
    removeData()
  }
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-bold">Session Storage - Visit Count</h2>
      <p>Visits: {data.theme}</p>
      <button
        onClick={handleIncrementVisits}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Change Theme
      </button>
      <button
        onClick={handleResetAll}
        className="bg-red-500 text-white px-4 py-2 rounded ml-4"
      >
        Reset
      </button>
    </div>
  )
}
