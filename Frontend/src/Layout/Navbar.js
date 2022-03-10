import React from 'react'
import './nav_foot.css'
import Top_Nav from '../Components/Top_Nav';
import Mid_Nav from '../Components/Mid_Nav';
import Bottom_Nav from '../Components/Bottom_Nav';
import Side_Cart_Total_Price from '../Components/Side_Cart_Total_Price';

const Navbar = () => {

  return (
    <div className='nav'>
        {/* top nav */}
             <Top_Nav />
        {/* mid nav */}
             <Mid_Nav />
        {/* bootom nav */}
             <Bottom_Nav />
       {/* side cart total price  */}
            <Side_Cart_Total_Price />
    </div>
  )
}

export default Navbar