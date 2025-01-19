'use client'

import ArrayMap from '@/components/ArrayMap'
import { ConditionProvider, Else, If } from '@/components/if'
import { useDropZone } from '@/composable/useDropzone'
import { useRef } from 'react'

export default function MyDropZone() {
  const dropZoneRef = useRef<HTMLDivElement | null>(null)
  const { files, isOverDropZone } = useDropZone(
    dropZoneRef as React.RefObject<HTMLElement>,
    {
      onDrop: (files) => console.log('Dropped files:', files),
      // dataTypes: ['image/jpeg', 'image/png'],
    }
  )

  function renderFile() {
    if (!files) {
      return (
        <div className="dark:text-black">
          <ConditionProvider initialCondition={!isOverDropZone}>
            <If condition={!isOverDropZone}>
              <p>Drop files here</p>
            </If>
            <Else>
              <p>Drag and drop files here</p>
            </Else>
          </ConditionProvider>
        </div>
      )
    }
    return (
      <ConditionProvider initialCondition={(files || []).length > 0}>
        <If condition={(files || []).length > 0}>
          <ArrayMap
            of={files}
            render={(file, index) => (
              <div key={index}>
                <p>Name: {file?.name}</p>
                <p>Size: {file?.size}</p>
                <p>Type: {file?.type}</p>
                <p>Last modified: {file?.lastModified}</p>
              </div>
            )}
          />
        </If>
      </ConditionProvider>
    )
  }

  return (
    <div
      ref={dropZoneRef}
      style={{
        border: '2px dashed #ccc',
        padding: '20px',
        background: isOverDropZone ? '#f0f0f0' : 'white',
      }}
    >
      <div className="flex flex-wrap justify-center items-center">
        {renderFile()}
      </div>
    </div>
  )
}
