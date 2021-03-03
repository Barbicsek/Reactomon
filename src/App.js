import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PokemonList from './components/PokemonList'
import TypeList from './components/TypeList'
import axios from "axios"
import React, {useState, useEffect} from "react"


const App = () => {

  const [pokemons, setPokemons] = useState([]);

  const pokemonId = () => {
    const min = Math.ceil(1)
    const max = Math.floor(150)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
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
