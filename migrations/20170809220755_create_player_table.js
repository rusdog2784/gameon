exports.up = function(knex, Promise) {
	return knex.schema.createTable('player', function(t) {
		t.increments('player_id').primary();
		t.string('first_name').notNullable();
		t.string('last_name').notNullable();
		t.string('email').notNullable();
		t.binary('password').notNullable();
		t.dateTime('date_joined').notNullable();
		t.dateTime('last_active').notNullable();
		t.float('location_joined_lat');
		t.float('location_joined_long');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('player');
};
