const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// meeee ? 204 : gggg
const productSchema = new Schema({

    name:{
        type: String,
        require: true
    },
    price:{
        type:Number,
        require: true
    },
    quantity:{
        type:Number,
        require: true
    },

})

const cartSchema = new Schema({
    products: [{
        type: mongoose.Types.ObjectId,
        ref: "products"
    }]
})

const Product = mongoose.model('product',productSchema);
const Cart = mongoose.model('cart',cartSchema)

module.exports = {
    Product,
    Cart
} 