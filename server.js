// Dependencies - npm packages to give the server funcitonality
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path');

// Express configuration to set up the basic properties of the server
var app = express();

// Sets the server port.
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`)
});

// Sets up bodyParser, which allows the server to interpret the data sent to it
// Boilerplate code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

// Router points server to the route files
// These are the server's map for how to respond to a user when they 
// visit or request data from the URLs.

require('./app/routing/htmlroutes.js')(app);
require('./app/routing/apiroutes.js')(app);
