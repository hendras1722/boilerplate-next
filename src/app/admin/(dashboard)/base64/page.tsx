'use client'

import { Input } from '@/components/ui/input'
import useBase64 from '@/composable/useBase64'
import { useState } from 'react'

export default function Base64() {
  const [stateName, setStateName] = useState('Hello World')
  const { base64 } = useBase64(stateName)
  const [stateFile, setStateFile] = useState<Blob | null>(null)
  const { base64: base64File, loading } = useBase64(stateFile || '')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files) {
      setStateFile(files[0])
    }
  }

  return (
    <div>
      <div>
        text:{' '}
        <Input
          placeholder="input"
          className="ml-5"
          onChange={(e) => setStateName(e.target.value)}
          value={stateName}
        />
        {base64}
      </div>
      <div className="mt-5">
        File: <Input placeholder="File" type="file" onChange={handleChange} />
        {!loading && (
          <Input
            placeholder="Value bas64"
            type="text"
            onChange={() => {}}
            name=""
            id=""
            disabled={true}
            value={base64File}
          />
        )}
      </div>
    </div>
  )
}
