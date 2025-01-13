import React, { useEffect, useState } from 'react'
import { __addProduct } from '../../Api_url/api_url'
import axios from 'axios';


function Bidproduct() {
   const [product ,setproduct]=useState([])

  useEffect(() => {
    axios.get(__addProduct +"fetch").then((response) => {
      setproduct(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  return (
    <>
    <div>
      <h1>View Product</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Details</th>
              <th>Price</th>
              <th>Biding</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>
            {product.map((row)=>(
              <tr>
                <td>{row.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Bidproduct