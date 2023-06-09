const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            require: true
        },
        quantity: {
            type: Number,
            required: true
        }

    }
);

const Product = model('Product', productSchema);

module.exports = Product;