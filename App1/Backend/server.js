var express = require('express');
var mysql = require('mysql'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    cors = require('cors');

var app = express();
var webappCtrl = require('./api/webapp1');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users/', webappCtrl);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});