import React from 'react'

const UserContext= React.createContext({currentUser:null, setUser(){}})

export default  function UserProvider({children}) {  
  const [currentUser, setUser]=React.useState(null)
  return (
    <UserContext.Provider value={{currentUser, setUser}}>
        {children}
        </UserContext.Provider>
  )
}

export function useAppContext() {
    return React.useContext(UserContext);
  }