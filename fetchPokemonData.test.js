const fetchPokemonData = require("./fetchPokemonData");

describe("fetchPokemonData", () => {
  it("returns the name and sprites for an existing Pokemon", async () => {
    const pokemonData = await fetchPokemonData("ditto");
    expect(pokemonData).toEqual({
      name: "ditto",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      },
    });
  });
  it("throws an error when the Pokemon is not a string", async () => {
    await expect(fetchPokemonData(1)).rejects.toThrow(
      "Pokemon must be in string format",
    );
  });
  it("throws an error when the Pokemon doesn't exist", async () => {
    await expect(fetchPokemonData("Gandalf")).rejects.toThrow(
      "Pokemon does not exist",
    );
  });
});
