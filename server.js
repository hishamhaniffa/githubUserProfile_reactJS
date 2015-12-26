var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app =  express();

//set a port to run the server
app.set('port', (process.env.PORT || 3000));

//set static path - Middleware
app.use(express.static(path.join(__dirname,'client')));

//body-parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(app.get('port'), function(){
	console.log('Server Started on port : ' + app.get('port') + ' successfully...');
});