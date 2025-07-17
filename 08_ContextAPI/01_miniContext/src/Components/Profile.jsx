import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  
  const {user}=useContext(UserContext)

    if(!user) return  "please login"

    return <div>Welcome{user.username}</div>
  
}

export default Profile