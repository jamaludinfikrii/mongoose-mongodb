const mongoose = require('mongoose')

var productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    nama : String,
    harga : Number,
    category : String,
    ukuran : Array
},{
    versionKey : false
})

var productModel = mongoose.model('products' , productSchema)

module.exports = productModel