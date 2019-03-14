const express = require('express');
const path = require('path');

var app = express();
var PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app/assets'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});