import { useMemo} from "react"
import { GetHerobyPublisher } from "../../selectors/GetHerobyPublisher"
import { HeroesCard } from "./HeroesCard"

export const HeroesList = ({publisher}) => {
    const heroes = useMemo(()=>GetHerobyPublisher(publisher),[publisher])
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
  
            {heroes.map(hero => (
                <HeroesCard
                key={hero.id}
                {...hero}

                />
            ))}
    </div>
  )
}
