import react, {useState, useEffect, createContext} from "react";
import axios from "axios";

export const TypeContext = createContext();

export const TypeProvider = props => {

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


    return (
        <TypeContext.Provider value={typeData}>
            {props.children}
        </TypeContext.Provider>
    )
};