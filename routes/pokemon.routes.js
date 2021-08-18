const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller');

router.get('/', PokemonController.apiGetAllPokemon);
router.get('/pokemon/:name', PokemonController.apiGetPokemonByName);

module.exports = router;