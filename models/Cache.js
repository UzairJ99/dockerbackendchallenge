const POKEMONDATABASE = require('./Pokemon');
var data;
const getData = async () => {
    data = await POKEMONDATABASE.find();
    // data = [{
    //     "name": Math.random()
    // }]
}

setInterval(() => {
    getData()
}, 1000);

class Pokemon {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(newName) {
        this.name = newName;
    }

    toJSON() {
        return {name: this.name}
    }
}

module.exports = class Cache {
    constructor() {
        // list of all pokemon entries - mock data
        // this.data = [
        //     (new Pokemon("Pikachu")).toJSON(),
        //     (new Pokemon("Charizard")).toJSON(),
        //     (new Pokemon("Bulbasaur")).toJSON()
        // ]; 
    
        // console.log(this.data);
        // this.info = data;
    }

    //[{"_id":"611d6193d64297cfdaff4182","name":"Pikachu"}]
    //[{"name":"Pikachu"},{"name":"Charizard"},{"name":"Bulbasaur"}]

    find() {
        return data;
    }

    findOne(info) {
        // console.log(info);
        // console.log(data);
        const result = data.find(val => 
            val.name == info.name
        );
        
        return result;
    }
}