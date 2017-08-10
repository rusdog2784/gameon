
exports.up = function(knex, Promise) {
	return knex.schema.createTable('player_game', function(t) {
		t.increments('id').primary();
		t.integer('player_id').unsigned().references('player_id').inTable('player');
		t.integer('game_joined').unsigned().references('game_id').inTable('game');
		t.integer('game_played').unsigned().references('game_id').inTable('game');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('player_game');
};
