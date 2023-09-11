import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const navLinkStyle =({isActive})=>{
  return{
    fontWeight:isActive ? 'bold ':'normal',
    TextDecoration :isActive?'none':'underlined',
    padding:'16px 28px'
  }
}
 function Products() {
  return (
  <>
  
    <div>
      <input type='search' placeholder='search-products'></input>
    </div>
    <nav className='primary-nav'>
      <Link style={{navLinkStyle}} to='featured'>featured</Link>
      <Link style={{navLinkStyle}} to='new'>new</Link>

    </nav>
    <Outlet />
    </>
  )
  }
  export default Products
