'use client'

import Divider from '@/components/divider'
import DarkMode from '@/components/DarkMode'
import { useStore } from '@/store/todo_list'

export default function Dashboard() {
  const { count, inc } = useStore()
  return (
    <div className="dark:text-white">
      <h1 className="font-bold mb-3">
        Thank you for clone my boilerplate next 15
      </h1>
      <Divider></Divider>
      <div>
        <h2 className="my-3 font-semibold">Feature</h2>
        <div className="ml-5">
          <ul className="list-disc">
            <li>
              Store zustand support{' '}
              <button onClick={() => inc('plus')}>+</button>{' '}
              <span>{count}</span>{' '}
              <button onClick={() => inc('minus')}>-</button>
            </li>
            <li>Component mapping using components</li>
            <li>Condition if else using components</li>
            <li>Talwinds support</li>
            <li>Login style</li>
            <li>Settings rewrite api</li>
            <li>Settings next image</li>
            <li>Settings middleware</li>
            <li>
              Support dark mode <DarkMode />
            </li>
            <li>Next security settings in middleware</li>
            <li>Support using shadcn/ui</li>
            <li>Form using react hook form</li>
            <li>Support React Icon</li>
            <li>Format date using date-fns</li>
            <li>Component table dynamic using shadcn/ui</li>
            <li>
              add composable (useLocalStorage, useDebounce, useBreakpoints,
              useDraggable, useFetch){' '}
              <span className="text-red-500 font-bold">Version 1.0.1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
