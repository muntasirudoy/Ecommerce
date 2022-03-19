import React from 'react'
import img1 from '../Assest/images/shape1.png'
import img2 from '../Assest/images/shape2.png'

const Button = (props) => {


  return (
    <>
      <a className={`button ${props.active} ${props.hover}`} onClick={props.onClick}  >{props.children} 
          <img src={img1} />
          <img src={img2} />
       </a>
    </>
  )
}

export default Button