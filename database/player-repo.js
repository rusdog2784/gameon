"use strict";

var Promise = require('bluebird');
var db = require('./db');

module.exports = {

	//============================= QUERIES =============================

	//List all players
	getPlayers: function() {
		return db('player')
			.select().then();
	},

	//List player information based on id
	getPlayer: function(playerID) {
		return db('player')
			.select()
			.where("id", "=", playerID)
			.first().then();
	}

};