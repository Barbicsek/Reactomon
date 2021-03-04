import React, {useContext} from 'react';
import {AppBar, Toolbar, Grid, Card, Typography, CardMedia, CardContent, CircularProgress} from "@material-ui/core";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import {TypeContext} from "../Contexts/TypeContext";

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


const TypeList = props => {
    const { history } = props;
    const classes = useStyles;

    const typeData = useContext(TypeContext);

    const getTypeCard = (typeId) => {
        const {id, name} = typeData[typeId];

        return (
            <Grid item xs={3} key={typeId}>
                <Card onClick = {() => history.push(`/typelist/${typeId}`)}>
                    <CardMedia className={classes.cardMedia}
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
            <Button variant="outline-success" onClick={() => {history.push("/pokemons")}}>Pokemons</Button>{' '}
            {typeData ? (
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(typeData).map(typeId => 
                        getTypeCard(typeId))}
            </Grid>
            ) : (
                <CircularProgress/>
            )}
        </>
    )
}


export default TypeList;