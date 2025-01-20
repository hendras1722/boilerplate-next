'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
          onChange={(e) => setStateName(e.target.value)}
          value={stateName}
        />
        <Textarea
          placeholder="Value bas64"
          onChange={() => {}}
          name=""
          id=""
          disabled={true}
          value={base64}
          rows={10}
        />
      </div>
      <div className="mt-5">
        File: <Input placeholder="File" type="file" onChange={handleChange} />
        {!loading && <div className="my-5">Please Wait ...</div>}
        <Textarea
          placeholder="Value bas64"
          onChange={() => {}}
          name=""
          id=""
          disabled={true}
          value={base64File}
          rows={10}
        />
      </div>
    </div>
  )
}
