import React, { useContext, useEffect, useReducer } from 'react';
import Product_Card from '../Components/Product_Card';
import axios from 'axios';
import './pagecss.css'



const reducer=(state,action)=>{
   switch (action.type) {
     case "FATCH_REQ":
     return {...state,loading:true}

     case "FATCH_SUC":
     return {...state,loading:false, products: action.payload}

     case "FATCH_ERR":
      return {...state,loading:false, error: action.message}
   
     default:
       return state
   }
}


const Product_Page = (props) => {



useEffect(async()=>{
  dispatch({
    type:"FATCH_REQ"
  })
  try {
    const products= await axios.get("http://localhost:8000/all_products")
    dispatch({
      type:"FATCH_SUC",
      payload:products.data
    })
  }
  catch(err) {
    console.log(err)
  }
},[])

const initvalue ={
  products : [],
  loading: false
}

const [state, dispatch] = useReducer(reducer,initvalue)


  return (
        <div className='container'>
           <div className='all-products'>
                    <Product_Card products={state.products} loading={state.loading}/>
            </div>
        </div>
  )
}

export default Product_Page