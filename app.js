var express = require('express');
var app = express();
var path = require('path');
var datos = require('./utils/tweets.json');
const palabras = require('./utils/wordcloud.js');
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware 1
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/datos', function(req, res) {
    let limpio = palabras.calculate(datos);
    res.json(limpio);
});

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port);
});