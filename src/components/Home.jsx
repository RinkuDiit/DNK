import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Apiallproduct from './Apiallproduct';
import { Link } from 'react-router-dom';





function Home() {

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  localStorage.setItem('realcart' , JSON.stringify(cartItems))

  return (
    <div>
    
      
          <div className='col-12 page1'>
              <div className="pg1_p">
              <p className='h1 offers'>Raining Offers For <br /> Hot Summer!</p>
              <p className='h1'>25% Off On All Products</p>
              <Link to='/everythings'><button className='btn botton botton_1'>SHOP NOW</button></Link>
              <Link to='/everythings'><button className='btn botton botton_2'>FINE MORE</button></Link>
              </div>
              <div className="mmm"><img className='page1img' src={require('./img/home-new-bg-free-img.jpg')} alt="" />
              </div>
          </div>
          <div className="col-12 page2">
            <div className="container">
          <Swiper
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            },
          250: {
            slidesPerView: 1,
            },
          480: {
              slidesPerView: 2,
              },
          780: {
                slidesPerView: 4,
          },
          991:{
            slidesPerView: 5,
          }

        }}
        

      >
        <SwiperSlide><img className='imgslider' src={require('../components/img/client-logo-1.png')} alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgslider' src={require('../components/img/client-logo-2.png')} alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgslider' src={require('../components/img/client-logo-3.png')} alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgslider'  src={require('../components/img/client-logo-4.png')} alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgslider' src={require('../components/img/client-logo-5.png')} alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgslider' src={require('../components/img/client-logo-1.png')} alt="" /></SwiperSlide>

       
      </Swiper>
      </div>
          </div>
          
     
        {/* <div className="container custom-container"> */}
            <div className="row page3">
              
                 
               <div className="col-md-4 cards">
                  
                  <img src={require('../components/img/women-fashion-free-img.jpg')}alt="" />

               <div className="cards_text">
                    <h1>20% Off On Tank Tops</h1>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</b> <br />
                    <Link to='/cloths'><div className="btn cards_btn ">SHOP NOW</div></Link>
               </div>
                  
               </div>
               <div className="col-md-4 cards" >
                  
                    <img src={require('../components/img/men-fashion-free-img.jpg')}alt="" />
                    <div className="cards_text">
                    <h1>Latest Eyewear For You</h1>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</b> <br />
                    <Link to='/cloths'><div className="btn cards_btn ">SHOP NOW</div></Link> </div>
                 
               </div>
               <div className="col-md-4 cards">
                  
                  <img src={require('../components/img/footwear-free-img.jpg')}alt="" />
                  <div className="cards_text">
                    <h1>20% Off On Shoes</h1>
                    <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</b> <br />
                    <Link to='/shoes'><div className="btn cards_btn ">SHOP NOW</div></Link>
                    </div>
          
               </div>
               
            </div>
           <Apiallproduct />
           <div className="custome-container">
           <div className='col-12 page5'>
              <div className="pg5_p">
              <h6>Limited Time Offer</h6>
              <p className='h1 offers'>Special Edition</p>
              <p className='pg5_des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br /> nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p className='h5'>Buy This T-shirt At 20% Discount, Use Code OFF20</p>
              <Link to='/everythings'><button className='btn botton botton_1'>SHOP NOW</button></Link>
              <Link to='/everythings'><button className='btn botton botton_2'>FINE MORE</button></Link>
              </div>
              <div className="mmm"><img className='page5img' src={require('./img/banner-03.jpg')} alt="" />
              </div>
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-3 featurekey">
              <img src={require('../components/img/globe-free-img.png')} alt="" />
              <p className='h6'>Worldwide Shipping</p>
              <p>It elit tellus, luctus nec ullamcor<br />per  mattis, pulvinar dapibus leo</p>
          </div>
          <div className="col-md-3 featurekey">
              <img src={require('../components/img/quality-free-img.png')} alt="" />
              <p className='h6'>Best Quality</p>
              <p>It elit tellus, luctus nec ullamcor<br />per  mattis, pulvinar dapibus leo</p>
              </div>
          <div className="col-md-3 featurekey">
              <img src={require('../components/img/tag-free-img.png')} alt="" />
              <p className='h6'>Best Offers</p>
              <p>It elit tellus, luctus nec ullamcor<br />per  mattis, pulvinar dapibus leo</p>       
                 </div>
          <div className="col-md-3 featurekey">
              <img src={require('../components/img/lock-free-img.png')} alt="" />
              <p className='h6'>Secure Payments</p>
              <p>It elit tellus, luctus nec ullamcor<br />per  mattis, pulvinar dapibus leo</p>  
                      </div>

          </div>
          </div>
     </div>
        
     
      </div>
      
    
  )
}

export default Home