const fetchPokemonData = require("./fetchPokemonData")

describe("fetchPokemonData", () => {
    it("returns the name and sprites for an existing Pokemon", async () => {
        const pokemonData = await fetchPokemonData("ditto");
        expect(pokemonData).toEqual({name: "ditto", sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" }});
    })
})