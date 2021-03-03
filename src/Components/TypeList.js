import React, {useState, useEffect} from 'react';
import axios from "axios";
import {AppBar, Toolbar, Grid, Card, Typography, CardMedia, CardContent, CircularProgress} from "@material-ui/core";
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


const TypeList = props => {
    const { history } = props;
    const classes = useStyles;
    const [typeData, setTypeData] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/type`)
            .then((response) => {
                const {data} = response;
                const {results} = data;

                const newTypeData = {};
                results.forEach((type, index) => {
                newTypeData[index + 1] = {
                    id: index + 1,
                    name: type.name,
                }
            
                })
                setTypeData(newTypeData);
            })
    }, []);

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