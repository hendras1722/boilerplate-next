'use client'

import { useBeforeRouteLeave } from '@/composable/onBeforeLeave'

export default function BeforeRouteLeave() {
  const isDirty = true
  useBeforeRouteLeave((to, from, next) => {
    console.log('Navigating from:', from.path)
    console.log('Navigating to:', to) // Now shows correct destination path

    if (isDirty) {
      const userConfirmed = window.confirm(
        `You have unsaved changes. Do you want to navigate to ${to.path}?`
      )
      next(userConfirmed)
    } else {
      next()
    }
  })

  return (
    <div>
      <div>Please move to another route</div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-300 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { useBeforeRouteLeave } from '@/composable/onBeforeLeave'
import { useIdle } from '@/composable/useIdle'
import { useState } from 'react'

export default function FormPage() {
  const [isDirty, setIsDirty] = useState(false)
  const { idle, lastActive, reset } = useIdle(5000) // 60 seconds

  useBeforeRouteLeave((to, from, next) => {
    console.log('Navigating from:', from.path)
    console.log('Navigating to:', to) // Now shows correct destination path

    if (isDirty) {
      const userConfirmed = window.confirm(
        'You have unsaved changes. Do you want to navigate to '+ to.path + ' ?'
      )
      next(userConfirmed)
    } else {
      next()
    }
  })

  return (
    <div>
    {/* you can using modal */}
    </div>
  )
}

      `}</code>
      </pre>
    </div>
  )
}
