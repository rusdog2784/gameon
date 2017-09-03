"use strict";

let db = require('./db');
let screen = require('./screen');
let player = require('./player-repo');
let game = require('./game-repo');

screen.clear();

var game_data = {};

game.getGame(1).then(function(result) {
	game_data = result;
})
.catch(function(err) {
	console.error(err);
})

game.listPlayersFor(1).then(function(result) {
	game_data['players'] = result;
})
.catch(function(err) {
	console.error(err);
})
.finally(function() {
	screen.write(game_data, "pretty");
	db.destroy();
});