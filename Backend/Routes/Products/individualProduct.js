
import express from 'express'
import ProductsData from '../../ProductsData.js'

const individualProductRouter = express.Router()

// INDIVISUAL PRODUCTS
individualProductRouter.get('/', function (req, res) {
  const singleproduct = ProductsData.find((item)=>item._pid == req.params.id)
  res.send(singleproduct)
})

export default individualProductRouter