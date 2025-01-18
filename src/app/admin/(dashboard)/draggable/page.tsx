'use client'

import React, { useRef } from 'react'
import { useDraggable } from '@/composable/useDraggable'

export default function MyDraggableComponent() {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const {
    x = 10,
    y = 10,
    isDragging,
  } = useDraggable(elementRef as React.RefObject<HTMLElement>, {
    boundaries: {
      minX: 10,
      maxX: 930,
      minY: 10,
      maxY: 270,
    },
    onStart: (pos) => console.log('Drag started at:', pos),
    onMove: (pos) => console.log('Dragging to:', pos),
    onEnd: (pos) => console.log('Drag ended at:', pos),
  })

  return (
    <div>
      <div className="relative h-80 flex justify-center items-center bg-gray-200 rounded-lg">
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
