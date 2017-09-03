// Update with your config settings.

module.exports = {

  /*
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
     migrations: {
      tableName: 'knex_migrations'
     },
     seeds: {
      directory: './seeds'
     },
     debug: false
  },
  */

  development: {
    client: 'mysql',
    connection: {
      database: 'gameon',
      user:     'gameon_user',
      password: 'GameOn12#'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    debug: false
  }

};
