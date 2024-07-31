import React from 'react';

const About = () => {
  return (

   <>
  <div className="spacess"></div>
  <div className="container">
    <div className="row">
      <div className="col-md-6 about">
        <h2>
          About Us
        </h2>
        <p>
        DNK eCommerce is a premier online retail destination specializing in men's and women's clothing. Run by a team of passionate individuals, DNK is dedicated to providing the best possible experience for its customers. Our commitment to quality and customer satisfaction is evident in our carefully curated selection of fashion products. We strive to offer a seamless and enjoyable shopping experience, ensuring that every customer finds something they love. At DNK eCommerce, we believe in the power of great fashion and exceptional service, making us your go-to destination for all your clothing needs.          
        </p>
      </div>
      <div className="col-md-6 headquter">
        <img src={require('../components/img/Untitled design.jpg')} alt="" />
      </div>
      </div>
      </div>
      
      <div className="col-md-12 teams">
        <h4>A Few Words About</h4>
        <h2>Our Team</h2>
        <p>Our team at DNK eCommerce is composed of dedicated and passionate individuals who are committed to <br />
         delivering excellence in every aspect of our business. We work tirelessly to curate the best fashion <br /> products and ensure a seamless shopping experience for our customers.
         </p>
        
        <div className="allTeams">
        <div className="team_members">
          <img style={{height:'50%'}} src={require('../components/img/team2-free-img.png')} alt="" />
          <h4>Harvey Spector</h4>
          <h6>Founder - CEO</h6>
         </div>

         <div className="team_members">
          <img style={{height:'50%'}} src={require('../components/img/team1-free-img.png')} alt="" />
          <h4>Jessica Pearson</h4>
          <h6>COO</h6>
         </div>

         <div className="team_members">
          <img style={{height:'50%'}} src={require('../components/img/team3-free-img.png')} alt="" />
          <h4>Rachel Zain</h4>
          <h6>Marketing Head</h6>
         </div>

         <div className="team_members">
          <img style={{height:'50%'}} src={require('../components/img/team4free-img.png')} alt="" />
          <h4>Mike Ross</h4>
          <h6>Intern Designer</h6>
         </div>

         <div className="team_members">
          <img style={{height:'50%'}} src={require('../components/img/team5-free-img.png')} alt="" />
          <h4>Luise Litt</h4>
          <h6>Lead Developer</h6>
         </div>

         <div className="team_members">
          <img style={{height:'50%'}} src={require('../components/img/team6-free-img.png')} alt="" />
          <h4>Katrina Bennett</h4>
          <h6>Intern Designer</h6>
         </div>
        </div>

      </div>

  
 
   </>
  )
}

export default About