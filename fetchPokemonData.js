const fetchPokemonData = async (pokemon) => {
  if (typeof pokemon !== "string") {
    throw new Error("Pokemon must be in string format");
  }
  try {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!request.ok) {
      throw new Error("Pokemon does not exist");
    }
    const rawPokemonData = await request.json();
    const pokemonData = {
      name: rawPokemonData.species.name,
      sprites: { front_default: rawPokemonData.sprites.front_default },
    };
    return pokemonData;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchPokemonData;
