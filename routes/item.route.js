const express = require("express");
const app = express();
const Item = require("../models/item.model.js");
const router = express.Router();
const {getItems, getItem, postItem, updateItem, deleteItem} = require("../controllers/item.controller.js");

app.set("view engine", "ejs");

//search route - renders the view with ejs
app.get('/search-item', (req, res) => {
    res.render('search-item'); 
});

//gets all items when called for in the database
router.get("/", getItems);

//gets a specific item when called for in the database
router.get("/:id", getItem);

//posts an item on the database
router.post("/", postItem);

//updates an item on the database
router.put("/:id", updateItem);

//deletes an item on the database
router.delete("/:id", deleteItem);

module.exports = router;