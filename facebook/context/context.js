import { createContext } from 'react'

export const FacebookContext = createContext()

export const FacebookProvider = ({ children }) => {
  const requestToCreateUserProfile = async (walletAddress, name, event) => {
    try {
      await fetch(`/api/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userWalletAddress: walletAddress,
          name: name,
          profileImage: event.target[1].value,
        }),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FacebookContext.Provider
      value={{
        requestToCreateUserProfile,
      }}
    >
      {children}
    </FacebookContext.Provider>
  )
}
