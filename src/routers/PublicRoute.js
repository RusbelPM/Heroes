import { useContext } from "react"
import { Navigate } from "react-router"
import { AuthContext } from "../auth/authContext"


export const PublicRoute = ({children}) => {
const {user} = useContext(AuthContext)
console.log(user.logged, 'public')
  return user.logged
  ? <Navigate to="/"/>
  : children
  
}
