import PokemonDetail from './PokemonDetail'

const PokemonList = ({pokemons}) => {
    console.log(pokemons)

    return (
        <div>

            {pokemons.map((pokemon) => (
                <PokemonDetail pokemon={pokemon}/>

            ))}
            <a href="/">Go Back</a>
        </div>
    )
}

export default PokemonList;
