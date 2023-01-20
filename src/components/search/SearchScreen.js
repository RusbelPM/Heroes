import { useNavigate,useLocation } from "react-router-dom"
import { GetHeroesByName } from "../../selectors/GetHeroesByName"
import { HeroesCard } from "../heroes/HeroesCard"
import { useForm } from "../hooks/useForm"
import queryString from 'query-string'
import { useMemo } from "react"
export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
const {q = ''} = queryString.parse(location.search)

    const [formValues , handleInputChange] = useForm({
      searchtext:q,

    })

    const {searchtext}=formValues 
      const heroesFileted  = useMemo(()=>GetHeroesByName(q),[q])

    const handleSearch = (e)=>{
      e.preventDefault();

      navigate(`?q=${searchtext}`)
    }


  return (
    <>
        <h1>Busqueda</h1>
         <hr/>
          <div className="row">

            <div className="col-5">
              <h4>Buscar</h4>
              <hr/>
              <form onSubmit={handleSearch}>

                <input
                type="text"
                placeholder="Buscar Heroes"
                className="form-control"
                name="searchtext"
                autoComplete="off"
                value={searchtext}
                onChange={handleInputChange}
                
                />

                <button 
                className="btn btn-outline-primary mt-3"
                type="submit">
                  Buscar
                </button>
              </form>

            </div>

            <div className="col-7">

              <h4>Resultados</h4>
              <hr/>
                {
                  (q === '')
                  ? <div className="alert alert-info animate__animated animate__fadeIn">Buscar un Heroe</div>
                  :(heroesFileted.length === 0)
                  && <div className="btn btn-outline-danger animate__animated animate__fadeIn"> <b>no hay Resultados de: </b>{` ${q}`}</div>
                   

                }

              {
                heroesFileted.map(hero =>(
                  <HeroesCard
                  key={hero.id}
                  {...hero}
                  />
                ))
              }

            </div>

          </div>
    

    </>
  )
}
