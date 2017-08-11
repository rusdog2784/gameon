
exports.seed = function(knex, Promise) {

  var tableName = "player_game";
  var players_games = [

    //Scott's joined games
    { player_id: 1, game_joined: 3},
    { player_id: 1, game_joined: 1},

    //Joey's joined games
    { player_id: 2, game_joined: 2},

    //Matt's joined games
    { player_id: 3, game_joined: 1},
    { player_id: 3, game_joined: 3},

    //Rob's joined games
    { player_id: 4, game_joined: 1},
    { player_id: 4, game_joined: 2},
    { player_id: 4, game_joined: 3},

    //West's joined games
    { player_id: 5, game_joined: 2},
    { player_id: 5, game_joined: 3}
  ];

  return knex(tableName).del()
    .then(function () {
      return knex.insert(players_games).into(tableName);
    });
};
