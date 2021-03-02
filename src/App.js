import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PokemonList from './components/PokemonList'
import TypeList from './components/TypeList'
import axios from "axios"
import React, {useState, useEffect} from "react"


const App = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response => {
          const pokemons = response.data.results;
          setPokemons(pokemons);
      });
  }, [] );

  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Header}/>
          <Route path='/pokemons' render={props => ( <PokemonList pokemons={pokemons}/>)}/>
          <Route path='/types' component={TypeList}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
