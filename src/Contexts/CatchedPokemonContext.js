import React, {createContext, useState} from 'react';

export const CatchedPokemonContext = createContext();

export const CatchedPokeProvider = props => {

    const [catchedPoke, setCatchedPoke] = useState([]);
    console.log("CATCH POKEMON")
    console.log(catchedPoke)



    return (
        <CatchedPokemonContext.Provider value={[catchedPoke, setCatchedPoke]}>
            {props.children}
        </CatchedPokemonContext.Provider>
    )
}