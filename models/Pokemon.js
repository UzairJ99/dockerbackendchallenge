const mongoose = require("mongoose");
const Schema = mongoose.Schema;

console.log("called the model");
const pokemonSchema = Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = Pokemon = mongoose.model("Pokemon", pokemonSchema);