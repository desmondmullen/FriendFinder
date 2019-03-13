const path = require('path');
const friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
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
        let initialMatches = [];
        let matchesWithDifferences = [];
        friends.forEach(element => {
            if (element.whatKind == findWhatKind) {
                initialMatches.push(element);
            };
        });
        initialMatches.forEach(element => {
            let n = 1; // because score 0 is whatKind;
            let theTotalDifference = 0;
            element.scores.forEach(score => {
                theDifference = Math.abs(score - userScores[n]);
                theTotalDifference += theDifference;
                n++;
            });
            if ((theTotalDifference.toString()).length < 2) {
                theTotalDifference = '0' + theTotalDifference;
            };
            matchesWithDifferences.push(`${theTotalDifference}, ${element.name}, ${element.age}, ${element.photo}, ${element.scores}`);
        });
        var topFiveMatches = matchesWithDifferences.sort().slice(0, 5);
        res.json(topFiveMatches);
    });
};