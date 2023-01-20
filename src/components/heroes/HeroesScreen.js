import { useMemo} from "react";
import { useParams,Navigate,useNavigate } from "react-router-dom"
import { GetHeroById } from "../../selectors/GetHeroById";

export const HeroesScreen = () => {
  const {IDS} = useParams();
const navigate = useNavigate();
// const [counter, setCounter] = useState(0)

   const hero = useMemo(() => GetHeroById(IDS), [IDS])


if(!hero){
  return <Navigate to="/"/>
}

const imagePath = `/assets/${hero.id}.jpg`;
const{
  superhero, 
  publisher, 
  alter_ego,
  first_appearance,
} = hero;


const handleOnclik = ()=>{
  return navigate(-1)
  // setCounter(counter + 1)
  
}
  return (

    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={imagePath}
        alt={superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"

        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"> <b>publisher: </b>{publisher}</li>
          <li className="list-group-item"> <b>first_appearance: </b>{first_appearance}</li>
          <h5 className="mt-3">characters</h5>
          <p>{hero.characters}</p>
          <button
          className="btn btn-secondary" htmlFor="option13"
          onClick={handleOnclik}
          >
            Regresar
          </button>



          </ul>
      </div>
    </div>
  )
}
