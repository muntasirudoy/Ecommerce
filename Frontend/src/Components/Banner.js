import React from 'react'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import Button from './Button';
import banner1 from '../Assest/page-title1.jpg'
import 'rc-banner-anim/assets/index.css';
import './style.css'

const BgElement = Element.BgElement;

export const Banner = () => {


  return (
    <div className='banner'>
                   <BannerAnim prefixCls="banner-user" style={{height:"600px"}}>
                            <Element prefixCls="banner-user-elem" key="0">
                                <BgElement key="bg" className="bg" style={{background:'white',height:"100%"}}>
                                    <TweenOne className="banner-user-title banner-text-image" animation={{ y: 30, opacity: 0, type: 'from' }}>
                                       <div className='banner-text'>
                                           <h1 className='banner-title'>Find Out Your Best Furniture Here </h1>
                                           <p className='banner-para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                            classical Latin literature from 45 BC, making it over 2000 years old</p>
                                            <Button />
                                       </div>
                                       <div className='banner-image'>
                                            <img src={banner1} />
                                       </div>
                                    </TweenOne>
                                </BgElement>
                            </Element>

                            <Element prefixCls="banner-user-elem" key="1">
                                <BgElement key="bg" className="bg" style={{background:'white',height:"100%"}}>
                                    <TweenOne className="banner-user-title banner-text-image" animation={{ y: 30, opacity: 0, type: 'from' }}>
                                       <div className='banner-text'>
                                           <h1 className='banner-title'>Find Out Your Best Furniture Here </h1>
                                           <p className='banner-para'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                                            classical Latin literature from 45 BC, making it </p>
                                            <Button />
                                       </div>
                                       <div className='banner-image'>
                                            <img src={banner1} />
                                       </div>
                                    </TweenOne>
                                </BgElement>
                            </Element>


                     </BannerAnim>
    </div>
  )
}
