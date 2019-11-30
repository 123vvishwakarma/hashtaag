module.exports = (app) => {
    app.get('/state', require('../handlerFunction/apis/cityApiFunction').searchState);
    app.get('/town', require('../handlerFunction/apis/cityApiFunction').searchTown);
    app.get('/district', require('../handlerFunction/apis/cityApiFunction').searchDistrict);
};