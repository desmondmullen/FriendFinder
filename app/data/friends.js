const axios = require('axios');

const friendsArray = [];
let queryURL;
function createRandomFriends() {
    let newUser = {};
    for (i = 0; i < 100; i++) {
        let gender;
        let lookingFor;
        let whatKind;
        if (i % 2 === 0) { // if it's an even number we'll get a random female
            gender = 'female';
            if (Math.floor(Math.random() * 2) === 0) {
                lookingFor = 'male';
                whatKind = 2;
            } else {
                lookingFor = 'female';
                whatKind = 4;
            };
            queryURL = 'https://randomuser.me/api/?gender=female&inc=name,picture&nat=us'
        } else {
            gender = 'male';
            if (Math.floor(Math.random() * 2) === 0) {
                lookingFor = 'female';
                whatKind = 1;
            } else {
                lookingFor = 'male';
                whatKind = 3;
            };
            queryURL = 'https://randomuser.me/api/?gender=male&inc=name,picture&nat=us'
        };

        axios.get(queryURL)
            .then(function (response) {
                let firstName = response.data.results[0].name.first;
                let firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.substring(1);
                let age = Math.floor(Math.random() * (56 - 20)) + 20;;
                let photo = response.data.results[0].picture.large;
                newUser = {
                    userID: new Date().getTime() + Math.floor(Math.random() * (9999 - 1111)) + 1111,
                    name: firstNameCapitalized,
                    age: age,
                    photo: photo,
                    whatKind: whatKind,
                    gender: gender,
                    lookingFor: lookingFor,
                    scores: [
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1,
                        Math.floor(Math.random() * 5) + 1
                    ]
                };
                friendsArray.push(newUser);
            })
            .catch((err) => console.log('axios error caught'));
        // .catch(function (error) {
        //     throw error;
        // });
    };
};
createRandomFriends();

module.exports = friendsArray;