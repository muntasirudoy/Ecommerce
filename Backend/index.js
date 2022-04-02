import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser"
import dbConnection from './Config/dbConnection.js'
const app = express()
app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

dbConnection()


// all routers start
import allProducts from './Routes/Products/allProducts.js'
import bestSellingProducts from './Routes/Products/bestSellingProducts.js'
import individualProduct from './Routes/Products/individualProduct.js'
import prductCategory from './Routes/Products/prductCategory.js'
// all routers end




// ALL PRODUCTS
app.use('/api/all_products', allProducts )
// INDIVIDUAL 
app.use('/all_products/:id', individualProduct )
// BEST SELLING
app.use('/api/bestSell', bestSellingProducts )
// CATEGORY 
app.get('/:cat', prductCategory )



app.listen(8000,()=>{
    console.log("connected")
})