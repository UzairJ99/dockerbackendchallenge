const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("hi");
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});