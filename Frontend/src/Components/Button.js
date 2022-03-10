import React from 'react'
import img1 from '../Assest/images/shape1.png'
import img2 from '../Assest/images/shape2.png'

const Button = () => {


  return (
    <>
      <a className='button'> shop
          <img src={img1} />
          <img src={img2} />

       </a>
    </>
  )
}

export default Button