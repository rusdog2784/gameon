"use strict";

let db = require('./db');
let screen = require('./screen');
let player = require('./player-repo');
let game = require('./game-repo');

screen.clear();

player.getPlayer(1).then(function(result) {
	screen.write(result, "pretty");
})
.catch(function(err) {
	console.error(err);
});

console.log(" ");

game.getGame(3).then(function(result) {
	screen.write(result, "pretty");
})
.catch(function(err) {
	console.error(err);
});

console.log(" ");

game.listPlayersFor(3).then(function(result) {
	screen.write(result, "pretty");
})
.catch(function(err) {
	console.error(err);
})
.finally(function() {
	db.destroy();
});