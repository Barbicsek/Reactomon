import React,{createContext, useState, useEffect} from 'react';
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = props => {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon`)
            .then((response) => {
                const { data } = response;
                const { results} = data;
                const newPokemonData = {};
  
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                    }
                });
                setPokemonData(newPokemonData);
                
            });
    
    }, []);

    return (
        <PokemonContext.Provider value={pokemonData}>
            {props.children}
        </PokemonContext.Provider>
    )

    
};

