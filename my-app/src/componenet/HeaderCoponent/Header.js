import { useState, useEffect, useContext } from "react";
import Auth from "../AuthComponent/Auth";

function Header() {

  const [HeaderComponent, setHeaderComponent] = useState();
  useEffect(() => {
    setInterval(()=>{
    if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "admin"
    ) {
      setHeaderComponent(
        <>
          <div className="w-screen overflow-hidden">
          <div className="">
            <div className="row align-items-center pl-xl-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                  <a className="text-light" href="">
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Support
                  </a>
                </div>
              </div>

              <div class="col-lg-6 text-lg-right head">
                <div class="position-relative d-inline-flex align-items-center bg-danger text-white top-shape px-5">
                  <div class="me-3 pe-3 border-end py-2 pr-5">
                    <p class="m-0">
                      <i class="fa fa-user me-2"></i>&nbsp;Welcome{" "}
                      {localStorage.getItem("name")}
                    </p>
                  </div>
                  <div class="py-2 pr-5">
                    <p class="m-0">
                      <i class="fa fa-envelope-open me-2"></i>&nbsp;&nbsp;
                      || {localStorage.getItem("email")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      );
    } else if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("role") == "user"
    ) {
      setHeaderComponent(
        <>
        <div className="">
          <div className="w-screen overflow-hidden ">
            <div className="row align-items-center pl-xl-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                  <a className="" href="">
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Support
                  </a>
                </div>
              </div>

              <div class="col-lg-6 text-lg-right">
                <div class="position-relative d-inline-flex align-items-center bg-danger text-white top-shape px-5">
                  <div class=" pe-3 border-end">
                    <p class="m-0">
                      <i class="fa fa-user me-2"></i>&nbsp;Welcome{" "}
                      {localStorage.getItem("name")}
                    </p>
                  </div>
                  <div class="py-2 pr-5">
                    <p class="m-0">
                      <i class="fa fa-envelope-open me-2"></i>&nbsp;&nbsp;
                     || {localStorage.getItem("email")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      );
    } else {
      setHeaderComponent(
        <>
        <div className="">
          <div className="w-screen overflow-hidden ">
            <div className={`row align-items-center pl-xl-5`}>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center text-black ">
                  <a className="" href="">
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="" href="">
                    Support
                  </a>
                </div>
              </div>

              <div className=" col-lg-6 text-sm-right ">
                <div className="position-relative  d-inline-flex align-items-center bg-danger text-white top-shape px-5">
                  <div className=" pe-3 border-end py-2 pr-5">
                    <p className="m-0">
                      <i className="fa fa-envelope-open me-2"></i>
                      &nbsp;info@example.com
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="m-0">
                      <i className="fa fa-phone-alt me-2"></i>
                      &nbsp;XXX XXX XXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      );
    }
})});

  return (
    <>
      <Auth/>
      {HeaderComponent}
    </>
  );
}

export default Header;
