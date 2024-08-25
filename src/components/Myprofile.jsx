import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Myprofile() {
  const [Alldata, setAlldata] = useState([]);
  const [totalamount, setTotalamount] = useState(0);
  const [totalcount, setTotalcount] = useState(0);
  const [name, setName] = useState('Rinku Kumar')
  const [email, setemail] = useState('rr1341570@gmail.com')
  const [number, setNumber] = useState('9876543238')
  const [btntype, setbtntype] = useState(true)
  const [change, setChange] = useState('none')
  const [profile_, setProfile] = useState('block')
  const [text, setText] = useState('Personal Information')
  const [color, setColor] = useState('#2389bf')
  const [color1, setColor1] = useState('#fff')
  const [color2, setColor2] = useState('#fff')
  const [color3, setColor3] = useState('#fff')
  const fallbackImage = 'https://via.placeholder.com/150';

  const date = sessionStorage.getItem('date');
  const time = sessionStorage.getItem('time');
  // const [day, monthName, dates, year] = date.split(' ');
  // const datess = parseInt(dates) + 3;



  useEffect(() => {

    const cartItems = JSON.parse(sessionStorage.getItem('order')) || [];
    const total = sessionStorage.getItem('orderamount');
    const totalitems = sessionStorage.getItem('totalitems');

    setTotalcount(totalitems)
    setTotalamount(total)



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
  }, []);


  const profile = () => {
    setChange('none')
    setProfile('block')
    setText('Personal Information')
    setColor('#2389bf')
    setColor1('#fff')
    setColor2('#fff')
    setColor3('#fff')
  }

  const order = () => {
    setChange('block')
    setProfile('none')
    setText('Order History')
    setColor('#fff')
    setColor1('#2389bf')
    setColor2('#fff')
    setColor3('#fff')
  }


  const address = () => {
    setChange('block')
    setProfile('none')
    setText('Order History')
    setColor1('#fff')
    setColor('#fff')
    setColor2('#2389bf')
    setColor3('#fff')

  }


  const pass = () => {
    setChange('block')
    setProfile('none')
    setText('Order History')
    setColor1('#fff')
    setColor('#fff')
    setColor2('#fff')
    setColor3('#2389bf')

  }



  return (
    <div>
      <div className="spacess"></div>
      <div className='main_div_profile'>

        {/* ------------------------------ profile data---------------------------------------------------       */}
        <div className="profile">
          {/* <h3>Profile</h3> */}
          <div className="profilepic">
            <img src={require('../components/img/smiling-businessman-face-portrait-wearing-suit_53876-148138.avif')} />
            <h6>Hello {name}</h6>
          </div>
          <div onClick={profile} className="aboutOrder" style={{ marginTop: '20px', backgroundColor: color }}><i class="fa fa-user" aria-hidden="true"></i> My Profile</div>
          <div onClick={order} className="aboutOrder" style={{ backgroundColor: color1 }}><i class="fa fa-shopping-basket" aria-hidden="true"></i> My Order</div>
          <div onClick={address} className="aboutOrder" style={{ backgroundColor: color2 }} ><i class="fa fa-map-marker" aria-hidden="true"></i> Address</div>
          <div onClick={pass} className="aboutOrder" style={{ backgroundColor: color3 }}><i class="fa fa-cogs" aria-hidden="true"></i> Change Pasword</div>
        </div>
        <div className="profileDetails">
          <div style={{ borderBottom: '1px solid', marginBottom: '5px' }}><p>{text}</p></div>

          {/* ---------------------------------- user Information -------------------------------------------       */}

          <div style={{ display: profile_ }}>
            <div className="profilepic">
              <img style={{ marginLeft: '0px ' }} src={require('../components/img/smiling-businessman-face-portrait-wearing-suit_53876-148138.avif')} />
            </div>
            <form action="">
              <label htmlFor="name">Name</label><br />
              <input id='name' type="text" value={name} disabled={btntype} /><br /><br />

              <label htmlFor="gender">Your Gender</label><br />
              <select id='gender' disabled={btntype}>
                <option value="male">Male</option>
                <option value="womem">Female</option>
              </select><br /><br />


              <div className='edit_info'>
                <div>
                  <label htmlFor="email">Email Address</label><br />
                  <input id='email' type="email" value={email} disabled={btntype} />
                </div>

                <div>
                  <label htmlFor="number">Mobile Number</label><br />
                  <input id='number' type="number" value={number} disabled={btntype} />
                </div>

                <div><button className='btn btn-primary' style={{ height: '41px' }} type='button'>Edit</button></div>

              </div>


            </form>
          </div>

          {/* ---------------------------------- Order info ---------------------------------------------------       */}

          <div style={{ display: change }}>
            <div className="col-md-12 page4">
              {!Alldata.length ? (
                <div style={{ height: '300px' }} className="loaders"><h1>Your cart is currently empty. <br /> Please add items to place an order</h1></div>
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
                      <Link style={{ textDecoration: 'none', color: 'black' }} to={'/singleproduct/' + item.id}>
                        <h6>{item.title.slice(0, 30)}</h6>
                        <h6 className='category_text'>{item.category.name}</h6>
                        <p>₹{item.price}0</p></Link>
                      {/* <div style={{ margin: '-14px 0px' }}>
                        <button className='btn btn-primary letter'>Save for letter</button>
                        <button onClick={()=> removeID(item.id)} id={item.id} style={{ width: '57px' }} className='btn'><i class="fa fa-trash" aria-hidden="true"></i></button>
                      </div> */}
                    </div>
                  </div>

                )))}
            </div>
            {!Alldata.length ? (
              <></>
              ) : (
            <div className="order_delivery">
              <div className='order_prosess_status'><div className=" prosses_statuss dot_">
                <i class="fa fa-circle-o Confirmed" aria-hidden="true"></i>
                <div className="prosses"></div>
                <i class="fa fa-circle-o Shipped" aria-hidden="true"></i>
                <div className="prosses"></div>

                <i class="fa fa-circle-o delivery" aria-hidden="true"></i>
                <div className="prosses"></div>

                <i class="fa fa-circle-o delivered" aria-hidden="true"></i>

              </div>
                <div className="prosses_status">
                  <div><p>Order Confirmed, {date} {time}</p></div>
                  <div><p>Shipped</p></div>
                  <div><p>Out for delivery</p></div>
                  <div><p>Delivery Expected in 3 days</p></div>
                </div>
                </div>

              <div className="order_summary">
                <p>Total Items {totalcount}</p>
                <ul>
                  {Alldata.map((item) => (
                    <li>{item.title}  ({item.category.name})</li>
                  ))}
                </ul>
                <p>Item yet to reach hub nearest to you. delivery Logistics - FMPP2508845573</p>
                <h5>Total Amount {totalamount} <span style={{ color: 'green' }}>1 Offer Applied</span></h5>
              </div>

            </div>)}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile