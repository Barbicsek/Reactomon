import {Route, Switch} from 'react-router-dom';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';
import TypeList from './Components/TypeList';
import TypeDetails from './Components/TypeDetails';
import {PokemonProvider} from './Contexts/PokemonContext';
import {TypeProvider} from './Contexts/TypeContext';
import Home from "./Components/Home";
import { Navbar, Nav } from "react-bootstrap";




const App = props => {


  return (
    <PokemonProvider>
      <TypeProvider>
        <Switch>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/pokemons' render={(props) => <PokemonList {...props}/>}></Route>
          <Route exact path='/typelist' render={(props) => <TypeList {...props}/>}></Route>
          <Route
            exact
            path='/pokemons/:pokemonId'
            render={(props) => <PokemonDetails {...props}/>}>
          </Route>
          <Route
            exact
            path='/typelist/:typeId'
            render={(props) => <TypeDetails {...props}/>}>
          </Route>
        </Switch>
      </TypeProvider>
    </PokemonProvider>

  )
}

export default App;
