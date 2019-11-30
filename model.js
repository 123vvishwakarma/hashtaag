
exports = module.exports = (app, mongoose) => {
    // City Schemas
    require('./src/schemas/cityList/cityListSchema')(app, mongoose);
};