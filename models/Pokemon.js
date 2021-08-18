const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = Schema({
    // _id: {
    //     type: mongoose.Types.ObjectId
    // },
    name: {
        type: String,
        required: true
    }
});

module.exports = Pokemon = mongoose.model("Pokemon", pokemonSchema);