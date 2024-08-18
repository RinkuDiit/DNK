import React from 'react'
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



function Accessories() {

  const [Alldata, setAlldata] = useState([]);
  const [addcart, setAddcart] = useState(JSON.parse(sessionStorage.getItem('cart')) || [])

  
  sessionStorage.setItem('realcart', JSON.stringify(addcart))

  const addtocart = (id) => {

    const idstring = String(id)
    setAddcart([...addcart, idstring]);

    toast.success('Successfully Added')
  }
  sessionStorage.setItem('cart', JSON.stringify(addcart));
  const fallbackImage = 'https://via.placeholder.com/150'; 

  const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
  sessionStorage.setItem('realcart' , JSON.stringify(cartItems))

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


  return (
    <div>
      <div className="spacess"></div>
      <div className="container">
            <div className="row">

       <div className="col-md-12 mendescription">
                <h1>ACCESORIES</h1>
                <p>Welcome to our Accessories page, where you'll find the perfect finishing touches to complete any outfit. Our collection of accessories is designed to complement your style and add that extra flair to your look. From everyday essentials to statement pieces, we have a wide range of options to suit your needs.</p>
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
          <button type='button' onClick={() => addtocart(item.id)} id={item.id} className='btn addtocard' ><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
            <Link style={{textDecoration:'none',color:'black'}} to={'/singleproduct/'+item.id}><h6>{item.title.slice(0, 30)}</h6>
          <h6 className='category_text'>{item.category.name}</h6>
          <p>₹{item.price}0</p></Link>
          </div>
        </div>
      )))}
            </div>
            </div>
    </div>
    <Toaster/>
    </div>
  )
}

export default Accessories