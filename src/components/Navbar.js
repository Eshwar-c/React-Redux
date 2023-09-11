import { NavLink } from "react-router-dom"
const navLinkStyle =({isActive})=>{
  return{
    fontWeight:isActive ? 'bold ':'normal',
    TextDecoration :isActive?'none':'underlined',
    padding:'16px 28px'
  }
}
export const Navbar=()=>{
  return <div>
    <NavLink style={navLinkStyle} to='/'>Home</NavLink>
    <NavLink  style={navLinkStyle}to='about'>About</NavLink>
    <NavLink style={navLinkStyle} to='Products'>Products</NavLink>
  </div>
}