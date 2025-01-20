'use client'

import { Button } from '@/components/ui/button'
import { useFetch } from '@msa_cli/react-composable'
import { FaSpinner } from 'react-icons/fa6'

export interface Jsonplaceholder {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function FetchData() {
  // Basic JSON GET request
  const { data, error, isFetching, refetch } = useFetch<Jsonplaceholder[]>(
    '/js-holder/todos/1',
    {},
    {
      immediate: false, // for mounted when immediete true
    }
  )

  // POST request with JSON payload
  // const { data, execute } = useFetch<User>(
  //   '/api/users',
  //   {}, // fetch options
  //   {
  //     method: 'POST',
  //     payload: { name: 'John' },
  //     immediate: false,
  //   }
  // )

  // Text response
  // const { data } = useFetch<string>('/api/text', {}, { responseType: 'text' })

  // With all options
  // const { data, error, refetch } = useFetch<User>(
  //   '/api/users/1',
  //   {
  //     headers: {
  //       Authorization: 'Bearer token',
  //     },
  //   },
  //   {
  //     method: 'PUT',
  //     responseType: 'json',
  //     payload: { name: 'John' },
  //     immediate: true,
  //     timeout: 5000,
  //     updateDataOnError: false,
  //     beforeFetch: async (ctx) => {
  //       // Modify request before sending
  //       return ctx
  //     },
  //     afterFetch: async (ctx) => {
  //       // Process response data
  //       return ctx
  //     },
  //   }
  // )
  return (
    <div>
      <div className="mb-5 flex gap-3 items-center">
        <Button variant={'destructive'} onClick={refetch}>
          Fetch
        </Button>
        <div>{isFetching && <FaSpinner className="animate-spin" />}</div>
      </div>

      <div>{error && 'Error Fetching'}</div>
      <div>{data && JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
