import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/PokemonDetail'
import TypeList from './components/TypeList'
import axios from "axios"
import React, {useState, useEffect} from "react"


const App = props => {

  const [pokemons, setPokemons] = useState([]);

  const [selectedCharacter, setSelectedCharacter] = useState(1);

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

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
          <Route path='/pokemons' render={props => ( <PokemonList pokemons={pokemons} selectedChar={selectedCharacter} onCharSelect={charSelectHandler}/>)}/>
          <Route path='/types' component={TypeList}/>
          <PokemonDetail selectedChar={selectedCharacter} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
