'use client'

import { useNetwork } from '@/composable/useNetwork'

export default function NetworkStatus() {
  const network = useNetwork()

  return (
    <div>
      <p>Online: {network.isOnline ? 'Yes' : 'No'}</p>
      <p>Connection Type: {network.type}</p>
      <p>Network Speed: {network.effectiveType}</p>
      <p>network: {JSON.stringify(network, null, 2)}</p>
    </div>
  )
}
