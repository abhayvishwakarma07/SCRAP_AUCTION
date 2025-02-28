
import axios from 'axios';
import { useState, useEffect } from 'react';
import { __categoryapiurl } from '../../Api_url/api_url';
import { Link } from 'react-router-dom';

function ViewProduct() {

  const [cList, setCatList] = useState([]);

  useEffect(() => {
    axios.get(__categoryapiurl + "fetch").then((response) => {
      setCatList(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>
      {/* About Start */}
      <hr className='text-black' />
      <hr className='' />
      <div class="container-fluid  p-0 overflow-hidden">
        <div class="row g-0">
          <div class="col-lg-12 py-1 px-3">
            <h1 class="">View <span class="text-danger">Product Here &gt;&gt;</span></h1>
            <center className=''>
              <div id="category_main" className=' d-flex flex-wrap m-4 justify-content-center' >
                {
                  cList.map((row) => (
                    <Link to={`/viewscproduct/${row.catnm}`} className='m-5' style={{ "height": "300px", "width": "350px" }} >
                      <div class="category_part border border-black p-2 bg-dark rounded">
                        <img src={`/assets/caticon/${row.caticonnm}`} height={300} width={300} />
                        <br />
                        <h1 className='bg-red-200 m-1 ' >{row.catnm}</h1>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </center>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default ViewProduct;