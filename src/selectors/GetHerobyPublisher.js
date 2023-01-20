import { heroes } from "../data/heroes"


export const GetHerobyPublisher = (publisher) => {
    const validPubliser = ['DC Comics','Marvel Comics']

    if(!validPubliser.includes(publisher)){

        throw new Error(`${publisher} ¡no existe! :(`)
        
    }

    return heroes.filter(heroess =>  heroess.publisher === publisher)

}










