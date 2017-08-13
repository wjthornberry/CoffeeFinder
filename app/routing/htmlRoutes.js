// Dependencies
// Path allows us to get the right file path for the HTML
var path = require('path');

// Routing
// HTML GET Requests - the below code handles when a user visits a page
// In this case, HTML content will be displayed to them - either the survey page or the home page
module.exports = function (app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    // If there isn't a matching route, the default route sends the user to the home page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};