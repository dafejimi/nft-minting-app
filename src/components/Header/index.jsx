import React, { useEffect, useCallback } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { Button, Img } from './..'

const Header = ({ ...props }) => {
  const { address, isConnected, chain } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  // Debug logging
  useEffect(() => {
    console.log('Connection State:', { isConnected, address, chainId: chain?.id })
  }, [isConnected, address, chain])

  // Clean up storage on component mount
  useEffect(() => {
    try {
      // Only remove cached data, keep essential connection info
      const keysToRemove = Object.keys(localStorage)
        .filter(key => key.startsWith('wagmi.cache'))
      keysToRemove.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.error('Storage cleanup error:', error)
    }
  }, [])

  const handleConnection = useCallback(async () => {
    try {
      if (isConnected) {
        await disconnect()
      } else {
        await connect({ connector: injected() })
      }
    } catch (error) {
      console.error('Connection error:', error)
      // If we hit storage quota, clear and retry
      if (error.message?.includes('QUOTA_BYTES')) {
        try {
          Object.keys(localStorage)
            .filter(key => key.startsWith('wagmi.'))
            .forEach(key => localStorage.removeItem(key))
          
          if (!isConnected) {
            await connect({ connector: injected() })
          }
        } catch (retryError) {
          console.error('Retry connection failed:', retryError)
        }
      }
    }
  }, [isConnected, connect, disconnect])

  return (
    <header
      {...props}
      className={`
        ${props.className} flex justify-center items-center
        border-blue_gray-900 border-b border-solid bg-black-900_cc
      `}
    >
      <div className="container-xs flex justify-center md:px-5">
        <div className="flex w-full items-center justify-between gap-5 px-6 py-4 sm:px-5">
          <Img
            src="images/Frame.svg"
            alt="Div"
            className="h-[28px] w-[10%] object-contain"
          />
          {!isConnected ? (
            <Button
              onClick={handleConnection}
              size="xs"
              color="pink_300_deep_purple_A200"
              leftIcon={
                <Img
                  src="images/img_frame.svg"
                  alt="Frame"
                  className="mb-1 mt-0.5 h-[16px] w-[16px] object-contain"
                />
              }
              className="min-w-[178px] gap-2 rounded-[20px]"
            >
              Connect Wallet
            </Button>
          ) : chain?.unsupported ? (
            <Button
              onClick={handleConnection}
              size="xs"
              color="pink_300_deep_purple_A200"
              className="min-w-[178px] gap-2 rounded-[20px]"
            >
              Wrong Network
            </Button>
          ) : (
            <Button
              onClick={handleConnection}
              size="xs"
              color="pink_300_deep_purple_A200"
              className="min-w-[178px] gap-2 rounded-[20px]"
            >
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header