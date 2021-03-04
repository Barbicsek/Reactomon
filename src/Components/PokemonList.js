import React, {useContext} from 'react';
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import {PokemonContext} from '../Contexts/PokemonContext';

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    cardMedia: {
        margin: "auto",
    },

    cardContent: {
        textAlign: "center",
    },
    titleText: {
        textAlign: "center",
        color: "red",
    }
});


const PokemonList = props => {
    const {history} = props;
    const classes = useStyles;
    const pokemonData = useContext(PokemonContext);

    const getPokemonCard = (pokemonId) => {
        const {id, name, sprite} = pokemonData[pokemonId];

        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick = {() => history.push(`/pokemons/${pokemonId}`)}>
                    <CardMedia className={classes.cardMedia}
                    image={sprite}
                    style={{width: "130px", height: "130px"}}>
                        
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {`${id}. ${name}`}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar/>
            </AppBar>
            <Button variant="outline-info" onClick={() => {history.push("/")}}>Home</Button>{' '}
            <Button variant="outline-success" onClick={() => {history.push("/typelist")}}>Type List</Button>{' '}
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemonData).map(pokemonId => 
                        getPokemonCard(pokemonId))}
            </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}

export default PokemonList;
