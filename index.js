const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

app.get("/", (req, res) => {
    res.send("<h1>Hey... You're not meant to be here!")
});

app.get(["/add", "/add/:player/:score"], (req, res) => {
    player = req.params["player"];
    score = req.params["score"];
    if(isNaN(score)) {
        res.send("2");
    }
    if (player && score) {
        place = 0;
        while (place <= 1000) {
            place += 1
            
        }
        res.send(player + ' and ' + score);
    } else {
        res.send("1");
    }
});

app.listen(port, () => console.log(`Ominous Ocean Leaderboard is running on ${port}`));