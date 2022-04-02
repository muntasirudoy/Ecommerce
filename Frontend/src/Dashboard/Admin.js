import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form,Input,Button,InputNumber} from 'antd';

const Admin = () => {

  const [productName, setProductName] = useState('')
  const [details, setDetails] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [cupon, setcupon] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')
  const [discount, setdiscount] = useState('')

const handleChange=(e)=>{
  setProductName(e.target.value)
  setDetails(e.target.value)
  setPrice(e.target.value)
  setStock(e.target.value)
  setcategory(e.target.value)
  setcupon(e.target.value)
  setdescription(e.target.value)
  setdiscount(e.target.value)
}


const addProduct =()=>{
  console.log('hello')
      axios.post('http://localhost:8000/api/all_products', {
        pname:productName,
        pdetails:details,
        price:price,
        stock:stock,
        description:description,
        category:category,
        discout:discount,
        cupon:cupon,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}



console.log(productName)
  return (
    <div>

<Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish="{onFinish}"
      onFinishFailed="{onFinishFailed}"
      autoComplete="off"
    >

      <Form.Item label="Product Name"  name="pname" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Details"  name="pdetails" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Price"  name="price" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Stock"  name="stock" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Description"  name="description" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Discount"  name="discount" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Cupon"  name="cupon" rules={[{ required: true, message: 'Please input your username!'}]}>
        <Input onChange={handleChange} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={addProduct}>
          Submit
        </Button>
      </Form.Item>
    </Form>

    </div>
  )
}

export default Admin
