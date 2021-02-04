const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set up for mongodb. If a uri isn't found, it will not try to connect
const uri = process.env.ATLAS_URI;
if(uri) {
    let err_level = -1;
    mongoose.connect(uri, { useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true })
        .catch(err => {
            console.error("MongoDB connection failed. Ensure your ATLAS_URI environment variable contains valid connection info");
            err_level = 0;
        });
    if(err_level) {
        const connection = mongoose.connection;

        connection.once('open', () => {
            console.log("MongoDB connected.");
        });
    
    }
    
} else {
    console.error("No ATLAS_URI environment variable found. Be sure the backend/.env file exists and has a valid url.");
}

// Routes get set up here
const basic_router = require('./routes/basic');
app.use('/basic', basic_router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`); 
});
