const express = require('express');
const bodyParser = require('body-parser');
const sha = require('sha512');
const ctrl = require('./controller');
const app = express();

app.use(express.static('public')); //How express knows where the index.html file is...
app.use(bodyParser.json());

app.post('/createPlayer', (req, res) => {
	let d = new Date();
	let date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  	let pass = sha(req.body.password).toString('hex');
  	ctrl
    	.createPlayer({
    		first_name: req.body.first_name,
	    	last_name: req.body.last_name,
	    	email: req.body.email,
	    	password: pass,
	    	date_joined: date,
	    	last_active: date
    	})
    	.then(() => res.sendStatus(200))
});

app.listen(5000, () => {
  	console.log('Server running on http://localhost:5000');
});