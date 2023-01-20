import { Routes, Route} from "react-router-dom";

import { DcScreen } from "../components/dc/DcScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar"



export const DashBoardRouter = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
        <Routes>
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="heroes/:IDS" element={<HeroesScreen/>} />


        <Route path="search" element={<SearchScreen />} />

        <Route path="/" element={<MarvelScreen />} />


      </Routes>
        </div>
    


    </>
  )
}
