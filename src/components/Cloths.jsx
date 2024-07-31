import React from 'react'
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Men() {

  const [Alldata, setAlldata] = useState([]);
  const fallbackImage = 'https://via.placeholder.com/150'; 

  console.log(Alldata);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories/1/products");
        const data = await response.json();
        setAlldata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchdata();
  }, []); 


 


  return (
    <div>
              <div className="spacess"></div>
              <div className="container">
            <div className="row">
            <div className="col-md-12 mendescription">
                <h1>Clothes</h1>
                <p>Welcome to our Clothing page, your ultimate destination for style, comfort, and quality. Whether you're refreshing your wardrobe or looking for that perfect piece, we have a wide range of options to suit every taste and occasion. Our collection features everything from casual wear to formal attire, outerwear, activewear, and stylish accessories.</p>
            </div>
            <div className="col-md-12 page4">
            {!Alldata.length ? (
        <div className="loaders"><div class="loader"></div></div> // Your loader component or HTML
      ) : (
     Alldata.map((item) => ( 
        <div className="products" key={item.id}>
          <div className="product_img">
          <Link to={'/singleproduct/'+item.id}><img
            className='img_product'
            src={item.images}
            alt={item.title}
            onError={(e) => e.target.src = fallbackImage}/></Link>
             </div>
          <div className="about_product">
            <button type='button' id={item.id}  className='btn addtocard' ><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
            <Link style={{textDecoration:'none',color:'black'}} to={'/singleproduct/'+item.id}><h6>{item.title.slice(0, 30)}</h6>
          <h6 className='category_text'>{item.category.name}</h6>
          <p>₹{item.price}0</p></Link>
          </div>
        </div>
      )))}
            </div>

        </div>
        </div>
        </div>
   
  )
}

export default Men