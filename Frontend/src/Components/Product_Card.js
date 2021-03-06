import React, { useContext, useReducer,useState,useEffect } from 'react'
import { Spin,Modal,Tag, Button , Badge, Select,Tooltip,Card,Input,Drawer, Empty, Space,} from 'antd';
import { PlusOutlined , TagOutlined,HeartOutlined,MinusOutlined,ShoppingCartOutlined,SyncOutlined} from '@ant-design/icons';
import axios from 'axios';
import Rating from '../Components/Rating'
import { Store } from '../Store/Store';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const reducer =(state,action)=>{
    switch (action.type) {
        case "FATCH_REQ":
        return {...state,loading:true}
   
        case "FATCH_SUC":
        return {...state,loading:false, singleproducts: action.payload,modal2Visible: true}

        case "REMOVE":
         return {...state,modal2Visible: false}

        case "FATCH_ERR":
         return {...state,loading:false, error: action.message}
      
        default:
          return state
      }
}


const Product_Card = (props) => {
    
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
    const [ overlayid , setoverlayid] = useState(false)
    const [modal3Visible, setmodal3Visible] = useState(false)

    const [compareproduct, setcompareproduct] = useState ('')

    const [comparesearch1, setcomparesearch1] = useState('')
    const [compareSearch2, setCompareSearch2] = useState([])

    const [searchproduct1,setsearchproduct1] = useState('')
    const [searchproduct2,setsearchproduct2] = useState('')

    const [searchlist,setsearchlist] = useState(true)

    const[ccupon, setcupon] = useState('')
    const[discountprice, setdiscountprice] = useState('')


    const catProducts = props.products
    const { Option } = Select;

     function handleChange(value) {
        console.log(`selected ${value}`);
      }
// animation 

// compare modal button fuction
    const compare= async(id)=>{
      setmodal3Visible(true)
        try {
            const compareproducts= await axios.get(`http://localhost:8000/all_products/${id}`)
             setcompareproduct(compareproducts.data)
          }
          catch(err) {
            console.log(err)
          }
       }
// close compare modal
const closeCompareModal =()=>{
  setmodal3Visible(false)
}
// details modal button function
    const details= async(id)=>{
        dispatch({
            type:"FATCH_REQ",
          })
        try {
            const products= await axios.get(`http://localhost:8000/all_products/${id}`)
            dispatch({
              type:"FATCH_SUC",
              payload:products.data
            })
          }
          catch(err) {
            console.log(err)
          }
       }
      // ADD CART  
    const {state:cstate, dispatch:cdispatch} = useContext(Store)
    const addcart = async(id)=>{
      try {
        const products= await axios.get(`http://localhost:8000/all_products/${id}`)
        let newproduct = products.data
        setoverlayid(newproduct._pid)
        setVisible(true);
        let exproduct = cstate.cartItems.find(item=> item.id == newproduct._pid)
        let quantity = exproduct ?  newproduct.quantity : 1
       
        cdispatch({
          type:"ADD_CART",
          payload:{...newproduct,quantity}
        })
      }
      catch(err) {
        console.log(err)
      }
    }
    const quantity =(item,quantity)=>{
      cdispatch({type:"ADD_CART",
                payload: {...item, quantity}
    })
    }
     const initvalue ={
     singleproducts: {},
     loading: true,
     modal2Visible: false,
     }
     const [visible, setVisible] = useState(false);
     const onClose = () => {
       setVisible(false);
     };
  const [state,dispatch] = useReducer (reducer, initvalue)

//  copare grid
  const gridStyle = {
    width: '33.33%',
    textAlign: 'center',
  };

// compare search 1
const coparesearch1 =(e)=>{
  // setcomparesearch1(e.target.value)
}
const coparesearchproduct1= async(id)=>{
  const products= await axios.get(`http://localhost:8000/all_products/${id}`)
  let searchproduct = products.data
  setsearchproduct1(searchproduct)
}
// compare search 2
const copareSearch2 =(e)=>{
  if(!e.target.value ){
    setsearchlist(false)
  }
  else{
    setsearchlist(true)
  }

let match = catProducts.map(items=> items.pname.includes(e.target.value) ? items : '')
setCompareSearch2(match)

 }
const copareSearchProduct2= async(id)=>{
  const products= await axios.get(`http://localhost:8000/all_products/${id}`)
  let searchproduct = products.data
  setsearchproduct2(searchproduct)
  setsearchlist(false)
}
// ENTER CUPON 
 const cuponset=(e)=>{
  setcupon(e.target.value)
 }
const applycupon =(discount,price,cupon)=>{
  let dispr = parseInt(discount)
  if(cupon == ccupon){
   setdiscountprice((dispr / price ) * 100)
  }
}



const {rating,pname,price,review,description,stock,img,discout,cupon} = state.singleproducts

  return (
      <>

        {props.loading ? 
        <Spin size="large" />
        :
        
         catProducts.map(products=> (
// ........................
            <div className='p-card-body'>
         <div className='love-compare'>
             <HeartOutlined />
             <Tooltip placement="topRight" title="Compare with another product">
                 <SyncOutlined onClick={()=>compare(products._pid)} />
             </Tooltip>
             {props.sold ? <Tag color="#434E6E">Sold : {products.sold}</Tag> : ""}
             
         </div>
         
         <div className='product-image' >
         <img src={products.img}  />
         </div>

         <div className='product-name-price' >
             <h3 className='product-name' onClick={()=>details(products._pid)}>{products.pname}</h3>
             <h4 className='product-price'>{`$.${products.price}`}</h4>
         </div>  
        
         {overlayid == products._pid ? 
               <div className='overlay'>
                     {cstate.cartItems.map((item)=> item._pid == products._pid 
                       ?      
                             item.quantity == 0  ?  
                             <div style={{color:"white", fontSize:"24px",display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}} onClick={()=>addcart(products._pid)}> Add Product </div>
                             :
                                 <div className='inde'>
                                     <div style={{marginBottom: "50px",color:"white",fontSize:"18px",fontWeight:"600"}}> Total: {item.price * item.quantity} </div>
                                   <Button.Group>
                                       <Button onClick={()=> quantity(item, item.quantity-1)}  icon={<MinusOutlined />} />
                                       <p className='details-inc-dec'>{item.quantity}</p>
                                       <Button onClick={()=> quantity(item, item.quantity+1)} icon={<PlusOutlined />} />
                                   </Button.Group>
                                 </div>
                                :
                                ''
                       )}
               </div>
                     :
                    ''
         }


           <h3 className='add-cart-btn' onClick={()=>addcart(products._pid)}> Add Cart </h3>

         <div className='circle-btn'>
         <div className='main-icon'>
             <PlusOutlined />
         </div>
         </div>

         {/* overlay add */}
              
            </div>
// ....................
        )
        ) 
        }





{/* Details modal */}
        <Modal centered visible={state.modal2Visible} onCancel={()=>dispatch({type:"REMOVE"})}>

          <div className='image'>
              <img src={img} />
          </div>
          <div className='single-details'>
             <h1 className='details-pname'>{pname}  
             <Badge.Ribbon text={stock <=1 ? 'Out of Stock' : 'In Stock' } color={stock <=1 ? 'red' : 'cyan' }></Badge.Ribbon>
             
             </h1>
             <Rating rating={rating}/> {`Total Review (${review})`}
             <h3 className='details-price'>Price:${price}</h3>
             <h3 className='details-price'>Discount Price:${discountprice}</h3>
             <p className='details-description'>{description}</p>

             <div style={{marginTop:"20px"}}>
             <Button.Group>
                <Button  icon={<MinusOutlined />} />
                <p className='details-inc-dec'>1</p>
                <Button icon={<PlusOutlined />} />
             </Button.Group>
             </div>

             <div> Colors: <Space/>
             <Select defaultValue="Choose Color" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Red</Option>
                <Option value="lucy">Back</Option>
                <Option value="Yiminghe">Green</Option>
            </Select>

            <div className='usecupon'>
                <Input placeholder='Enter Your Cupon Code' onChange={cuponset}  />
                <Button onClick={()=>applycupon(discout,price,cupon)}>Apply</Button>
            </div>

             </div>
                {stock <= 1 ?
                        <div className='details-contact'>
                            <Button  icon={<TagOutlined />} > Contact Seller</Button>
                        </div>
                        :
                        <div className='details-btn'>
                                <Button.Group>
                                    <Button  icon={<TagOutlined />} > Buy Now </Button>
                                    <Button icon={<ShoppingCartOutlined />}> Add Cart </Button>
                                </Button.Group>
                        </div>
                }
             </div>
        </Modal>
  {/* compare modal */}
       <Modal centered visible={modal3Visible} onCancel={closeCompareModal}>
           <div className='compare-container'>
               <Card title="Copare with another product">
                    <Card.Grid style={gridStyle} hoverable={false}>
                          
                          <div className='compare-img' style={{marginTop:"50px"}}>
                            <img src={compareproduct.img} />
                          </div>
                          <h1 >{compareproduct.pname}</h1>
                          <h2>Price: ${compareproduct.price}</h2>
                          <ul>
                            <li>Total Review:{compareproduct.review}</li>
                            <li>Sold Out:{compareproduct.sold}</li>
                            <li>In Stock:{compareproduct.stock}</li>
                            <li>Available Color:{compareproduct.avcolor}</li>
                          </ul>

                          
                          <div className='details-btn'>
                                <Button.Group>
                                    <Button  icon={<TagOutlined />} > Buy Now </Button>
                                    <Button icon={<ShoppingCartOutlined />}> Add Cart </Button>
                                </Button.Group>
                          </div>      
                      </Card.Grid>
                    <Card.Grid style={gridStyle} hoverable={false}>
                    <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={coparesearch1}>
                     { catProducts.map(items=>(
                          <Option key={items._pid} >
                             <p onClick={()=>coparesearchproduct1(items._pid)}>{items.pname}</p>
                          </Option>
                     ))}
                     </Select>

                      {searchproduct1 ? 
                          <>                  
                              <div className='compare-img' style={{marginTop:"20px"}}>
                                      <img src={searchproduct1.img} />
                                    </div>
                                    <h1 >{searchproduct1.pname}</h1>
                                    <h2>Price: ${searchproduct1.price}</h2>
                                    <ul>
                                      <li>Total Review:{searchproduct1.review}</li>
                                      <li>Sold Out:{searchproduct1.sold}</li>
                                      <li>In Stock:{searchproduct1.stock}</li>
                                      <li>Available Color:{searchproduct1.avcolor}</li>
                                    </ul>
                      
                                    <div className='details-btn'>
                                          <Button.Group>
                                              <Button  icon={<TagOutlined />} > Buy Now </Button>
                                              <Button icon={<ShoppingCartOutlined />}> Add Cart </Button>
                                          </Button.Group>
                                    </div>  
                                    </>
                           :
                        <Empty style={{marginTop:"20px"}} description="Select a Product"/>   
                        
                        } 

                    </Card.Grid>
                    <Card.Grid style={gridStyle} hoverable={false}>
                     <Input onChange={copareSearch2} placeholder="Search your products"/>
                          {searchlist ?
                              <div className='search-list' >
                                  <ul> 
                                    {compareSearch2.map(items=>(
                                      <li onClick={()=>copareSearchProduct2(items._pid)}>{items.pname}</li>
                                    ))}
                                  </ul>
                              </div>
                         :
                         ""
                          }
                       {searchproduct2 ? 
                          <>
                         <div className='compare-img' style={{marginTop:"20px"}}>
                            <img src={searchproduct2.img} />
                          </div>
                          <h1 >{searchproduct2.pname}</h1>
                          <h2>Price: ${searchproduct2.price}</h2>
                          <ul>
                            <li>Total Review:{searchproduct2.review}</li>
                            <li>Sold Out:{searchproduct2.sold}</li>
                            <li>In Stock:{searchproduct2.stock}</li>
                            <li>Available Color:{searchproduct2.avcolor}</li>
                          </ul>
            
                          <div className='details-btn'>
                                <Button.Group>
                                    <Button  icon={<TagOutlined />} > Buy Now </Button>
                                    <Button icon={<ShoppingCartOutlined />}> Add Cart </Button>
                                </Button.Group>
                          </div>  
                        </>
                           :
                        <Empty style={{marginTop:"20px"}} />   
                        
                        } 
                    </Card.Grid>
              </Card>
           </div>
        </Modal>
{/* cart drwer */}
        <Drawer title="Shooping Cart" placement="right" onClose={onClose} visible={visible}>
                   <div className='side-cart'>
                     {cstate.cartItems.length  ? cstate.cartItems.map(items=>(             
                             items.quantity <1 ? dispatch({type :"REMOVE_CART", payload: items._pid}) :   
                             <div className='single-card' >
                             <img src={items.img} />
                             <div className='name-price'>
                               <h3>{items.pname}</h3>
                               <h4>Price : ${items.price * items.quantity}.00</h4>
                             </div>
                             <div className='sbutton'>
                             <Button.Group>
                               <Button disabled={items.quantity < 1 ? true : false} onClick={()=> quantity(items, items.quantity-1)} icon={<MinusOutlined />} />

                               <p className='details-inc-dec'>{items.quantity}</p>
                               <Button onClick={()=> quantity(items, items.quantity+1)} icon={<PlusOutlined />} />
                           </Button.Group>
                             </div>
                         </div>
                        
                     )) 
                    :
                    <Empty />
                    
                    }
                    </div>

                    
                       <div className='total-btn'>
                                <h2>Total: {
                                            //  state.cartItems.length >1 ? state.cartItems.reduce((ac,cc)=> console.log(ac,cc) ) : 0
                                }</h2>
                               {!cstate.cartItems.length ? <Button disabled ><Link to="/Continue_Order"> Continue Order </Link></Button> :    <Button ><Link to="/Continue_Order"> Continue_Order </Link></Button> }
                            </div>
        </Drawer>
       
</>
  )
}

export default Product_Card




