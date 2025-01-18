'use client'

import { useFetch } from '@/composable/useFetch'

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
      immediate: false, // Fetch langsung dijalankan
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
      <div>
        <button onClick={refetch}>Fetch</button>
      </div>
      <div>{isFetching && 'loading'}</div>
      <div>{error && 'Error Fetching'}</div>
      <div>{data && JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
