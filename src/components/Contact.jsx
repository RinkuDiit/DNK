import React from 'react'

function Contact() {

    const sendsms = () =>{
        alert("SMS Sent");
    }

  return (
    <div>
        <div className="contact">
            <h1>Contact us</h1>
            <img src={require('../components/img/banner-06.jpg')} alt="" />
        </div>
        <div className="helps">
            <h5>Have any queries?</h5>
            <h1>We're here to help.​</h1>
            <div className="queries">
                <div className="query">
                    <h3>Sales</h3>
                    <p>Vestibulum ante ipsum primis <br /> in faucibus orci luctus.</p>
                    <h4 style={{color:'blue'}}>1800 123 4567
                    </h4>
                </div>
                <div className="query">
                    <h3>Complaints</h3>
                    <p>Vestibulum ante ipsum primis <br /> in faucibus orci luctus.</p>
                    <h4 style={{color:'blue'}}>1900 223 8899
                    </h4>
                </div>
                <div className="query">
                    <h3>Returns</h3>
                    <p>Vestibulum ante ipsum primis <br /> in faucibus orci luctus.</p>
                    <h4 style={{color:'blue'}}>returns@gmail.com
                    </h4>
                </div>
                <div className="query">
                    <h3>Marketing</h3>
                    <p>Vestibulum ante ipsum primis <br /> in faucibus orci luctus.</p>
                    <h4 style={{color:'blue'}}>1700 444 5578
                    </h4>
                </div>
            </div>
            <div className="tell_us">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 tell_uss">
                        <h1>You tell us. We listen.</h1>
                        <p>Our customer service team is available to help you with any questions or concerns you may
                            have. We're here to listen and provide you with the best possible solution.</p>
                        
                    </div>
                    <div className="col-md-6 sumbite_form">
                        <form onSubmit={sendsms}>
                           <input type="text" placeholder='Name' required /> <br />
                           <input type="text" placeholder='Subject'  /> <br />
                           <input type="text" placeholder='E-mail' required /><br />
                           <textarea style={{height:'200px', width:'100%', marginTop:'10px'}} type="text" placeholder='Message' required /><br /> <br />
                           <button type='submit' style={{backgroundColor:'#2389bf'}} className="btn">Submite</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>

       
    </div>
  )
}

export default Contact