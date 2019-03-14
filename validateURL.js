const axios = require('axios');

let queryURL;

queryURL = 'https://lh3.googleusercontent.com/a-/AAuE7mADrbRR8sFtY_-D4P7wKP677VtqIY2N6ZapeVibLw=s640-rw-il';
axios.get(queryURL)
            .then(function (response) {
                console.log(response.status);
            })
            .catch((err) => console.log('axios error caught'));
