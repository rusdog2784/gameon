"use strict";

var Promise = require('bluebird');
var db = require('./db');

module.exports = {

	//============================= QUERIES =============================

	//List all game information based on id
	getGame: function(gameID) {
		return db('game as g')
			.join("player as p", "p.id", "g.creator_id")
			.join("sports as s", "s.id", "g.sport_id")
			.select("g.title", "s.name as type", "g.date", "g.time", "g.location_lat", "g.location_long")
			.where("g.id", "=", gameID)
			.first().then();
	},

	listPlayersFor: function(gameID) {
		return db('player_game as pg')
			.join("player as p", "p.id", "pg.player_id")
			.join("game as g", "g.id", "pg.game_joined")
			.select("p.id", "p.first_name as First Name", "p.last_name as Last Name")
			.where("g.id", gameID)
			.then();
	}

};