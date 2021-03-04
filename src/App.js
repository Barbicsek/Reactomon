import {Route, Switch} from 'react-router-dom';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';
import TypeList from './Components/TypeList';
import TypeDetails from './Components/TypeDetails';
import {PokemonProvider} from './Contexts/PokemonContext';



const App = props => {


  return (
    <PokemonProvider>
      <Switch>
        <Route exact path='/' render={(props) => <PokemonList {...props}/>}></Route>
        <Route exact path='/typelist' render={(props) => <TypeList {...props}/>}></Route>
        <Route
          exact
          path='/:pokemonId'
          render={(props) => <PokemonDetails {...props}/>}>
        </Route>
        <Route
          exact
          path='/typelist/:typeId'
          render={(props) => <TypeDetails {...props}/>}>
        </Route>
      </Switch>
    </PokemonProvider>

  )
}

export default App;
