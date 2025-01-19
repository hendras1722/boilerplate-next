'use client'

import { Input } from '@/components/ui/input'
import { useDebounce } from '@/composable/useDebounce'

export default function Debounce() {
  const [value, debouncedValue, setValue] = useDebounce('', 1000)

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded"
        placeholder="Type something..."
      />
      <div className="flex flex-col gap-2">
        <div>Current value: {value}</div>
        <div>Debounced value: {debouncedValue}</div>
      </div>
    </div>
  )
}
