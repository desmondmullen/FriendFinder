/*
A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/

const friends = require("../data/friends");
let theTotalDifference;

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let userScores = req.body.scores
        let whatKind = parseInt(userScores[0]);
        let findWhatKind;
        switch (whatKind) {
            case 1:
                findWhatKind = 2;
                break;
            case 2:
                findWhatKind = 1;
                break;
            case 3:
                findWhatKind = 3;
                break;
            case 4:
                findWhatKind = 4;
                break;
            default:
            // code block
        }
        let returnFriends = [];
        let returnDifferences = [];
        friends.forEach(element => {
            if (element.whatKind == findWhatKind) {
                returnFriends.push(element);
            };
        });
        // console.log(returnFriends);
        returnFriends.forEach(element => {
            let n = 1; // because score 0 is whatKind;
            let theTotalDifference = 0;
            element.scores.forEach(score => {
                theDifference = Math.abs(score - userScores[n]);
                theTotalDifference += theDifference;
                n++;
            });
            console.log(element.name, theTotalDifference);
            returnDifferences.push('{' + element.name + ': ' + theTotalDifference + '}');
        });
        // returnDifferences.push(theTotalDifference);
        // console.log(returnFriends);
        // res.send('got it');
        res.send(returnDifferences);
    });
};