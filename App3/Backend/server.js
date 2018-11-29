var express = require('express');
var mysql = require('mysql'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors');

var webapp3Ctrl = require('./ApiControllers//dataController.js');
var userCtrl = require('./ApiControllers/userController.js');
var tctl = require('./ApiControllers/t.js');
var verifyAccessToken = require('./repos/authrepo').verifyAccessToken;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/webapp3/', webapp3Ctrl);
app.use('/api/users/', userCtrl);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});