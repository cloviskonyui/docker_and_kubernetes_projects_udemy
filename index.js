const express = require("express");

const app = express();

const post = 3000;

app.get("/", (req, res) => {
    res.send("After creating anonymous volume, node_modules. I have asked the system to not touch the node_modules");
});

app.listen(post, () => {
    console.log("Now running on PORT " + post );
});