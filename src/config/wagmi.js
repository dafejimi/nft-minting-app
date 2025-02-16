// src/config/wagmi.ts
import { sepolia } from 'wagmi/chains'
import { createConfig, http } from 'wagmi'
import { injected } from 'wagmi/connectors'

const INFURA_API_KEY = process.env.INFURA_API_KEY || '3d1651b4d2424c33b66e52cb4759cf44'

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${INFURA_API_KEY}`)
  },
  connectors: [
    injected({
      shimDisconnect: true,
    })
  ],
  storage: localStorage,
})