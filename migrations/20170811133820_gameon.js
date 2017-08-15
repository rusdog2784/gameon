
exports.up = function(knex, Promise) {
	return knex.schema

	.createTable('player', function(t) {
		t.increments().unsigned();
		t.string('first_name').notNullable();
		t.string('last_name').notNullable();
		t.string('email').notNullable();
		t.string('password', 128).notNullable();
		t.dateTime('date_joined').notNullable();
		t.dateTime('last_active').notNullable();
		t.float('location_joined_lat');
		t.float('location_joined_long');
	})

	.createTable('sports', function(t) {
		t.increments().unsigned();
		t.string('name').notNullable();
	})

	.createTable('game', function(t) {
		t.increments().unsigned();
		t.integer('creator_id', 10).unsigned().notNullable().references('id').inTable('player').onDelete("CASCADE");
		t.string('title').notNullable();
		t.integer('sport_id', 10).unsigned().notNullable().references('id').inTable('sports').onDelete("CASCADE");
		t.date('date').notNullable();
		t.time('time').notNullable();
		t.float('location_lat', 12, 8).notNullable();
		t.float('location_long', 12, 8).notNullable();
	})

	.createTable('player_game', function(t) {
		t.increments().unsigned();
		t.integer('player_id', 10).unsigned().references('id').inTable('player').onDelete("CASCADE");
		t.integer('game_joined', 10).unsigned().references('id').inTable('game').onDelete("CASCADE");
		t.integer('game_played', 10).unsigned().references('id').inTable('game').onDelete("CASCADE");
	});
};

exports.down = function(knex, Promise) {
	return knex.schema
	.dropTableIfExists('player_game')
	.dropTableIfExists('game')
	.dropTableIfExists('sports')
	.dropTableIfExists('player');
};
