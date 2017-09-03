"use strict";

let express = require('express');
let app = express();
let routes = require('../routes/routes');
let screen = require('../database/screen');

screen.clear();

app.use('/', routes);

app.listen(5000, () => {
	console.log("Listening on port 5000");
});