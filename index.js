const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT ||  3000;
const HOST = '0.0.0.0'; // for docker

app.get('/', (req, res) => {
    res.send("hi");
});

app.get('/getDitto', (req, res) => {

})

app.listen(PORT, HOST , () => {
    console.log(`server started on port ${PORT}`);
});