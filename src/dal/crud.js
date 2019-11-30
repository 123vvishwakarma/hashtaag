// Function to insert document 
exports.createDocument = (toSaveDoc, collection, callback) => {
    let res = new collection(toSaveDoc);
    res.save().then((doc) => {
        callback("", doc);
    }).catch((e) => {
        callback(e, "");
    });
};

// Function to get document
exports.get = (query, collection, selection, callback) => {
    collection.find(query, selection).then((doc) => {
        callback("", doc);
    }).catch((err) => {
        callback(err, "");
    });
};

// Function to remove the collections
exports.removeCollection = (collection, callback) => {
    collection.remove().then((doc) => {
        callback("", doc);
    }).catch((err) => {
        callback(err, "");
    });
};
