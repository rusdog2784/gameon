"use strict";

let cfg = require('./knexfile');
let knex = require('knex')(cfg.development);

module.exports = knex;