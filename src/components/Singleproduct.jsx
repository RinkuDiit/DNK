import React, { useState, useEffect } from 'react'
import '../components/Singlepage.css'
import { useParams } from 'react-router-dom'

function Singleproduct(){

  const[singleproduct, setSingleproduct] = useState(null);
  const[image, setImage] = useState(0)
  const[reting,setReting] = useState(0);
  const{id} = useParams();
  const [addcart , setAddcart] = useState([])
  localStorage.setItem('cart',addcart);
  localStorage.setItem('cartlenght',addcart.length)

  const fallbackImage = 'https://via.placeholder.com/150';  

  
  
 

 


  console.log(addcart)

  console.log(singleproduct);


    useEffect(() =>{

    async function fethapi(){
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const data = await response.json()
        setSingleproduct(data)
      } 
      catch (error) {
        
      }
    }
    fethapi();

    const rendemrating = Math.floor(Math.random()*9)
    setReting(rendemrating)


    },[])
    

      const getimg = (e) =>{
        setImage(e.target.id)
      }

      const addtocart = (e) =>{
        const cartItem = e.target.id;
        setAddcart([...addcart, cartItem]);
      }

     
      if (!singleproduct) {
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
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 col-sm-12 col-xs-12 item_image">
            <div className="otherimg">
            {singleproduct.images.map((image, index) => (
                  <img style={{cursor:'pointer'}}  onClick={getimg}  src={image} onError={(e) => (e.target.src = fallbackImage)} alt="img" className="img-fluid" id={index} />
                ))}
            </div>
            <div className="productimg">
            <img src={singleproduct.images[image]} onError={(e) => (e.target.src = fallbackImage)} className="img-fluid" alt={id}/>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="productinfo">
              <h1>{singleproduct.title}</h1>
              <br />
              <p>{singleproduct.description}</p>
              <p>₹{singleproduct.price}0.00</p>
              <p>Rating: 4.{reting}/5</p>
              {/* <div className="size">
                <button className='product_size'>S</button>
                <button className='product_size'>M</button>
                <button className='product_size'>L</button>
                <button className='product_size'>XL</button>
              </div> */}
              {/* <div className="quantity">
                <button className="product_quantity_minus" onClick={minus}>&#8722;</button>
                <input type="text" className="product_quantity" value={quantity} />
                <button className="product_quantity_plus" onClick={plus}>&#43;</button>

              </div> */}
              <div className="loacation">
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Delivering to Jaipur 302021</p>
                <button className='btn btn-outline border'>Update Location</button>
              </div>
              <br />
            <div className="buttons">
            <button onClick={addtocart} id={singleproduct.id} className='btn single_product_cart_btn'>Add to Cart</button>
            <button className='btn single_product_cart_btn'>Bay Now</button>
            {/* <div className="single_product_cart_btn_style"></div> */}
            </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Singleproduct