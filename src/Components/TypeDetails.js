import React, {useState, useEffect} from 'react';
import {Typography, CircularProgress, Button} from '@material-ui/core';
import axios from "axios";


const TypeDetails = props => {
    const {history, match} = props;
    const {params} = match;
    const {typeId} = params;

    const [typeDetails, setTypeDetails] = useState();

    useEffect(() => {

        axios
            .get(`https://pokeapi.co/api/v2/type/${typeId}`)
            .then((response) => {
                const {data} = response;
                console.log(data)
                setTypeDetails(data);
            })

    }, [typeId]);

    const getTypeDetailsJSX = () => {
        const {name, id} = typeDetails;
        return (
            <>
                <Typography variant="h3">
                    {`${id}. ${name}` + " type"}
                </Typography>
               </>
            )
    }


    return (
        <>
        {typeDetails === undefined && <CircularProgress/>}
        {typeDetails !== undefined && typeDetails && getTypeDetailsJSX()}
        {typeDetails !== undefined && (
            <Button variant="contained" onClick={()=> {
                history.push("/");
            }}>
                Back to the main page

            </Button>
        ) }
        </>

    )
}

export default TypeDetails;
