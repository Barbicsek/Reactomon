
const PokemonList = ({pokemons}) => {

    return (
        <div>
            <h4>Pokemon List</h4>
           <div className='card'>
                {pokemons.map((pokemon) => (
                    <div className='title'>{pokemon.name}</div>
                ))}
            </div>
           
            <a href="/">Go Back</a>
        </div>
    )
}

export default PokemonList;
