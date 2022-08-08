const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minlenght: [2, 'Title must be at least 2 characters']
        },
        price: {
            type: Number,
            required: [true, 'Please enter a price']
        },
        description: {
            type: String,
            required: [true, 'Please give an description of the product']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);