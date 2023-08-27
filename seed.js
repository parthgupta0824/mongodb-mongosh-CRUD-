// this file will have some dummy data to chk the functionality of the app 

const mongoose = require('mongoose')

const dummyProducts = [
    {
        name: 'iPhone',
        price: 1000,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
    },
    {
        name: 'Macbook Air',
        price: 1500,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system." 
    },
    {
        name: 'Apple watch 6',
        price: 800,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."  
    },
    {
        name: 'Reebook shoe',
        price: 200,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."   
    },
    {
        name: 'Book',
        price: 10,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."    
    },
    {
        name: 'Pen',
        price: 3,
        desc: "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."    
    }
]

const Product = require('./models/product')

async function seedDB() { 
    // console.log("data seeded successfully")  
    try {
        // await Product.deleteMany({})
        await Product.insertMany(dummyProducts)
        console.log('data added in db successfully')
    }
    catch (error) {
        console.log("Error :( while adding data in the dataabse")
    }
}

module.exports = seedDB