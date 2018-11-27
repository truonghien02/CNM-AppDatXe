var http = require('http');
var express = require('express');
var mysql = require('mysql'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'), // ?
    cors = require('cors'); 	// ?
var socketIO = require('socket.io');

var webapp2Ctrl = require('./api/webapp2');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

io.on('connection', socket => {
	console.log('a user connected');

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	socket.on('client-new-app1', msg => {
		console.log('client new app1: ' + msg);
	})
})

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/locationidentifer/', webapp2Ctrl);

var PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});