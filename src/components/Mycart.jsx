import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




function Mycart() {
  const [Alldata, setAlldata] = useState([]);
  const [cart, setCart] = useState([]);
  const cartItems = localStorage.getItem('cart')

  console.log(cartItems);
  const fallbackImage = 'https://via.placeholder.com/150'; 



  useEffect(()=>{
    const cartids = localStorage.getItem('card')
    setCart(cartids);
    

      const fetchapi = async() =>{
          const responce = await fetch(`https://api.escuelajs.co/api/v1/products`)
          const data = await responce.json()
          setAlldata(data)

      }
      fetchapi();
  },[])

 




  return (
    <div>
            <div className="spacess"></div>
            <div className='cart_main_div'>
            <div className="total_0f_items">
                <div><h4>Price details</h4></div>
                <div className='price_details'><h6>Total Items</h6><div>4</div></div>
                <div className='price_details'><h6>Total Price</h6><div>₹1000</div></div>
                <div className='price_details'><h6>Discount</h6><div><span>-₹100</span></div></div>
                <div className='price_details'><h6>Coupons for you</h6><div><span>-₹20</span></div></div>
                <div className='price_details'><h6>Delivery Charges</h6><div><span style={{textDecoration:'line-through', color:'black'}}> ₹150</span><span>Free</span></div></div>
                <div className='price_details'><h6>Secured Packaging Fee</h6><div>₹54</div></div>
                <div className='price_details'><h4>Total Amount</h4><div><h4>₹800</h4></div></div>
                <div><button className='btn cards_btn'>PLACE ORDER</button></div>
            </div>
            <div className="cart_items">
              <div className="container">
                <h3 style={{textAlign:'center',backgroundColor:'#2389bf'}}>Items</h3>
              <div className="col-md-12 page4">
            {!Alldata.length ? (
        <div className="loaders"><div class="loader"></div></div> // Your loader component or HTML
      ) : (
     Alldata.map((item) => ( 
        <div className="cart_item" key={item.id}>
          <div className="product_cart_img">
          <Link to={'/singleproduct/'+item.id}><img
            className='img_product'
            src={item.images}
            alt={item.title}
            onError={(e) => e.target.src = fallbackImage}/></Link>
             </div>
          <div className="about_cart_product">
            <Link style={{textDecoration:'none',color:'black'}} to={'/singleproduct/'+item.id}><h6>{item.title.slice(0, 30)}</h6>
          <h6 className='category_text'>{item.category.name}</h6>
          <p>₹{item.price}0</p></Link>
          <div style={{margin:'-14px 0px'}}>
                <button className='btn btn-primary letter'>Save for letter</button>
                <button style={{width: '57px'}} className='btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
          </div>
          </div>
        </div>
      )))}
            </div>
            <h3 style={{textAlign:'center',backgroundColor:'#2389bf'}}>Saved For Later</h3>
            
              </div>
                
            </div>
            </div>
    </div>
  )
}

export default Mycart