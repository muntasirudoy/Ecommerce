import React,{useEffect,useContext,useReducer,useState} from 'react'
import Button  from './Button'
import Product_Card from './Product_Card'
import axios from 'axios';




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



const Categories_Filter = (props) => {

const [catButton, setCategoruButton] = useState([])
const [allCatProduct, setAllCatProduct] = useState([])

const catButtonArray=[]

  useEffect(async()=>{
    dispatch({
      type:"FATCH_REQ"
    })
    try {
      const products= await axios.get("http://localhost:8000/all_products")
      products.data.filter(items=>{
        if(catButtonArray.indexOf(items.category) == -1){
          catButtonArray.push(items.category)
        }
      })
      setCategoruButton(catButtonArray)
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
// fetch category product

  const handleCategory=async (cat)=>{
    const products= await axios.get(`http://localhost:8000/${cat}`)
    setAllCatProduct(products.data)
  }


  const handleAllCategory =()=>{
    setAllCatProduct(state.products)
  }


  return (
    <div className='container'>
    <div className='all-category-cards'>
      {/* product tab button */}
      <div className='cards-tab-button'> 

               <Button  active="active"  onClick={()=>handleAllCategory()}> All Category</Button>

            {catButton.map(items=>(
                <Button  active={allCatProduct.map(item=> item.category == items ? "active" : "")} hover={`hover ${items}`} onClick={()=>handleCategory(items)}> {items}</Button>       
          ))}
      </div>

       {/* All category product with slider */}
        <div className='all-category-products'>
  
             <Product_Card products={allCatProduct.length > 0 ? allCatProduct : state.products  } loading={state.loading} />
  
        </div>

  </div>
  </div>
  )
}

export default Categories_Filter