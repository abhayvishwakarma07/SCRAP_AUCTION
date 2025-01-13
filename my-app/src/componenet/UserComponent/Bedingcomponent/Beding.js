import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { __addProduct ,__biding } from '../../Api_url/api_url';

function Beding() {
    const parmas=useParams();
    const [product,setproduct]=useState([]);
    const [bidingprice,setbidingprice]=useState()
    const [baseprice,setbaseprice]=useState();
    const [showerror,seterror]=useState();
    const [list,setlist]=useState([]);
    const [lastbiding,setlastbiding]=useState();
    const [output ,setOutput]=useState();
    // const  bidingprice= useRef(null);

    useEffect(() => {
      var condition_obj = { _id: parmas._id }
      axios.get(__addProduct + "fetch", {
        params: { condition_obj: condition_obj }
      }).then((result) => {
        setproduct(result.data);
        setbaseprice(result.data[0].Pprice)
      }).catch((error) => {
        console.log(error);
      });
    },);

    useEffect(() => {
      const fetchBids = async () => {
          try {
              const condition_obj = { p_id: parmas._id };
              const result = await axios.get(__biding + "fetch", {
                  params: { condition_obj: condition_obj }
              });
              const sortedList = (result.data || []).sort((a, b) => b.bidprice - a.bidprice);
              setlist(sortedList);
              if (sortedList.length > 0) setlastbiding(sortedList[0].bidprice);
          } catch (error) {
              console.error("Error fetching bids:", error);
          }
      };
      fetchBids();
  }, [parmas._id]);


  
  const  handleBidProduct=()=>{ 
    if(!bidingprice) return seterror("please fill bidprice")
    if( baseprice > bidingprice || bidingprice < lastbiding ) return seterror("*beding price is less then base price");
    product.map((row) => {
      var bidDetails = {
        p_id: row._id,
        Ptitle:row.Ptitle,
        user_email: localStorage.getItem("email"),
        base_price: row.Pprice,
        bidprice: bidingprice,
        piconnm:row.pimgnm,
      } 
     console.log(bidDetails)
   axios.post(__biding+'save',bidDetails).then((res)=>{
      console.log(res.data.status)
      setbidingprice('')
      setOutput(res.data.status)
      setTimeout(()=>{
        setOutput('')
      },5000)
   }).catch((erroe)=>{
    console.log(erroe);
   })  
    }) 
  }
  return (
    <>
    <div className='min-vw-screen d-flex justify-content-center overflow-hidden align-items-center' style={{"min-height":"550px"}}>
    {product.map((row)=>(
      <div className='justify-content-center' >
        
        <div class="card mb-3 rounded-5 shadow-lg bg-dark" style={{"max-width":"700px"}}>
        <p className='text-center text-danger'>{showerror}</p>
        <p className='text-center text-success'>{output}</p>
  <div class="row g-0 rounded-3">
    <div class="col-md-6">
      <img src={`/assets/productcaticon/${row.pimgnm}`} style={{"width":"400px","height":"300px"}} className="img-fluid rounded-start p-2" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">           
        <h5 class="card-title">name :{row.Ptitle}</h5>
                  <p>ownerID:-{row.userid}</p>
                   <p> price:-{row.Pprice}</p>
        <p class="card-text">discription:{row.pdescription}</p>
        <p class="card-text"><small class="text-body-secondary"></small></p>
        <p>bidingprice :-{lastbiding}</p>
        <form action="" className='justify-center'>
          <label htmlFor="biding price">biding :-</label>
          <input type="number" value={bidingprice} onChange={(e) => setbidingprice(e.target.value)} placeholder='biding' /><br/>
         <div className='d-flex justify-content-around'>
          <button type="button" class="btn btn-primary" onClick={handleBidProduct}>Submit</button>
          <Link to={`/bidinglist/${row._id}`}><button type="button" class="btn btn-primary"> Biding list</button></Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </div>
    ))}
    </div>
    </>
  )
}

export default Beding