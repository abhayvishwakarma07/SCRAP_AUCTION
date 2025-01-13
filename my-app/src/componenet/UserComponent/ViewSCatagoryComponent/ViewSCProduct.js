
import axios from 'axios';
import { useState, useEffect } from 'react';
import { __categoryapiurl, __subcategoryapiurl } from '../../Api_url/api_url';
import { useParams, Link } from 'react-router-dom';

function ViewSCProduct() {

  const params = useParams();
  const [scList, setSubCatList] = useState([]);

  useEffect(() => {
    var condition_obj = { "catnm": params.catnm };
    axios.get(__subcategoryapiurl + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((result) => {
      setSubCatList(result.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
    <div className='d-flex align-items-center' style={{"min-height":"550px"}}>
      <div class="container-fluid  p-0 overflow-hidden " >
        <div class="row g-0">
          <div class="col-lg-12 py-6">
            <h1 class="display-5 mb-4">View <span class="text-danger">Product SubCategory &gt;&gt; {params.catnm}</span></h1>
            <div id="category_main" className='d-flex flex-wrap justify-content-center' >
              {
                scList.map((row) => (
                  <Link to={`/subCategory/${row.subcatnm}`} className=''  >
                    <div class="category_part border border-black rounded-2 m-2 p-2 text-center" style={{ "height": "350px", "width": "300px" }}>
                      <img src={`/assets/subcaticon/${row.subcaticonnm}`} height={250} width={250} />
                      <br />
                      <h2>{row.subcatnm}</h2>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ViewSCProduct;