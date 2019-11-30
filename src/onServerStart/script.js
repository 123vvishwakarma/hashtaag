const csv = require('csvtojson');

module.exports = (app) => {
    const csvFilePath = './src/file/citylist.csv';
    csv()
        .fromFile(csvFilePath)
        .then((cityListArray) => {
            let collection = app.schema.cities;
            cityListArray.forEach(object => {
                app.crud.createDocument(object, collection, (err, doc) => {
                    if (err) {
                        console.log("Error in saving doc : ", err)
                    } else {
                        console.log("Doc inserted");
                    }
                });
            });
        });

    const jsonArray = csv().fromFile(csvFilePath);
}