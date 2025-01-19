import { useState, useEffect, useCallback } from 'react'

interface UseBase64Options {
  /**
   * Output as Data URL format
   *
   * @default true
   */
  dataUrl?: boolean
}

interface ToDataURLOptions extends UseBase64Options {
  /**
   * MIME type
   */
  type?: string
  /**
   * Image quality of jpeg or webp
   */
  quality?: number
}

interface UseBase64ObjectOptions<T> extends UseBase64Options {
  serializer?: (v: T) => string
}

interface UseBase64Return {
  base64: string
  loading: boolean
  error: Error | null
  execute: () => Promise<string>
}

// Helper functions
const imgLoaded = (img: HTMLImageElement): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => resolve()
      img.onerror = reject
    } else {
      resolve()
    }
  })
}

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = (e) => {
      resolve(e.target?.result as string)
    }
    fr.onerror = reject
    fr.readAsDataURL(blob)
  })
}

const getDefaultSerialization = (target: any): ((v: any) => string) => {
  return (v: any) => JSON.stringify(v)
}

// Main hook
function useBase64<T>(
  target:
    | string
    | Blob
    | ArrayBuffer
    | HTMLCanvasElement
    | HTMLImageElement
    | T[]
    | Record<string, unknown>
    | Map<string, unknown>
    | Set<unknown>,
  options?: UseBase64Options | ToDataURLOptions | UseBase64ObjectOptions<T>
): UseBase64Return {
  const [base64, setBase64] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(async (): Promise<string> => {
    setLoading(true)
    setError(null)

    try {
      let result: string

      if (target == null) {
        result = ''
      } else if (typeof target === 'string') {
        result = await blobToBase64(new Blob([target], { type: 'text/plain' }))
      } else if (target instanceof Blob) {
        result = await blobToBase64(target)
      } else if (target instanceof ArrayBuffer) {
        result = window.btoa(String.fromCharCode(...new Uint8Array(target)))
      } else if (target instanceof HTMLCanvasElement) {
        const dataUrlOptions = options as ToDataURLOptions
        result = target.toDataURL(dataUrlOptions?.type, dataUrlOptions?.quality)
      } else if (target instanceof HTMLImageElement) {
        const img = target.cloneNode(false) as HTMLImageElement
        img.crossOrigin = 'Anonymous'
        await imgLoaded(img)

        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) throw new Error('Failed to get canvas context')

        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        const dataUrlOptions = options as ToDataURLOptions
        result = canvas.toDataURL(dataUrlOptions?.type, dataUrlOptions?.quality)
      } else if (typeof target === 'object') {
        const objectOptions = options as UseBase64ObjectOptions<T>
        const serializer =
          objectOptions?.serializer || getDefaultSerialization(target)
        const serialized = serializer(target)
        result = await blobToBase64(
          new Blob([serialized], { type: 'application/json' })
        )
      } else {
        throw new Error('Target is of unsupported type')
      }

      const finalResult =
        options?.dataUrl === false
          ? result.replace(/^data:.*?;base64,/, '')
          : result

      setBase64(finalResult)
      setLoading(false)
      return finalResult
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('Unknown error occurred')
      setError(error)
      setLoading(false)
      throw error
    }
  }, [target, options])

  useEffect(() => {
    execute().catch(() => {}) // Execute on mount and when dependencies change
  }, [execute])

  return {
    base64,
    loading,
    error,
    execute,
  }
}

export default useBase64
