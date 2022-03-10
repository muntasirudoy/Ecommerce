import express from 'express'
import ProductsData from './ProductsData.js'
import cors from 'cors'


const app = express()
app.use(cors())

app.get('/all_products', function (req, res) {
    res.send(ProductsData)
  })


app.get('/all_products/:id', function (req, res) {
    const singleproduct = ProductsData.find((item)=>item._pid == req.params.id)
    res.send(singleproduct)
  })



app.listen(8000,()=>{
    console.log("connected")
})