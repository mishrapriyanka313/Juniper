var express = require('express');

var app = express();
/*
Used for testing Jade
 view engine setup
 app.set('views', path.join(__dirname, 'views'));
 */

app.set('view engine', 'jade');

var mysql = require('mysql');
app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
    host     : 'localhost',
    port      : '3307',
    user     : 'root',
    password : 'root',
    database : 'juniper'
});



app.get('/', function(req, res){
   res.redirect('/client');
});



connection.connect();

require("./public/server/app.js")(app, connection);

var ipaddress =  '127.0.0.1';
var port =  3000;


app.listen(port, ipaddress);