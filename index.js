// -----------------------------------------------1
const express = require('express')
const app = express()

const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended:true})) 

// -----------------------------------------------2
const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/shopApp')
    .then(() => console.log('DB connected'))
    .catch((e) => console.log(e))

// -----------------------------------------------3
// seeding the data in DB 
const seedDB = require('./seed')
//seedDB()   // here we are commenting it so that data do not get in DB again and again when the page get refresh :)

// -----------------------------------------------4

const productRoutes = require('./routes/productRoutes') 

app.use(productRoutes)


app.get('/', (req, res) => {
    res.send('<h1>This is a full stack application :)</h1>')
})



app.listen(3000, () => {
    console.log('server started')
})

 
