import React from 'react'
import {MenuUnfoldOutlined,} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';



const Bottom_Nav = () => {

    const { SubMenu } = Menu;
    const handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
      

  return (
    <>
               <div className='bottom-nav'>
                     <div className='all-category'>
                     <MenuUnfoldOutlined />
                     <p className='category-text'>Browes Category</p>
                     </div>
                   
                      <Menu className='menu' onClick={handleClick} selectedKeys="mail" mode="horizontal" >
                            <Menu.Item key="Home" >
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="all" >
                               <Link to="All_Products">All Products</Link>
                            </Menu.Item>
                            <Menu.Item key="Man's Fashion" >
                                Man's Fashion
                            </Menu.Item>
                            <SubMenu key="023"  title=" Womens Fashion">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                            </SubMenu>
                            
                            <Menu.Item key="Blog" >
                                Blog
                            </Menu.Item>
                            <Menu.Item key="Contact" >
                                Contact
                            </Menu.Item>
                        </Menu>
                      <p style={{margin:"0", fontSize:"16px",fontFamily:"Maven Pro', sans-serif"}}>Get <span style={{color:"red",fontWeight:"600"}}>50%</span> Discount On Black Friday Offer </p>  
               </div>
                
    </>
  )
}

export default Bottom_Nav