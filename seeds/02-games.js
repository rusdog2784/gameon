
exports.seed = function(knex, Promise) {

  var tableName = "game";
  var games = [
    { creator_id: 3, title: "Basketball!!!", date: "2017-08-15", time: "12:30:00", location_lat: 40.752355, location_long: -74.033462, type: 'Basketball' },
    { creator_id: 4, title: "Baseball Rocks", date: "2017-08-19", time: "13:00:00", location_lat: 40.744903, location_long: -74.026222, type: 'Baseball' },
    { creator_id: 1, title: "Hockey Anyone?!", date: "2017-08-20", time: "18:15:00", location_lat: 40.739486, location_long: -74.036683, type: 'Hockey' }
  ];

  return knex(tableName).del()
    .then(function () {
      return knex.insert(games).into(tableName);
    });
};
