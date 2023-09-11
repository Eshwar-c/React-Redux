import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderSummary() {
  const navigate=useNavigate()
  return (
    <>
    <div>
      order confirmed !!!
    </div>
    <button onClick={()=>navigate('home')}>go back!</button>
    </>
    
  )
}

export default OrderSummary
