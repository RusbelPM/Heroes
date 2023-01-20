import { useNavigate } from "react-router"

export const DashBoard = () => {
    const navigate = useNavigate() /*el useNavigate es para redireccionar a cualquier componente*/
    const handleOnclik =()=>{
        navigate('/')
    }
  return (
    <div>
        <h1>DashBoard</h1>
        <button className="btn btn-outline-primary"
                onClick={handleOnclik}
        >
            Redirection
        </button>
    </div>
  )
}
