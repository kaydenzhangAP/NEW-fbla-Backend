const Item = require("../models/item.model.js");

//retrieves all items in the database
const getItems = async (req, res) => {

  try {
    const a = await Item.find(req.body);
    res.status(200).json(a);
  } catch (error) {
    res.status(500).json({message: error.message});
  }

};

//retrieves a specific item in the database
const getItem = async (req, res) => {

    try {
    const { id } = req.params;
    const a = await Item.findById(id)
    res.status(200).json(a)
  } catch (error) {
    res.status(500).json({message: error.message});
  }

};

//posts an item in the database
const postItem = async (req, res) => {
  try {
    const a = await Item.create(req.body)
    res.status(200).json(a);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

//updates an item inside the database
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const a = await Item.findByIdAndUpdate(id, req.body);

    if (!a){
      return res.status(404).json({message: "Item Not Found! :("});
    }

    const updatedItem = await Item.findById(id);

    res.status(200).json(updatedItem);

  } catch (error) {
    res.status(500).json({message: error.message});
  }

};

//deletes an item in the databse
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const a = await Item.findByIdAndDelete(id, req.body);

    if (!a){
      return res.status(404).json({message: "Item Not Found :("});
    }

    res.status(200).json({message: "Item has beem deleted successfully."});

  } catch (error) {
    res.status(500).json({message: error.message});
  }

};


module.exports = {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem
};
