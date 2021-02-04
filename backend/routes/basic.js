const router = require("express").Router();
let Basic = require("../models/basic.model");

router.route('/').get((req, res) => {
    Basic.find()
        .then(basics => res.json(basics))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const string_field01 = req.body.string_field01;
    const numeric_field01 = req.body.numeric_field01;

    const new_basic = new Basic({
        string_field01 : string_field01
        , numeric_field01 : numeric_field01
    });

    new_basic.save()
        .then(() => res.json('Basic added'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
