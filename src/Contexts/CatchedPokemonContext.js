import React, {createContext, useState, useEffect} from 'react';

export const CatchedPokemonContext = createContext();

export const CatchedPokeProvider = props => {

    const [catchedPoke, setCatchedPoke] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("catchedPokemons")){
            setCatchedPoke(JSON.parse(localStorage.getItem("catchedPokemons")))
        }
       
    }, [setCatchedPoke])


    const distinct = (a) => {
        const result = [];
    
        for(let item of a) {
            if(result.filter(i => JSON.stringify(i) === JSON.stringify(item)).length === 0) {
                result.push(item);
            }
        }
    
        return result;
    }

    const persistCatchedPoke = (catchedPokemons) => {
        setCatchedPoke(catchedPokemons)
        localStorage.setItem("catchedPokemons",JSON.stringify(distinct(catchedPokemons)))
    }



    return (
        <CatchedPokemonContext.Provider value={[catchedPoke, persistCatchedPoke]}>
            {props.children}
        </CatchedPokemonContext.Provider>

    )
}