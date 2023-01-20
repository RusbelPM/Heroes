import { NavLink } from "react-router-dom"
import './navbar.css'

export const Navbar = () => {
  return (
   <>
    <ul>
        <li>
        <NavLink  className={({isActive})=> isActive ? 'active' : "rok"} to="/about">About</NavLink>

        </li>
        <li>
        <NavLink className={({isActive})=> isActive ? 'active' : "rok"} to="/user">User</NavLink>
        </li>
        <li>
        <NavLink className={({isActive})=> isActive ? 'active' : "rok"} to="/">Home</NavLink>
        </li>
              <li>
        <NavLink className={({isActive})=> isActive ? 'active' : "rok"} to="/dashboard">DashBoard</NavLink>
        </li>
        
    </ul>
   </>

  )
}
