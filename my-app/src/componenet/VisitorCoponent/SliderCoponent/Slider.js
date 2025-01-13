import React, { useEffect, useState } from 'react'

function Slider() {

  const [slider, setslider] = useState();

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {
        setslider(<></>)
      }
      else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {
        setslider(<></>)
      }
      else {
        setslider(<><div>
          <section class=" slider_section position-relative text-light">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="slider_item-box layout_padding2">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="img-box">
                            <div>
                              <img src="img.jpeg" alt="" width={300} height={400}/>

                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 text-light">
                          <div class="detail-box">
                            <div>
                              <h1 className='text-light'>
                                Scrap <br />
                                
                                <span>
                                Oction
                                </span>
                              </h1>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div class="slider_item-box layout_padding2">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="img-box">
                            <div>
                              <img src="images/slider.jpg" alt="" width={300} height={400}/>

                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="detail-box">
                            <div>
                              <h1 className=' text-light'>
                                Scrap <br />
                                <span>
                                Oction
                                </span>
                              </h1>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div class="slider_item-box layout_padding2">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="img-box">
                            <div>
                              <img src="images/slider11.avif" alt="" width={300} height={400}/>

                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="detail-box">
                            <div>
                              <h1 className='text-light'>

                                Scrap<br />
                                <span>
                                Oction
                                </span>
                              </h1>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="container">
              <div class="slider_nav-box">
                <div class="btn-box">
                  <a href="" className='text-light'>
                    Read More
                  </a>
                  <hr />
                </div>
                <div class="custom_carousel-control">
                  <a class="carousel-control-prev text-light" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="sr-only ">Previous</span>
                  </a>
                  <a class="carousel-control-next text-light" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="sr-only ">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div></>)
      }
    })
  })
  return (
    <>
      {slider}
    </>
  )
}

export default Slider
