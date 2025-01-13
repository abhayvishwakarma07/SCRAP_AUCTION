import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Nav() {

  const [navbar, setnavbar] = useState([])

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "admin") {
        setnavbar(<>
          <div>
            <header class="header_section bg-dark ">
              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <a class="navbar-brand" href="index.html">
                    <span>
                      Scrap-<span className='text-danger'>Auction</span>
                    </span>
                  </a>
                  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                      <ul class="navbar-nav  ">
                        <li class="nav-item">
                          <Link to="/admin"> <a class="nav-link">Admin-Home<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/manageuser"> <a class="nav-link">Manage-user<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item ">
                          <Link to="/addcatgory"> <a class="nav-link">Addcatgory<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item ">
                          <Link to="/subcatgory"> <a class="nav-link">Subcatgory<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item dropdown justify-items-center mt-1">
                          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Setting
                          </button>
                          <ul class="dropdown-menu dropdown-menu-dark">
                            <li><Link to='/Eprofile' className='class="dropdown-item'>Edit profile</Link></li>
                            <li><Link to='Epassword'  className='class="dropdown-item'>Edit password</Link></li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <Link to="/logout"><a class="nav-link">Logout</a></Link>
                        </li>


                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
          </div></>)
      }
      else if (localStorage.getItem("token") != undefined && localStorage.getItem("role") == "user") {
        setnavbar(<>
          <div>
            <header class="header_section bg-dark ">
              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <a class="navbar-brand" href="index.html">
                    <span>
                      Scrap-<span className='text-danger'>Auction</span>
                    </span>
                  </a>
                  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                      <ul class="navbar-nav  ">
                        <li class="nav-item ">
                          <Link to="/user"> <a class="nav-link">user-Home<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item ">
                          <Link to="/viewProduct"> <a class="nav-link">category<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/addproduct"> <a class="nav-link">Addproduct<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/charity"> <a class="nav-link">Charity<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/logout"><a class="nav-link">Logout</a></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
          </div></>)
      } else {
        setnavbar(<>
          <div>
            <header class="header_section bg-dark">
              <div class="container-fluid">
                <nav class="navbar navbar-expand-lg custom_nav-container ">
                  <a class="navbar-brand" href="index.html">
                    <span>
                      Scrap-<span className='text-danger'>Auction</span>
                    </span>
                  </a>
                  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                      <ul class="navbar-nav  ">
                        <li class="nav-item ">
                          <Link to="/"> <a class="nav-link">Home<span class="sr-only">(current)</span></a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/about"><a class="nav-link"> About</a> </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/Services"><a class="nav-link">Services </a></Link>
                        </li>

                        <li class="nav-item">
                          <Link to="/contect"><a class="nav-link">Contact us</a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/ragistar"> <a class="nav-link">Registar</a></Link>
                        </li>
                        <li class="nav-item">
                          <Link to="login"><a class="nav-link">Login</a></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </header>
          </div>
        </>)
      }
    }, []
    )
  })
  return (
    <>
      {/* <Auth/> */}
      {navbar}
    </>
  )
}

export default Nav
