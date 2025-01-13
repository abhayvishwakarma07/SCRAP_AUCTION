import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { __addProduct, __biding } from '../../Api_url/api_url';

function Product() {
   const params=useParams();  
  const [list,setlist]=useState([]);
  const [plist,setplist]=useState([])

  useEffect(() => {
    var condition_obj = { "p_id": params._id};
    axios.get(__biding + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((result) => {
      setlist((result.data).sort((a, b) => b.bidprice- a.bidprice));
    }).catch((error) => {
      console.log(error);
    });
  }, []);
     
  return (
    <>

    <div className='overflow-auto m-5' style={{"height":"470px"}}>
    <table className="text-center table table-bordered overflow-auto">
          <thead className="bg-dark text-white">
            <tr>
              <th>ProductId</th>
              <th>Title</th>
              <th>Base Price</th>
              <th>Beding user</th>
              <th>biding price</th>
              <th>Info</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row)=>(
              <tr className='text-light'>
                <td>{row.p_id}</td>
                <td>{row.Ptitle}</td>
                <td>{row.base_price}</td>
                <td>{row.user_email}</td>
                <td>{row.bidprice}</td>
                <td>{row.info}</td>
                <td><img src={`/assets/productcaticon/${row.piconnm}`} style={{"height":"100px","width":"100px"}}/></td>

              </tr>
            ))}
          </tbody>
      </table>
    </div>
    </>
  )
}

export default Product