const fetchPokemonData = async (pokemon) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const rawPokemonData = await request.json();
    const pokemonData = {name: rawPokemonData.species.name, sprites: {front_default: rawPokemonData.sprites.front_default}};
    console.log(pokemonData);
    return pokemonData;
}

module.exports = fetchPokemonData;