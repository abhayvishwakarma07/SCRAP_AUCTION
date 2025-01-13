import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { __addProduct } from '../../Api_url/api_url';
import Card from '../Cardcomponenet/Card';
import CountdownTimer from '../Timarcomponent/CountdownTimer';


function Showproduct() {
  const params = useParams();
  const [cList, setPlist] = useState([]);

  useEffect(() => {
    var condition_obj = { "subcatnm": params.subcatnm };
    axios.get(__addProduct + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((result) => {
      setPlist(result.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(cList);

  return (
    <>
      <div className='overflow-hidden m-5'>
        <h1 >Product <span className='text-danger'> &gt;&gt;{params.subcatnm}</span></h1>
        <div className='d-flex flex-wrap justify-content-center  '>
          {
            cList.map((row) => (<Card row={row} />))
          }
        </div>
      </div>
    </>
  )
}

export default Showproduct