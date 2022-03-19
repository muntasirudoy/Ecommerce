import express from 'express'
import ProductsData from './ProductsData.js'
import cors from 'cors'


const app = express()
app.use(cors())



// ALL PRODUCTS
app.get('/all_products', function (req, res) {
    res.send(ProductsData)
  })

// BEST SELLING
  app.get('/bestsell', function (req, res) {
    const bestProduct = ProductsData.filter((item)=>{
      if(item.sold >= 250){
        return item
      }
    })
    res.send(bestProduct)

  })

  // INDIVIDUAL 
app.get('/all_products/:id', function (req, res) {
    const singleproduct = ProductsData.find((item)=>item._pid == req.params.id)
    res.send(singleproduct)
  })

  // CATEGORY 
  app.get('/:cat', function (req, res) {
    const catProduct = ProductsData.filter((item)=>{
      if(item.category == req.params.cat){
        return item
      }
    })
    res.send(catProduct)
  })


 // category 



app.listen(8000,()=>{
    console.log("connected")
})