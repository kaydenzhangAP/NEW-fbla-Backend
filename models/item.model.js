const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
    {
        
        fname: {
            type: String,
            required: [true, "Please enter [x] name."],

        },
        
        lname: {
            type: String,
            required: [true, "Please enter [y] name."],
        },

        item: {
            type: String,
            required: [true, "Please enter missing item."],

        },

        itemDesc: {
            type: String,
            required: [true, "Please enter missing item description."],
        },

    },
    {
        timestamps: true
    }
);

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;