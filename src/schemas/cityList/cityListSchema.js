'use strict';
module.exports = (app, mongoose) => {
    let citySchema = mongoose.Schema({
        'SlNo': { type: String },
        'town': { type: String },
        'Urban_status': { type: String },
        'State_code': { type: String },
        'State': { type: String },
        'District_code': { type: String },
        'District': { type: String }
    });

    let cities = mongoose.model('cities', citySchema);
    app.schema.cities = cities;

};

