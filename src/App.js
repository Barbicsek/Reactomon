import {Route, Switch} from 'react-router-dom';
import PokemonList from './Components/PokemonList';
import PokemonDetails from './Components/PokemonDetails';
import TypeList from './Components/TypeList';
import TypeDetails from './Components/TypeDetails';
import CatchedPokemonsList from './Components/CatchedPokemonsList';
import {PokemonProvider} from './Contexts/PokemonContext';
import {TypeProvider} from './Contexts/TypeContext';
import {CatchedPokeProvider} from './Contexts/CatchedPokemonContext';
import {ThemeContextProvider} from './Contexts/ThemeContext';
import Home from "./Components/Home";



const App = props => {


  return (
    <CatchedPokeProvider>
      <PokemonProvider>
        <TypeProvider>
          
            <ThemeContextProvider>
              <Switch>
                <Route exact path='/' component={Home} ></Route>
                <Route exact path='/pokemons' render={(props) => <PokemonList {...props}/>}></Route>
                <Route exact path='/catchedpokemons' render={(props) => <CatchedPokemonsList {...props}/>}></Route>
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
            </ThemeContextProvider>
        </TypeProvider>
      </PokemonProvider>
    </CatchedPokeProvider>

  )
}

export default App;
