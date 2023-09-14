import React from 'react'
import { useParams } from 'react-router-dom' 
function UserDetails() {
  const params=useParams()
  const userId=params.userId
  return (
    <div>
      this is user {userId} details
    </div>
  )
}

export default UserDetails
