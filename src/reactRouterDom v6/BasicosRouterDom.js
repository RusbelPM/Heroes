import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { About } from './About'
import { Navbar } from './components/Navbar'
import { DashBoard } from './DashBoard'
import { Error } from './Error'
import { Home } from './Home'
import { User } from './User'
import { UserPage } from './UserPage'


export const BasicosRouterDom = () => {
  return (
    <>

    <BrowserRouter>
        <Navbar/>
        <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:UserID" element={<UserPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>

        <Route path="*" element={<Error/>}/>
            
        </Routes>
    
    </BrowserRouter>    
    </>
  )
}
