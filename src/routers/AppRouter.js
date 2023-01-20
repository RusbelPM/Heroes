
import { Routes, Route,BrowserRouter} from "react-router-dom";

import { DashBoardRouter } from "./DashBoardRouter";
import { LoginScreen } from "../components/login/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  return (
    <BrowserRouter>

        <Routes>
      

        {/* <Route path="/login" element={<LoginScreen />} /> */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginScreen/>
          </PublicRoute>
          
        } />


        <Route path="/*" element={
        
        <PrivateRoute>
          <DashBoardRouter/>
        </PrivateRoute>
            
        
        } />
        {/* <Route path="/*" element={<DashBoardRouter/>} /> */}
        


      </Routes>


    </BrowserRouter>
  )
}
