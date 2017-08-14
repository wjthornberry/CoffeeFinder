// Require use of the friend array from app/data/friends.js
var friends = require('../data/friends.js');

module.exports = function(app) {
    // API GET requests
    // This is run when a user visits a page
    // A JSON of the data in the table is displayed to the user
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Takes the user's submission of a form and submits
    // that data to the server
    app.post("/api/friends", function (req, res) {
       
        var friendMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        // Takes the result of the user's survey POST and parses it
        var userData = req.body;
        var userScores = userData.scores;

        // Calculates difference between user's score with other user's scores in the db
        var totalDifference = 0;

        // Loop through all of the potential friends in the db
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            // Loops through each friend's scores
            for (var j = 0; j < friends[i].scores[j]; j++) {

                // Calculates the difference between the scores
                // Adds them to totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // Checks the sum of the differences
                // If less than the differences of the current best match
                if (totalDifference <= friendMatch.friendDifference) {
                    // Reset friendMatch to be the new friend
                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDifference = totalDifference;
                }
            }
        }
        // Saves the user's data to the db
        friends.push(userData);

        // Returns a JSON with user's friendMatch. 
        res.json(friendMatch);
    });
};