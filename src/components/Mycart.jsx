import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';




function Mycart() {


  const [Alldata, setAlldata] = useState([]);
  const [cart, setCart] = useState([])

  // ------------price counter---------------//

  const [totalitems, setTotalitmes] = useState(Alldata.length)
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [deliverycharge, setDeliverycharge] = useState(0)
  const [securty, setSecurty] = useState(0)
  const [Coupons, setCoupons] = useState(0)
  const [inputCode, setInputCode] = useState('')
  const [total, setTotal] = useState(0)

  const fallbackImage = 'https://via.placeholder.com/150';

  localStorage.setItem('totalitems', totalitems)





  useEffect(() => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(...cart, cartItems);
    localStorage.setItem('realcart', JSON.stringify(cartItems))



    const fetchapi = async (id) => {
      const responce = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      const data = await responce.json()
      return data;

    };

    const fetchItems = async () => {
      const responce = cartItems.map(id => fetchapi(id));
      const productsData = await Promise.all(responce);
      setAlldata(productsData)
    }
    fetchItems();
  },[])







  useEffect(() => {
    const length = Alldata.length
    setTotalitmes(length)

    debugger

    const prices = Alldata.map(product => product.price);
    const totalPrice = prices.reduce((total, price) => total + price, 0);
    const ttt = totalPrice*10
    setPrice(totalPrice*10)

    setDiscount(Math.ceil(ttt * 5 / 100))
    setDeliverycharge(150)
    setSecurty(Math.ceil(ttt * 2 / 100))
    if(Coupons>0){
        setCoupons(ttt*20/100)
    }
    if (price < 1500) {
      setCoupons(0);
    }
    
    


  }, [Alldata,price,Coupons])

  
 useEffect(()=>{
  setTotal(price - discount + securty - Coupons)
 },[price,price,Coupons])




  const entered_code = (e) => {
    const code = e.target.value;
    setInputCode(code);

  }

  const CouponsDis = () => {
    
    if (inputCode === 'OFF20' & price >= 1500) {
      const coupounDis = price * .2;
      setCoupons(coupounDis);
        Swal.fire({
          title: 'Your coupon has been applied successfully!',
          html: `<p>You saved <span style="color:green;">₹${coupounDis}</span> on your order.</p>`,
          icon: 'success',
          confirmButtonText: 'ok'
      });
    }
    else if (price <= 1500) {
      // alert('minimun order value is 1500')/
      Swal.fire({
        icon: "error",
        title: "minimun order value is ₹1500",
      });

    }
    else {
      // alert('Invalid Coupon')
      Swal.fire({
        icon: "error",
        title: "Invalid Coupon",
      });
    }
  };


  const removeID = (id) => {
    const newId = String(id);
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = cartItems.filter(item => item !== newId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    setAlldata(Alldata.filter(item => item.id !== id));
  }


  const placeorder= ()=> {
    Swal.fire({
      title: 'Your Order has been placed successfully!',
      // text: `You saved ₹${coupounDis} on your order.`,
      icon: 'success',
      confirmButtonText: 'ok'
  });
  }








  return (
    <div>
      <div className="spacess"></div>
      <div className='cart_main_div'>
        <div className="total_0f_items">
          <div><h4>Price details</h4></div>
          <div className='price_details'><h6>Total Items</h6><div>{totalitems}</div></div>
          <div className='price_details'><h6>Total Price</h6><div>₹{price}</div></div>
          <div className='price_details'><h6>Discount</h6><div><span>-₹{discount}</span></div></div>
          <div className='price_details'><h6>Coupons for you</h6><div><span>-₹{Coupons}</span></div></div>
          <div className='price_details'><h6>Delivery Charges</h6><div><span style={{ textDecoration: 'line-through', color: 'black' }}> ₹{deliverycharge}</span><span>Free</span></div></div>
          <div className='price_details'><h6>Secured Packaging Fee</h6><div>₹{securty}</div></div>
          <div className='price_details totals'><h4>Total Amount</h4><div><h4>₹{total}</h4></div></div>
          <div className="price_details coupouncode"><input type="text" onChange={entered_code} placeholder='Enter Coupen code' />
            <button className='btn' onClick={CouponsDis} type='submit'>Apply</button> </div>
          <div><button onClick={placeorder} className='btn cards_btn'>PLACE ORDER</button></div>
        </div>
        <div className="cart_items">
          <div className="container">
            <h3 style={{ textAlign: 'center', backgroundColor: '#2389bf' }}>Items</h3>
            <div className="col-md-12 page4">
              {!Alldata.length ? (
                <div style={{ height: '300px' }} className="loaders"><h1>Your cart is empty.</h1></div>
              ) : (
                Alldata.map((item) => (
                  <div className="cart_item" key={item.id}>
                    <div className="product_cart_img">
                      <Link to={'/singleproduct/' + item.id}><img
                        className='img_product'
                        src={item.images}
                        alt={item.title}
                        onError={(e) => e.target.src = fallbackImage} /></Link>
                    </div>
                    <div className="about_cart_product">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to={'/singleproduct/' + item.id}><h6>{item.title.slice(0, 30)}</h6>
                        <h6 className='category_text'>{item.category.name}</h6>
                        <p>₹{item.price}0</p></Link>
                      <div style={{ margin: '-14px 0px' }}>
                        <button className='btn btn-primary letter'>Save for letter</button>
                        <button onClick={()=> removeID(item.id)} id={item.id} style={{ width: '57px' }} className='btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>

                )))}
            </div>
            <h3 style={{ textAlign: 'center', backgroundColor: '#2389bf' }}>Saved For Later</h3>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Mycart