import React, {useState, useEffect, useContext} from 'react';
import {Typography, CircularProgress} from '@material-ui/core';
import { Button } from "react-bootstrap";
import axios from "axios";
import {CatchedPokemonContext} from '../Contexts/CatchedPokemonContext';


const PokemonDetails = props => {


    const { history, match } = props;
    const { params } = match;
    const { pokemonId } = params;

    const [pokemon, setPokemon] = useState();
    const [catchedPoke, setCatchedPoke]  = useContext(CatchedPokemonContext);

    useEffect(( ) => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => {
            const { data } = response;
            setPokemon(data);
        })
    }, [pokemonId]);


    const catchPokemon = () => {
        const Poke = { name: pokemon.name, id: pokemon.id };
        setCatchedPoke(catchedPoke => [...catchedPoke, Poke]);
        //console.log(catchedPoke);
      }

    const generatePokemonJSX = () => {
        const {name, id, height, weight, types} = pokemon;
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
        <Button variant="outline-info" onClick={() => {history.push("/pokemons")}}>Back to the Pokemons</Button>{' '}
        <Button variant="outline-success" onClick={() => catchPokemon()}>Catch!</Button>{' '}
        </>

    )
}

export default PokemonDetails;

