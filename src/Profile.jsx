import React, {useContext} from 'react'
import Usercontext from './context/UserContext'

function Profile() {
    const user = useContext(Usercontext)
  return (
    <div>
      <h2>User: {user.name}, Age: {user.age}</h2>
    </div>
  )
}

export default Profile
