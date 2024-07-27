import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Apiallproduct() {
  const [Alldata, setAlldata] = useState(null);
  const [addcart , setAddcart] = useState([])
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
    <>
    <div className="page4">
      <div className='page4_text'>
        <p className='h1'>Featured Products</p>
      </div>

      {Alldata.map((item) => ( 
        <Link to={'/singleproduct/'+item.id}><div className="products" key={item.id}>
          <div className="product_img">
            <img className='img_product' src={item.images} alt={item.id} />
          </div>
          <div className="about_product">
            <button type='button' id={item.id} onClick={addtocart} className='btn addtocard' ><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
          <h6>{item.title.slice(0, 20)}</h6>
          <h6 className='category_text'>{item.category.name}</h6>
          <p>₹{item.price}0</p>
          </div>
        </div></Link>
      ))}

      <div style={{width:'100%'}}><Link to='/everythings'><button className='btn every_btn_page'>FIND MORE</button></Link></div>
    </div>
    </>
  );
}

export default Apiallproduct;
