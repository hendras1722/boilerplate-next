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
      <div className="mt-5">
        <h4 className="mb-5 font-semibold">Feature:</h4>
        <div>
          <details
            name="accordion"
            id="boating"
            open
            className="border border-black p-3"
          >
            <summary className="font-bold">Version 1.0.1 </summary>
            <p className="mt-3 text-sm font-normal">
              <ul className="list-disc ml-5">
                <li>fixing bug rewrite production </li>
                <li>add composable useLocalStorage </li>
                <li>add composable useDebounce </li>
                <li>add composable useBreakpoints </li>
                <li>add composable useDraggable </li>
                <li>add composable useFetch </li>
                <li>add composable useBase64 </li>
                <li>add composable useDateFormat </li>
                <li>add composable useDebounce </li>
                <li>add composable useElementBounding </li>
                <li>add composable useNetwork </li>
                <li>add composable useFetch </li>
              </ul>
            </p>
          </details>
          <details
            name="accordion"
            id="boating"
            className="border border-black p-3 mt-3"
          >
            <summary className="font-bold">Version 1.0.0</summary>
            <p className="mt-3 text-sm font-normal">
              <ul className="list-disc ml-5">
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
              </ul>
            </p>
          </details>
        </div>
        {/*   <div className="ml-5"></div> */}
      </div>
    </div>
  )
}
