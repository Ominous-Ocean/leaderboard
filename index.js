const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("<h1>Hey... You're not meant to be here!")
});

app.get(["/add", "/add:name:score"], (req, res) => {
    if (name && score) {
        res.send(name + ' and ' + score);
    } else {
        res.send("<h1>Try some arguments...")
    }
});

app.listen(port, () => console.log(`Ominous Ocean Leaderboard is running on ${port}`));