import React from 'react'
import {useState, useEffect } from 'react';


function Accessories() {

  const [Alldata, setAlldata] = useState(null);
  console.log(Alldata);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories/2/products");
        const data = await response.json();
        setAlldata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchdata();
  }, []); 


  if (!Alldata) {
    return(
     <>
       <div className="spacess"></div>
            <div className='loaders'>
           <div class="loader"></div>
         </div>;
     </>
   )
 }

  return (
    <div>
      <div className="spacess"></div>
      <div className="custom_container">
            <div className="row">

       <div className="col-md-12 mendescription">
                <h1>ACCESORIES</h1>
                <p>Welcome to our Accessories page, where you'll find the perfect finishing touches to complete any outfit. Our collection of accessories is designed to complement your style and add that extra flair to your look. From everyday essentials to statement pieces, we have a wide range of options to suit your needs.</p>
            </div>
            <div className="col-md-12 page4">
            {Alldata.map((item) => (
        <div className="products" key={item.id}>
          <div className="product_img">
            <img className='img_product' src={item.images} alt="" />
          </div>
          <div className="about_product">
            <button type='button' className='btn addtocard' ><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
          <h6>{item.title.slice(0, 20)}</h6>
          <h6 className='category_text'>{item.category.name}</h6>
          <p>₹{item.price}0</p>
          </div>
        </div>
      ))}
            </div>
            </div>
    </div>
    </div>
  )
}

export default Accessories