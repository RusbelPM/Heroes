import { HeroesList } from "../heroes/HeroesList"
import './style.css'

export const MarvelScreen = () => {
  return (
    <div>
        <h1>Estreno</h1>
        <hr />
        <HeroesList publisher="Marvel Comics"/>
    </div>
  )
}
