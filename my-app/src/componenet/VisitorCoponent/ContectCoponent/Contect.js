import React from 'react'


function Contact() {
  return (
    <>
      <div className='overflow-hidden'>
        <h1 className='text-center text-danger'>CONTECT US</h1>
      <div className='row p-5'>
        <div class="col-lg-6">
          <h6 class="text-primary text-uppercase font-weight-bold">Contact Us</h6>
          <h1 class="mb-4">Contact For Any Queries</h1>
          <div class="contact-form " style={{ "padding": "30px" }}>
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              <div class="control-group">
                <input type="text" class="form-control border-0 p-4" id="name" placeholder="Your Name"
                  required="required" data-validation-required-message="Please enter your name" />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <input type="email" class="form-control border-0 p-4" id="email" placeholder="Your Email"
                  required="required" data-validation-required-message="Please enter your email" />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <input type="text" class="form-control border-0 p-4" id="subject" placeholder="Subject"
                  required="required" data-validation-required-message="Please enter a subject" />
                <p class="help-block text-danger"></p>
              </div>
              <div class="control-group">
                <textarea class="form-control border-0 py-3 px-4" rows="3" id="message" placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"></textarea>
                <p class="help-block text-danger"></p>
              </div>
              <div>
                <button class="btn btn-primary py-3 px-4" type="button" id="sendMessageButton">Send
                  Message</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
            <div class="info-contact">
              <h1>
                Contact Info
              </h1>
              <div class="location">
                <h4>
                  Corporate Office Address:
                </h4>
                  <span>
                     Square plaza indore (m.p.)<br/><br/>
                  </span>
              </div>
              <div class="call">
                <h4>
                  Customer Service:
                </h4>
                  <span>
                    ( +01 1234567890 )
                  </span><br/><br/>
                  <h5>
                   Email:- example@gmail.com
                  </h5><br/><br/>
              </div>
              <div class="social-box">
                <a href="" className='m-3'>
                  <img src="images/facebook.png" alt=""  className='bg-dark'/>
                </a>
                <a href="" className='m-3'>
                  <img src="images/twitter.png" alt="" className='bg-dark'/>
                </a>
                <a href="" className='m-3'>
                  <img src="images/google-plus.png" alt=""  className='bg-dark'/>
                </a>
                <a href="" className='m-3'>
                  <img src="images/linkedin.png" alt=""  className='bg-dark'/>
                </a>
              </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact
