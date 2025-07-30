import React from 'react'
import Usercontext from './UserContext'
import Profile from '../Profile';
const UserContextProvider = () => {
     const user = { name: "Pratap", age: 25 };
  return (
    <Usercontext.Provider  value={user}>
      <Profile />
    </Usercontext.Provider>
  )
}

export default UserContextProvider
