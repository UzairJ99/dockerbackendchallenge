const POKEMONSERVICE = require('../services/PokemonService');

module.exports = class Pokemon {
    static async apiGetAllPokemon(_req, res, next) {
        try {
            const pokemon = await POKEMONSERVICE.getAllPokemon();

            if (!pokemon) res.send(404).json('No pokemon found.');

            res.json(pokemon);
        } catch (err) {
            res.status(500).json({error: err});
        }
    }

    static async apiGetPokemonByName(req, res, next) {
        try {
            let pokemonName = req.params.name;

            const pokemon = await POKEMONSERVICE.getPokemonByName(pokemonName);

            if (!pokemon) res.send(404).json('Pokemon not found.');

            res.json(pokemon);
        } catch (err) {
            res.status(500).json({error: err});
        }
    }
}