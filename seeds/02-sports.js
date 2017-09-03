
exports.seed = function(knex, Promise) {

  var tableName = "sports";
  var sports = [
    { name: 'Basketball' },
    { name: 'Tennis' },
    { name: 'Baseball' },
    { name: 'Golf' },
    { name: 'Soccer' },
    { name: 'Cricket' },
    { name: 'Hockey' },
    { name: 'Volleyball' },
    { name: 'Football' },
    { name: 'Handball' },
    { name: 'Softball' },
    { name: 'Bowling' },
    { name: 'Badminton' },
    { name: 'Surfing' },
    { name: 'Field Hockey' },
    { name: 'Lacrosse' },
    { name: 'Rugby' },
    { name: 'Water Polo' },
    { name: 'Pool' },
    { name: 'Table Tennis' },
    { name: 'Squash' },
    { name: 'Climbing' },
    { name: 'Cycling' },
    { name: 'Running' }
  ];

  return knex(tableName).del()
    .then(function () {
      return knex.insert(sports).into(tableName);
    });
};
