const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
// create express app
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('tiny'));


// define a simple route
app.get('/', function (req, res) {
    fs.readFile(__dirname + '/index.html', 'utf8', function (err, text) {
        res.send(text);
    });
});

require('./routes/routes.js')(app);

// listen for requests
app.listen(3000, function () {
    console.log("Server is listening on port 3000");
});