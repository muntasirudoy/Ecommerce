
import express from 'express'
import ProductsData from '../../ProductsData.js'

const prductCategoryRouter = express.Router()

// PRODUCT CATEGORY
prductCategoryRouter.get('/', function (req, res) {
    const catProduct = ProductsData.filter((item)=>{
      if(item.category == req.params.cat){
        return item
      }
    })
    res.send(catProduct)
  })

export default prductCategoryRouter