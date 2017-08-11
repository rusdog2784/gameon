let sha = require('sha512');

exports.seed = function(knex, Promise) {

  var tableName = "player";

  var d = new Date();
  var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  var players = [
    { first_name: "Scott", last_name: "Russell", email: "scott.tkdmaster@mac.com", password: sha("Shadow").toString('hex'), date_joined: date, last_active: date },
    { first_name: "Joey", last_name: "Ikuss", email: "jikuss@stevens.edu", password: sha("FratStar").toString('hex'), date_joined: date, last_active: date },
    { first_name: "Matt", last_name: "Russell", email: "mattr.polo@mac.com", password: sha("Kevin2784").toString('hex'), date_joined: date, last_active: date },
    { first_name: "Rob", last_name: "Hooper", email: "robhooper1@me.com", password: sha("BogieOne").toString('hex'), date_joined: date, last_active: date },
    { first_name: "West", last_name: "Lewis", email: "wlewis@stevens.edu", password: sha("CrossFit!").toString('hex'), date_joined: date, last_active: date }
  ];

  return knex(tableName).del()
    .then(function () {
      return knex.insert(players).into(tableName);
    });

};
