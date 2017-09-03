let routes = require('express').Router();

let db = require('../database/db');
let screen = require('../database/screen');
let player = require('../database/player-repo');
let game = require('../database/game-repo');

routes.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

routes.get('/', function(req, res) {
    res.status(200).json({message: "Connected!" });
});

routes.get('/players', function(req, res) {
    player.getPlayers().then(function(result) {
        screen.write(result, "pretty");
        res.status(200).json(result);
    })
    .catch(function(err) {
        console.error(err);
    });
});

routes.get('/players/:playerId', function(req, res) {
    let playerId = req.params.playerId * 1;
    player.getPlayer(playerId).then(function(result) {
        screen.write(result, "pretty");
        res.status(200).json(result);
    })
    .catch(function(err) {
        console.error(err);
    });
})

routes.get('/games', function(req, res) {
    game.getGames().then(function(result) {
        screen.write(result, "pretty");
        res.status(200).json(result);
    })
    .catch(function(err) {
        console.error(err);
    });
});

routes.get('/games/:gameId', function(req, res) {
    let gameId = req.params.gameId * 1;
    game.getGame(gameId).then(function(result) {
        screen.write(result, "pretty");
        res.status(200).json(result);
    })
    .catch(function(err) {
        console.error(err);
    })
});

module.exports = routes;