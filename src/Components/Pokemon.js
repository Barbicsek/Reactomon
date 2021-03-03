import React, {useState, useEffect} from 'react';
import MokedData from '../MokedData';
import {Typography} from '@material-ui/core';


const Pokemon = props => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState(MokedData[`${pokemonId}`]);

    const generatePokemonJSX = () => {
        const {name, id, height, weight, types, sprites} = pokemon;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        const {front_default} = sprites;
        return (
        <>
            <Typography variant="h1">
                {`${id} ${name}`}
                <img src={front_default}/>
            </Typography>
            <img style={{width: "300px", height: "300px"}} src={imageUrl}/>
            <Typography varinat="h6">Pokemon Info</Typography>
            <Typography>Height: {height} </Typography>
            <Typography>Weight: {weight} </Typography>
            <Typography variant="h6"> Types: </Typography>
            {types.map((typeInfo) => {
                const {type} = typeInfo;
                const {name} = type;
                return <Typography key={name}> {`${name}`}</Typography>
            })}

        </>
        )
    }
    return (
        <>
        {generatePokemonJSX()}
        </>

    )
}

export default Pokemon;

