import {Route, Switch} from 'react-router-dom';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';
import TypeList from './Components/TypeList';



const App = props => {


  return (
    <Switch>
      <Route exact path='/' render={(props) => <PokemonList {...props}/>}></Route>
      <Route exact path='/typelist' render={(props) => <TypeList {...props}/>}></Route>
      <Route
        exact
        path='/:pokemonId'
        render={(props) => <PokemonDetails {...props}/>}>
      </Route>
     
    </Switch>

  )
}

export default App;
