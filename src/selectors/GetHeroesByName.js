import { heroes } from "../data/heroes";


export const GetHeroesByName = (name = '') => {
    console.log('get 1')
    if(name.length === 0){
        return [];

    }
    // name = name.toLowerCase();
    name = name.toLowerCase();
    return heroes.filter(hero =>hero.superhero.toLowerCase().includes(name) )
    // return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}
