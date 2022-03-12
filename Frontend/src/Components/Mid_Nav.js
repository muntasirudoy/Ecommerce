import React,{useContext, useState} from 'react'
import {ShoppingCartOutlined,HeartOutlined,UserOutlined,MinusOutlined,PlusOutlined,DeleteOutlined} from '@ant-design/icons';
import { Badge,Empty , Avatar, Input,Drawer,Button} from 'antd'
import logo from '../Assest/logo.png'
import { Store } from '../Store/Store';
import { Link } from 'react-router-dom';


const Mid_Nav = () => {

    const onSearch = value => console.log(value);
    const { Search } = Input;
    const {state,dispatch} =useContext(Store)


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
                           <Link to='/Continue_Order'><Avatar icon={ <ShoppingCartOutlined  />}/></Link>
                      </Badge>

                      <Badge count={5}>
                           <Avatar icon={ <HeartOutlined />}/>
                      </Badge>      
                         
                    </div>
                    <div className='account'>
                      <p><UserOutlined /> Login/Register</p>
                    </div>

             </div>
             
    </>
  )
}

export default Mid_Nav