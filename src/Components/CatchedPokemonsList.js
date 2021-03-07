import React, {useContext} from 'react';
import {CatchedPokemonContext} from '../Contexts/CatchedPokemonContext';
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, Typography} from "@material-ui/core";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";


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

const CatchedPokemonsList = props => {

    const classes = useStyles;
    const {history} = props;

    const pokemonData = useContext(CatchedPokemonContext);
 

    const getPokemonCard = () => {
        let card = []

        for(let i of pokemonData[0]){
            card.push(<Typography key={i.id}> {`${i.name}`}</Typography>)
            card.push(<br></br>)
        }

        return (
            <Grid item xs={12} sm={4}>
                <Card>
                    <CardContent className={classes.cardContent}>
                        Catched Pokemons
                        
                        {card}
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
            {pokemonData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {
                        getPokemonCard()}
            </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}

export default CatchedPokemonsList;
