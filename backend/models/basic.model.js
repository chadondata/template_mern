const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const basic_schema = new Schema({
    string_field01 : {
        type : String
        , required : true
        , unique : true
        , trim : true
        , minlength : 3
    },
    numeric_field01 : {
        type : Number
        , required : true
    }
}, {
    timestamps : true
})

const Basic = mongoose.model('Basic', basic_schema);

module.exports = Basic;
