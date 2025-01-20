'use client'

import React, { useEffect, useRef } from 'react'
import {
  useDraggable,
  useElementBounding,
  useScreenlock,
} from '@msa_cli/react-composable'

export default function MyDraggableComponent() {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { width, height } = useElementBounding(
    containerRef as React.RefObject<HTMLElement>
  )
  const body = document.getElementsByTagName('body')[0]
  const [isScreenLocked, setScreenLocked] = useScreenlock(body)

  useEffect(() => {
    setScreenLocked(true)
    return () => {
      setScreenLocked(false)
    }
  }, [isScreenLocked])

  const {
    x = 10,
    y = 10,
    isDragging,
  } = useDraggable(elementRef as React.RefObject<HTMLElement>, {
    boundaries: {
      minX: 10,
      maxX: width - 117,
      minY: 10,
      maxY: height - 54,
    },
    onStart: (pos) => console.log('Drag started at:', pos),
    onMove: (pos) => console.log('Dragging to:', pos),
    onEnd: (pos) => console.log('Drag ended at:', pos),
  })

  return (
    <div>
      <div
        ref={containerRef}
        className="relative h-80 flex justify-center items-center bg-gray-200 rounded-lg"
      >
        <div
          ref={elementRef}
          className="bg-red-300 text-white font-bold py-2 px-4 rounded text-nowrap"
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          Drag me!
        </div>
        Container
      </div>

      <div>
        <div>X: {x}</div> <div>Y: {y}</div>
      </div>
    </div>
  )
}
