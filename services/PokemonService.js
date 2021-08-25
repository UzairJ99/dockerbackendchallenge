const Pokemon = require('../models/Cache');
let cache = new Pokemon();

module.exports = class PokemonService {
    
    static async getAllPokemon() {
        try {
            const allPokemon = cache.find();
            return allPokemon;
        } catch (err) {
            console.log(err);
        }
    }

    static async getPokemonByName(pokemonName) {
        try {
            const pokemon = cache.findOne({name: pokemonName});
            return pokemon;
        } catch (err) {
            console.log(err);
        }
    }

}