import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MokedData from '../MokedData';

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
    }
});


const Pokedex = props => {
    const {history} = props;
    const classes = useStyles;
    const [pokemonData, setPokemonData] = useState(MokedData);

    const getPokemonCard = (pokemonId) => {
        console.log(pokemonData[`${pokemonId}`]);
        const {id, name} = pokemonData[`${pokemonId}`];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick = {() => history.push(`/${pokemonId}`)}>
                    <CardMedia className={classes.cardMedia}
                    image={sprite}
                    style={{width: "130px", height: "130px"}}>
                        
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography>
                            {`${id} ${name}`}
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

export default Pokedex;
