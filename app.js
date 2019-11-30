// Basic NPM Modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Express framework initialization
const app = express();

// Schema reference
app.schema = {};

// Parsing requests
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

// Set Port
app.set('port', process.env.PORT || 5000);

// Configuration reference
app.config = require('./src/config/devConfig.js');

// Mongoose Database connection (with auto-increment initialization)
require('./src/onServerStart/mongooseConnect.js')(app, mongoose);

// Handle uncaught exception
require('./src/onServerStart/uncaughtException.js')(app);

// API Router reference
require('./router')(app);
require('./model')(app, mongoose);

// Data Access Layer reference
app.crud = require('./src/dal/crud');

// Server Start
const listener = app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
    let collection = app.schema.cities;
    app.crud.removeCollection(collection, (err, result) => {
        if (err) {
            console.log("Error in remove collections");
        } else {
            console.log("Successfully remove");
            //Call script
            require('./src/onServerStart/script.js')(app);
        }
    });
});