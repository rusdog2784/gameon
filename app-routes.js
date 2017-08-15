"use strict";

module.exports = function(app) {

	app.get('/getPlayer', function(req, res) {
		res.render('login', {
			title: 'Express Login'
		});
	});

}