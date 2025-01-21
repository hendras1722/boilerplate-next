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
        <div className="bg-red-100 border-2 border-red-300 p-3 rounded-lg text-red-500 font-bold">
          Note: for installing package or build project, add command: -f or
          --force (because of error by react-day-picker, but if you no need
          calendar pls delete component calendar in src/components/ui/calendar
          and delete or uninstall package react-day-picker in package.json)
        </div>
        <h4 className="my-5 font-semibold">Feature:</h4>
        <div>
          <details
            name="accordion"
            id="boating"
            open
            className="border border-black p-3"
          >
            <summary className="font-bold">Version 1.0.2 </summary>
            <p className="mt-3 text-sm font-normal">
              <ul className="list-disc ml-5">
                <li>update package @msa_cli/react_composable v1.0.5</li>
                <li>add composable onBeforeLeave</li>
                <li>
                  delete composable useLocalStorage move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useDebounce move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useBreakpoints move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useDraggable move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useFetch move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useBase64 move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useDateFormat move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useDebounce move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useElementBounding move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
                <li>
                  delete composable useNetwork move to package
                  <a
                    href="https://www.npmjs.com/package/@msa_cli/react-composable"
                    className="ml-2 text-blue-700"
                  >
                    @msa_cli/react-composable
                  </a>
                </li>
              </ul>
            </p>
          </details>
          <details
            name="accordion"
            id="boating"
            className="border border-black p-3 mt-3"
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
