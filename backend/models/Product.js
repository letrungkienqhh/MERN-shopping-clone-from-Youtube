const mongoose = require('mongoose')
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    imageUrl:{
        type:String,
        require:true
    },

})
const Product = mongoose.model('Product',productSchema)
module.exports = Product