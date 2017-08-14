// Dependencies - npm packages to give the server funcitonality
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Sets the server port.
var PORT = process.env.PORT || 3000;

// Express configuration to set up the basic properties of the server
var app = express();

// Sets up bodyParser, which allows the server to interpret the data sent to it
// Boilerplate code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Router points server to the route files
// These are the server's map for how to respond to a user when they 
// visit or request data from the URLs.

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// // Loads static files
app.use(express.static('./app/public'));
// app.use('/static', express.static(path.join(__dirname, 'app/public')))

app.listen(PORT, function () {
    console.log(`Listening on Port ${PORT}`)
});


// Heroku link
// https://nameless-dusk-37653.herokuapp.com/
