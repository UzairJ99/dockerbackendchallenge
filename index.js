const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT ||  3000;
const HOST = '0.0.0.0'; // for docker
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');
const { request } = require("express");
const SECRET = '005b82e88ff0d2ca6c35b8e1522c8d17d0b47f53b5343aa3fe5bf37a70c421084c88ed1c60ee331fa74aa8d2b64ac6d13740930cbc595f0e116dae2bf8cf90e2';

const uri = "mongodb+srv://dockerchallenge:dockerchallenge!@cluster0.ypi8k.mongodb.net/dockerapp?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectToDB = async () => {
    try {
        await client.connect();
        console.log("connected");
        var pokemon = await client.db("dockerapp").collection("pokemon").findOne({"name": "Pikachu"});
        console.log(pokemon);
    } catch (err) {
        console.log(err);
    }
    return pokemon;
}

const generateAccessToken = (user) => {
    return jwt.sign(user, SECRET);
}

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET, (err, user) => {
        console.log({token, SECRET});
        if (err) return res.sendStatus(403);

        req.user = user;

        next();
    })
}

app.get('/', (_req, res) => {
    res.send("hi.");
});

app.get('/getPikachu', authenticateToken, async (_req, res) => {
    console.log('mde it')
    res.send(await connectToDB());
});

app.get('/getUser/:username', (req, res) => {
    const TOKEN = generateAccessToken({user: req.params.username});
    res.send(TOKEN);
})

app.listen(PORT, HOST , () => {
    console.log(`server started on port ${PORT}`);
});