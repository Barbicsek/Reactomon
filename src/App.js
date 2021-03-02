import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import PokemonList from './components/PokemonList'
import TypeList from './components/TypeList'


const App = () => {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Header}/>
          <Route path='/pokemons' component={PokemonList}/>
          <Route path='/types' component={TypeList}/>
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;
