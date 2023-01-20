import { useParams } from "react-router"

export const UserPage = () => {
    const params = useParams() /*es para saber lo que busca el usuario en la url.. params te devuelve un {} dentro
                                 esta loque busco el usuario*/ 
    console.log(params)
  return (
    <div>
        <h1 className="duo">{params.UserID}</h1>

    </div>
  )
}
