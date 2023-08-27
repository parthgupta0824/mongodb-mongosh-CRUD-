const express = require('express')
const router = express.Router() // it is similar to [const app = express()] which is in our main index.js file and it also have all methord which 'app' have and we should not make another [const app = express()] 


const Product = require('../models/product')

// display all the products 
router.get('/products', async (req, res) => {
    const products = await Product.find({})
    // console.log(products)
    res.render('index.ejs', { products })
})

// get a page to add new products
router.get('/products/new', (req, res) => {
    res.render('new')
})

// creating a new product
router.post('/products', async (req, res) => {
    const { name, price, desc } = req.body
    await Product.create({ name, price, desc })
    res.redirect('/products')
})
// get a page to shwo a product
router.get('/products/:productid', async (req, res) => {
    const { productid } = req.params

    const product = await Product.findById(productid)
    res.render('show', { product })
})

//get edit page 
router.get('/products/:productid/edit', async (req, res) => {
    const { productid } = req.params
    const product = await Product.findById(productid)
    res.render('edit', { product })
})

// to update the product
const methodOverride = require('method-override') // use to overreide the methord our browes can send only get and post request
router.use(methodOverride('_method')) // middle ware to use methordoverrider

router.patch('/products/:productid', async (req, res) => {
    const { productid } = req.params
    const { name, price, desc } = req.body
    await Product.findByIdAndUpdate(productid, { name, price, desc })
    res.redirect('/products')
})



router.delete('/products/:productsid', async (req, res) => {
    const { productsid } = req.params
    await Product.findByIdAndDelete(productsid)
    res.redirect('/products')
})




module.exports = router

