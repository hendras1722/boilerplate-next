import Divider from '@/components/divider'
import Version from '@/components/Version'

export default function Dashboard() {
  return (
    <div className="dark:text-white">
      <h1 className="font-bold mb-3">
        Thank you for clone my boilerplate next 15
      </h1>
      <div className="mt-5">
        <h4 className="my-5 font-semibold">Feature:</h4>
        <Version />
        {/*   <div className="ml-5"></div> */}
      </div>
    </div>
  )
}

// 'use client'

// import { Else, ElseIf, If } from '@/components/if'
// import React, { useState } from 'react'

// const ConditionalDemo = () => {
//   const [count, setCount] = useState(5)

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Conditional Rendering Demo</h1>

//       <div className="mb-6">
//         <p className="mb-2">
//           Current count: <span className="font-bold">{count}</span>
//         </p>
//         <div className="flex gap-2">
//           <button
//             onClick={() => setCount((prev) => prev - 1)}
//             className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             Decrease
//           </button>
//           <button
//             onClick={() => setCount((prev) => prev + 1)}
//             className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             Increase
//           </button>
//         </div>
//       </div>

//       <div className="p-4 border rounded bg-gray-50">
//         <h2 className="font-semibold mb-3">Result:</h2>

//         <If condition={count > 10}>
//           <div className="p-3 bg-green-100 rounded border border-green-300">
//             <p className="text-green-700">Count is greater than 10</p>
//           </div>

//           <ElseIf condition={count > 5}>
//             <div className="p-3 bg-blue-100 rounded border border-blue-300">
//               <p className="text-blue-700">Count is between 6 and 10</p>
//             </div>
//           </ElseIf>

//           <ElseIf condition={count > 0}>
//             <div className="p-3 bg-yellow-100 rounded border border-yellow-300">
//               <p className="text-yellow-700">Count is between 1 and 5</p>
//             </div>
//           </ElseIf>

//           <Else>
//             <div className="p-3 bg-red-100 rounded border border-red-300">
//               <p className="text-red-700">Count is 0 or negative</p>
//             </div>
//           </Else>
//         </If>
//       </div>

//       <div className="mt-6 p-4 border rounded bg-gray-50">
//         <h2 className="font-semibold mb-3">Multiple independent conditions:</h2>

//         <If condition={count % 2 === 0}>
//           <p className="text-purple-600 mb-2">Count is even</p>

//           <ElseIf condition={count % 2 === 1}>
//             <p className="text-indigo-600 mb-2">Count is odd</p>
//           </ElseIf>
//         </If>

//         <If condition={count > 0}>
//           <p className="text-teal-600">Count is positive</p>

//           <ElseIf condition={count < 0}>
//             <p className="text-pink-600">Count is negative</p>
//           </ElseIf>

//           <Else>
//             <p className="text-gray-600">Count is zero</p>
//           </Else>
//         </If>
//       </div>
//     </div>
//   )
// }

// export default ConditionalDemo
