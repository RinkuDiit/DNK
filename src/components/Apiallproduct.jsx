import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Apiallproduct() {
  const [Alldata, setAlldata] = useState([]);
  const [addcart , setAddcart] = useState([])
  const fallbackImage = 'https://via.placeholder.com/150'; 

  console.log(Alldata);


  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/?price_min=20&price_max=50');
        const data = await response.json();
        setAlldata(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchdata();
  }, []);   


  const addtocart = (e) =>{
    const cartItem = e.target.id;
    setAddcart([...addcart, cartItem]);
  }
  
  


  return (
    <>
    <div className="container">
      <div className="row">
    <div className="page4">
      <div className='page4_text'>
        <p className='h1'>Featured Products</p>
      </div>

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
          <div onClick={addtocart} className="about_product">
            <button type='button' id={item.id}  className='btn addtocard' ><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
            <Link style={{textDecoration:'none',color:'black'}} to={'/singleproduct/'+item.id}><h6>{item.title.slice(0, 30)}</h6>
          <h6 className='category_text'>{item.category.name}</h6>
          <p>₹{item.price}0</p></Link>
          </div>
        </div>
      )))}

      <div style={{width:'90%',margin:'7px'}}><Link to='/everythings'><button className='btn every_btn_page'>FIND MORE</button></Link></div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Apiallproduct;
