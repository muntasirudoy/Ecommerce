import React from 'react'
import {CarOutlined,CrownOutlined,CustomerServiceOutlined} from '@ant-design/icons';
import { Select  } from 'antd';

const Top_Nav = () => {

    const { Option } = Select;

  return (
    
         <div className='top-nav'>
            <div className='left'>
            <p> <CarOutlined /> Free Next Day Delivery</p>
            <p> <CrownOutlined /> Best Price Guarantee </p> 
            <p><CustomerServiceOutlined />24/7 Customer Support</p>
            </div>
            <div className='right'>
             <Select defaultValue="$USD" style={{ width: 120 }} allowClear>
                <Option value="lucy">TAKA</Option>
             </Select>
            </div>
         </div>

    
  )
}

export default Top_Nav