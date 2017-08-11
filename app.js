"use strict";

let db = require('./db');
let screen = require('./screen');

screen.clear();

db('player').select().then(function(result) {
	screen.write(result, "pretty");
})
.catch(function(err) {
	console.error(err);
})
.finally(function() {
	db.destroy();
})