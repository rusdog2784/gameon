
exports.up = function(knex, Promise) {
	return knex.schema.createTable('game', function(t) {
		t.increments('game_id').primary();
		t.integer('creator_id').unsigned().notNullable();
		t.string('title').notNullable();
		t.date('date').notNullable();
		t.time('time').notNullable();
		t.float('location_lat').notNullable();
		t.float('location_long').notNullable();
		t.foreign('creator_id').references('player.player_id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('game');
};
