const path = require('path');
const axios = require('axios');

module.exports = function (app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    app.get('/validate/photo/:link', function (req, res) {
        let theLink = req.params.link;
        let thePhotoURL = theLink.replace(/\|/ig, '/');
        axios.get(thePhotoURL)
            .then(function (response) {
                if (response.status === 200 || response.status == 'success') {
                    res.sendStatus(response.status);
                };
            })
            .catch((err) => {
                console.log('axios error caught in htmlRoutes.js');
            });
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
};
