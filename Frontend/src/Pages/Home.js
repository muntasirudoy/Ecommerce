import React, { useState,useEffect } from 'react';
import { Modal } from 'antd';
import { Banner } from '../Components/Banner';
import BestSelling from '../Components/BestSelling';
import Categories_Filter from '../Components/Categories_Filter'
import Mid_Banner from '../Components/Mid_Banner';
import popup1 from ".././Assest/pop.png"
import popup2 from ".././Assest/banner/banner1.png"


const Home = () => {

const [popup, setpopup] =useState(false)

useEffect(()=>{
  setpopup(true)

  setTimeout(() => {
    setpopup(false)
  },3000);
},[])


const handleCancel=()=>{
  setpopup(false)
}


  return <div className='home'>
      
         <Banner />
         <Categories_Filter />
         <Mid_Banner />
         <BestSelling />


         <Modal style={{height:"50vh",margin:"150px auto"}} visible={popup} onCancel={handleCancel}>
           <img style={{height:"100%",width:"50%"}} src={popup1} />
           <img style={{height:"100%"}} src={popup2} />
      </Modal>
  </div>;
};

export default Home;
