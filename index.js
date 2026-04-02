//list of constants needed for the backend
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const Item = require("./models/item.model.js");
const itemRoute = require("./routes/item.route.js");
const app = express();
require('dotenv').config();
// for security reasons, i will store our MONGO password inside the .env file
// so that way its very secure on github just in case.
const dbPASS = process.env.MONGO_PASS;

//cors allows the frontend to have "permission" to talk to the backend.
app.use(cors({
    origin: "http://127.0.0.1:5500"
}));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set up EJS view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//routes
app.use("/api/items", itemRoute);

//connects to the backend server hosted on MongoDB
mongoose.connect(dbPASS)
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed.");
  });
