import {Route, Switch} from 'react-router-dom';
import axios from "axios";
import React, {useState, useEffect} from "react";
import Pokedex from './Components/Pokedex';
import Pokemon from './Components/Pokemon';


const App = props => {


  return (
    <Switch>
      <Route exact path='/' render={(props) => <Pokedex {...props}/>}></Route>
      <Route
        exact
        path='/:pokemonId'
        render={(props) => <Pokemon {...props}/>}>
      </Route>
    </Switch>

  )
}

export default App;
