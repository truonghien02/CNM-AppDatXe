var http 	= require('http');
var express = require('express');
var mysql 	= require('mysql'),
    bodyParser = require('body-parser'),
    morgan 	= require('morgan'), 
    cors 	= require('cors'), 	
	socketIO = require('socket.io'),
    http 	= require('http');

var webapp2Ctrl = require('./api/webapp2');

var app = express();
var server = http.Server(app);  // Thao tác với realtime
//var io = socketIO(server, {origins:'http://localhost:*'});
var io = socketIO(server);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/locationidentifer/', webapp2Ctrl);

io.on('connection', socket => {
    console.log('a user connected: ' + socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected: ' + socket.id);
    });

    socket.on('app1-request-server', msg => {
        console.log(`message: ${msg}`);
        socket.broadcast.emit('server-send-app2', msg);
    });
});

var PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});