'use strict';
module.exports = (app, mongoose) => {
    let connection = mongoose.connect(app.config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('error', (err) => {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`? : ', err);
    });
};