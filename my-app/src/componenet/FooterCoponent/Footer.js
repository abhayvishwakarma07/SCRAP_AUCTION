import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  const [footer,setfooter]=useState()
   
  useEffect(()=>{
    setInterval(()=>{
  if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin"){
       setfooter(<>
        <section class="container-fluid footer_section bg-dark">
        <p className='text-light'>
        Scrap Oction &copy; 2025 All Rights Reserved By
         Univarsal Informatics
      </p>
    </section>
       </>)}
   else  if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user"){
    setfooter(<>
    <section class="container-fluid footer_section bg-dark ">
    <p className='text-light'>
        Scrap Oction &copy; 2025 All Rights Reserved By
         Univarsal Informatics
      </p>
    </section></>)
   }
   else{
     setfooter(<>
     <section class="info_section layout_padding bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="info-logo">
              <h2>
                Scrap Oction
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-nav">
              <h4>
                Navigation
              </h4>
              <ul>
                <li>
                  <Link to='/'>
                    Home
                    </Link>
                </li>
                <li>
                  <Link to='/about'>
                    About
                  </Link>
                </li>
                <li>
                  <Link to='/Services'>
                    Services
                  </Link>
                </li>
                <li>
                <Link to='/contect'>
                    Contact Us
                    </Link>
                </li>
                <li>
                  <Link to='/login'>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-contact">
              <h4>
                Contact Info
              </h4>
              <div class="location">
                <h6>
                  Corporate Office Address:
                </h6>
                <a href="">
                  <img src="images/location.png" alt=""/>
                  <span>
                    Loram ipusm New York, NY 36524
                  </span>
                </a>
              </div>
              <div class="call">
                <h6>
                  Customer Service:
                </h6>
                <a href="">
                  <img src="images/telephone.png" alt=""/>
                  <span>
                    ( +01 1234567890 )
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="discover">
              <h4>
                Discover
              </h4>
              <ul>
                <li>
                  <a href="">
                    Help
                  </a>
                </li>
                <li>
                  <a href="">
                    How It Works

                  </a>
                </li>
                <li>
                  <a href="">
                    subscribe
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div class="social-box">
                <a href="">
                  <img src="images/facebook.png" alt=""/>
                </a>
                <a href="">
                  <img src="images/twitter.png" alt=""/>
                </a>
                <a href="">
                  <img src="images/google-plus.png" alt=""/>
                </a>
                <a href="">
                  <img src="images/linkedin.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-fluid footer_section border-top text-light bg-dark">
      <p className='text-light'>
        Scrap Oction &copy; 2025 All Rights Reserved By
         Univarsal Informatics
      </p>
    </section>
</>)
   }
})
})

  return (
    <>
      {footer}
    </>
  )
}

export default Footer
