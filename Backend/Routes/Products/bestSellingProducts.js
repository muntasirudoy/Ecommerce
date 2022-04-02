
import express from 'express'
import ProductsData from '../../ProductsData.js'

const bestSellingProductsRouter = express.Router()

// BEST SELLING PRODUCTS
bestSellingProductsRouter.get('/', function (req, res) {
    const bestProduct = ProductsData.filter((item)=>{
      if(item.sold >= 250){
        return item
      }
    })
    res.send(bestProduct)
  })

export default bestSellingProductsRouter