const express = require('express');
const path = require('path');

var app = express();
var PORT = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);




//take data and make reservation with this constructor
// const reservationsList = [];

// reservationsList.push({ 'name': 'Desmond', 'email': 'dm@bootcamp.com', 'phone': '919-260-8858', 'uniqueID': '5200', 'feedback': 'reservation', 'position': 1 })

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'home.html'));
// });

// app.post('/', function (req, res) {
//     var reqbody = req.body;
//     reservation = new Reservation(reqbody.name, reqbody.email, reqbody.phone, reqbody.uniqueID);
//     if (reservationsList.length < 5) {
//         reservationsList.push(reservation);
//         console.log(reservationsList);
//     } else {
//         waitingList.push(reservation);
//         console.log(waitingList);
//     }
//     res.json(reservation);
// });

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});