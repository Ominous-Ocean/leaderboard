const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');

app.get("/", (req, res) => {
    res.send("Error Code 1: Trying to add to leaderboard without providing player name and/or score\nError Code 2: Tried to provide a score that wasn't a number\nError Code 3: Failed to read file on server side");
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
            if(!fs.existsSync('/leaderboard/' + place + '.json')) {
                res.send('3')
            }
            let leaderboardPosJson = fs.readFileSync('/leaderboard/' + place + '.json');

        }
        res.send(player + ' and ' + score);
    } else {
        res.send("1");
    }
});

app.listen(port, () => console.log(`Ominous Ocean Leaderboard is running on ${port}`));