import React, {useState, useEffect} from 'react';
import {Typography, CircularProgress, Button} from '@material-ui/core';
import axios from "axios";

const PokemonDetails = props => {
    console.log("props")
    console.log(props)
    const { history, match } = props;
    console.log("match ")
    console.log(match)
    const { params } = match;
    console.log("params ")
    console.log(params)
    const { pokemonId } = params;
    const [pokemon, setPokemon] = useState();

    useEffect(( ) => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => {
            const { data } = response;
            setPokemon(data);
        })
    }, [pokemonId]);


    const generatePokemonJSX = () => {
        const {name, id, height, weight, types, sprites} = pokemon;
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
        <>
            <Typography variant="h1">
                {`${id}. ${name}`}
            </Typography>
            <img style={{width: "300px", height: "300px"}} src={imageUrl}/>
            <Typography varinat="h3">Pokemon Info</Typography>
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
        {pokemon === undefined && <CircularProgress/>}
        {pokemon !== undefined && pokemon && generatePokemonJSX()}
        {pokemon !== undefined && (
            <Button variant="contained" onClick={()=> {
                history.push("/");
            }}>
                Back to the main page

            </Button>
        ) }
        </>

    )
}

export default PokemonDetails;

