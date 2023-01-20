import React, { useState } from 'react'

import './decoration.css'

export const Home = () => {
  
  const [edad, setEdad] = useState(0)


const hola = (edad<18)?'menor de edad' : 'mayor de edad'


  return (
    <>

        <h2 className="border">Home</h2>
        <h2 className="wave"> Home</h2>
        <h1 className="hola">Home</h1>
        <h4>{edad} años</h4>

        <button
        className="btn btn-danger"
        onClick={()=>setEdad(edad +1 )}
        >mas años</button>
        <button
        className="btn btn-primary"
        onClick={()=>setEdad(edad -1 )}
        >menos años</button>
        <h4>{hola}</h4>




    </>
  )
}
