import React,{useContext, useState} from 'react'
import {ShoppingCartOutlined,HeartOutlined,UserOutlined,MinusOutlined,PlusOutlined,DeleteOutlined} from '@ant-design/icons';
import { Badge,Empty , Avatar, Input,Drawer,Button} from 'antd'
import logo from '../Assest/logo.png'
import { Store } from '../Store/Store';


const Mid_Nav = () => {

    const onSearch = value => console.log(value);
    const { Search } = Input;
    const [cartdown, setcartdown] =useState(false)
    const {state,dispatch} =useContext(Store)


    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };

const quantity =(items, quantity)=>{
  dispatch({
    type:"ADD_CART",
    payload:{...items,quantity}
  })
}






  return (
    <>
      <div className='mid-nav'>
                  <div className='logo'><img src={logo} /></div>
                     <div className='search'>
                     <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                        />
                    </div>   
                    <div className='cart'>
                       <Badge count={state.cartItems.length} >
                           <Avatar icon={ <ShoppingCartOutlined onClick={showDrawer} />}/>
                      </Badge>

                      <Badge count={5}>
                           <Avatar icon={ <HeartOutlined />}/>
                      </Badge>      
                         
                    </div>
                    <div className='account'>
                      <p><UserOutlined /> Login/Register</p>
                    </div>

                    <Drawer title="Shooping Cart" placement="right" onClose={onClose} visible={visible}>
                     {state.cartItems.length  ? state.cartItems.map(items=>(             
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

                    
                       <div className='total-btn'>
                                <h2>Total: {
                                            //  state.cartItems.length >1 ? state.cartItems.reduce((ac,cc)=> console.log(ac,cc) ) : 0
                                }</h2>
                                <Button>Checkout</Button>
                            </div>
                    </Drawer>
                     
                 
             </div>
             
    </>
  )
}

export default Mid_Nav