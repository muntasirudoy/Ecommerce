
import express from 'express'
import ProductsData from '../../ProductsData.js'
import productsModel from '../../Models/productsModel.js'
const allProductsRouter = express.Router()



// ALL PRODUCTS
// get all products
allProductsRouter.get('/', function (req, res) {
    res.send(ProductsData)
})

allProductsRouter.post('/', function (req, res) {
  let {pname,pdetails,price,rating,review,slug,img,stock,
    description,category,sold,discout,cupon,shipping} = req.body

  const  products = new productsModel ({
    pname,
    pdetails,
    price,
    rating,
    review,
    slug,
    img,
    stock,
    description,
    category,
    sold,
    discout,
    cupon,
    shipping
  })

  products.save()
  .then((products)=>{
    res.send(products)
  })
  .catch((error)=>{
    res.send(error)
  })

})

export default allProductsRouter

