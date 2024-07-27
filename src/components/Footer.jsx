import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="footer">
                    <div className="col-12 p-3 border-bottom border-top footer_top">
                        <p className='h3'>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</p>
                    </div>
            <div className="container"> 
                <div style={{padding:'40px 0px 41px 0px'}} className="row mid_footer">
                    <div className="col-md-5 p-2 d-flex justify-content-center flex-column align-items-center">
                        <img src={require('../components/img/logo@2x-free-img-120x40.png')} alt="" />
                        <p className='h4'>The best look anytime, anywhere.</p>
                    </div>
                    <div className="col-md-2 p-2 ulli_footer ">
                        <h4>For her</h4>
                        <ul className="list-unstyled">
                            <li>Women Jeans</li>
                            <li>Tops and Shirts</li>
                            <li>Women Jackets</li>
                            <li>Heels and Flats</li>
                            <li>Women Accessories</li>
                        </ul>
                    </div>
                    <div className="col-md-2 p-2 ulli_footer">
                        <h4>For him</h4>
                        <ul className="list-unstyled">
                            <li>Men Jeans</li>
                            <li>Men Shirts</li>
                            <li>Men Jackets</li>
                            <li>Men Shoes</li>
                            <li>Men Accessories</li>

                        </ul>
                    </div>
                    <div className="col-md-3 p-2 d-flex justify-content-evenly flex-column ">
                        <p className='h4'>Subscribe</p>
                        <input type="gmail" placeholder='Enter your email Addresh...' />
                        <button className='btn btn-primary'>Subscribe</button>

                    </div>
                </div>
            </div>
            <div className="col-12 p-3 border-bottom border-top footer_bottom d-flex justify-content-between  ">
                <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
                <div className="footer_icons">
                   <Link><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                   <Link><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                   <Link><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                   <Link><i class="fa fa-youtube-play" aria-hidden="true"></i></Link>
                   <Link><i class="fa fa-google" aria-hidden="true"></i></Link>

                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer