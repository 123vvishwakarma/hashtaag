//Function for search state
exports.searchState = (req, res) => {
    let collection = req.app.schema.cities;
    let selection = {
        State: 1,
        District_code: 1,
        District: 1,
        _id: 0
    };
    let query = {
        'State': {
            $regex: new RegExp(req.query.q, "i")
        }
    }
    req.app.crud.get(query, collection, selection, (err, result) => {
        if (err) {
            res.status(500).json({
                res: false,
                message: "failed",
                result: []
            });
        } else {
            res.status(200).json({
                res: true,
                message: "success",
                result: result
            });
        }
    });
};

//Function for search town
exports.searchTown = (req, res) => {
    let collection = req.app.schema.cities;
    let selection = {
        town: 1,
        State: 1,
        District: 1,
        _id: 0
    };
    let query = {
        'town': {
            $regex: new RegExp(req.query.q, "i")
        }
    }
    req.app.crud.get(query, collection, selection, (err, result) => {
        if (err) {
            res.status(500).json({
                res: false,
                message: "failed",
                result: []
            })
        } else {
            res.status(200).json({
                res: true,
                message: "success",
                result: result
            });
        }
    });
};

//Function for search district
exports.searchDistrict = (req, res) => {
    let collection = req.app.schema.cities;
    let selection = {
        town: 1,
        Urban_status: 1,
        State_code: 1,
        State: 1,
        District_code: 1,
        District: 1,
        _id: 0
    };
    let query = {
        'District': {
            $regex: new RegExp(req.query.q, "i")
        }
    }
    req.app.crud.get(query, collection, selection, (err, result) => {
        if (err) {
            res.status(500).json({
                res: false,
                message: "failed",
                result: []
            })
        } else {
            res.status(200).json({
                res: true,
                message: "success",
                result: result
            });
        }
    });
};



