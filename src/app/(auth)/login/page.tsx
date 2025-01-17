'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  // async function onSubmit123(values: FormData) {
  //   const pair = values.entries()
  //   console.log(values.get('email'), pair)

  //   const res = await fetch('/api/data?name=123', {
  //     method: 'POST',
  //     body: values,
  //   })
  // }
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[400px] h-[400px] bg-white border border-gray-100 rounded-lg flex flex-col items-center">
        <div className=" mt-5 pb-5">
          <h2>Login</h2>
        </div>
        <div className="flex-1">
          {/* <form action={onSubmit123}>
            <input id="email" name="email" />
            <button type="submit">Submit</button>
          </form> */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
