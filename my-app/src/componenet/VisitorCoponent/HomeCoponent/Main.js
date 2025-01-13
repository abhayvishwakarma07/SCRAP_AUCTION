import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';    // Import AOS library

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 5000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
      delay: 5000,     // Global delay for animations
    });
  }, []);
  return (
    <>
      <div className='d-flex align-items-center' style={{ "height": "400px" }}>
        <div>
          <div className=''>
            <h1 className='text-center text-danger'>HOME</h1>
          </div>
          <div className='w-full  d-flex justify-content-center '>
            <p className='w-75 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cumque ducimus temporibus modi iusto fugiat assumenda officiis mollitia? Molestias ratione, libero obcaecati accusantium atque necessitatibus pariatur consequuntur maiores, esse, dolor dolore delectus? Cum deleniti minima rerum! Eligendi perspiciatis officia voluptatem aliquid aspernatur repellendus velit dignissimos ipsam eos ex fugiat vel, quod rem esse tempore accusamus dolor, cumque alias excepturi magni sint similique itaque explicabo. Non nemo sunt, ipsam dolorum quae delectus nisi recusandae cumque aperiam soluta voluptates eaque laudantium repudiandae officiis ratione, fugiat quibusdam consequatur? Minima temporibus nam natus modi, commodi repudiandae minus non nesciunt mollitia, officia eos voluptates tempore.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home