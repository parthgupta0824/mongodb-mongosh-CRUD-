const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    price: {
        type: Number,
        //    require:true,  later on add this 
        min: 0
    },
    desc: {
        type: String,
        trim: true
    }
})

const Product = mongoose.model('Product', productSchema); 


module.exports = Product
