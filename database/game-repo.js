"use strict";

var Promise = require('bluebird');
var db = require('./db');

module.exports = {

	//============================= QUERIES =============================

	//List all games
	getGames: function() {
		return db('game')
			.select().then();
	},

	//List game information based on id
	getGame: function(gameID) {
		return db('game as g')
			.join("player as p", "p.id", "g.creator_id")
			.select("g.*", "p.first_name", "p.last_name")
			.where("g.id", "=", gameID)
			.first().then();
	},

	//List all players related to the specified game
	listPlayersFor: function(gameID) {
		return db('player_game as pg')
			.join("player as p", "p.id", "pg.player_id")
			.join("game as g", "g.id", "pg.game_joined")
			.select("g.title as game", "g.type as sport", "p.first_name", "p.last_name")
			.where("g.id", gameID)
			.then();
	}

};