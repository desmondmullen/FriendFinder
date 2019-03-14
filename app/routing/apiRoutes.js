const path = require('path');
const friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        let newFriend = req.body;
        let findWhatKind;
        switch (parseInt(newFriend.whatKind)) {
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
            let n = 0;
            let theTotalDifference = 0;
            element.scores.forEach(score => {
                theDifference = Math.abs(score - parseInt(newFriend.scores[n]));
                theTotalDifference += theDifference;
                n++;
            });
            if (theTotalDifference < 10) {
                theTotalDifference = '0' + theTotalDifference.toString();
            };
            matchesWithDifferences.push(`${theTotalDifference}, ${element.name}, ${element.age}, ${element.photo}, ${element.scores}, ${element.userID}`);
        });
        var topFiveMatches = matchesWithDifferences.sort().slice(0, 5);
        res.json(topFiveMatches);
        friends.push(newFriend);
    });

    app.post('/api/match', function (req, res) {
        let idToGet = req.body.userID;
        friends.forEach(element => {
            if (element.userID == idToGet) {
                res.send({ scores: element.scores, name: element.name, photo: element.photo });
            };
        });
    });
};