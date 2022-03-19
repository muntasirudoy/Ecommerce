import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product_Card from './Product_Card'


const BestSelling = () => {

    const [bestProduct, setBestProduct] = useState([])
    
    
      useEffect(async()=>{
        const products= await axios.get("http://localhost:8000/bestSell")
        setBestProduct(products.data)
      },[setBestProduct])
      


  return (
    <div className="container">

            
             <div className='best-selling'>
                 <h1>Best Selling Products</h1>
                <div className='best-selling-products'>
                     <Product_Card sold="sold" products= {bestProduct}  />
                </div>

             </div>

    </div>


  )
}

export default BestSelling