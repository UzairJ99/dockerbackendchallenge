const Pokemon = require('../models/Pokemon');

module.exports = class PokemonService {
    static async getAllPokemon() {
        try {
            const allPokemon = await Pokemon.find();
            return allPokemon;
        } catch (err) {
            console.log(err);
        }
    }

    static async getPokemonByName(pokemonName) {
        console.log("hi");
        try {
            
            console.log(pokemonName);
            const pokemon = await Pokemon.findOne({name: pokemonName});
            return pokemon;
        } catch (err) {
            console.log(err);
        }
    }

}