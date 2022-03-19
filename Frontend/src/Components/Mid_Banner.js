import React from 'react'
import midBanBgR from '../Assest/mR.png'
import midBanBgL from '../Assest/bgL.png'
import Button from './Button'

const Mid_Banner = () => {
  return (
    <div className='mid-banner'>
     <img className='ban-img-right' src={midBanBgR} />
     <img className='ban-img-left' src={midBanBgL} />
     <div className='mid-banner-details'>
     <h1> 
        <span className='mid-title'>Buy Best Furniture At <br/>A Cheaper Rate</span> <br/>
        <span className='mid-sub-title'>Soft Comfy Ash Dual Sofa</span> <br/>
        <span className='mid-sub-title'>$160.00 $200.00 </span> <br/>
     </h1>
     <Button>Shop</Button>
     </div>

    </div>
  )
}

export default Mid_Banner