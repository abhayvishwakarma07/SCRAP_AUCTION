import { useState , useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Api_url/api_url';
import { useNavigate } from 'react-router-dom';

function Manage() {

  const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]); 

  useEffect(()=>{
    var condition_obj={"role":"user"};
    axios.get(__userapiurl+"fetch",{
        params : { condition_obj : condition_obj }
    }).then((response)=>{
        //console.log(response.data);
        setUserDetails(response.data);
    }).catch((error)=>{
        console.log(error);
    });    
  });

  const changestatususer=(_id,s)=>{
    if(s=="verify")
    {
      var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":1}};
      axios.patch(__userapiurl+"update",update_details).then((response)=>{
          alert("User verified successfully....");
          navigate("/manageusers");
      });
    }
    else if(s=="block")
    {
      var update_details={"condition_obj":{"_id":_id} ,"content_obj":{"status":0}};
      axios.patch(__userapiurl+"update",update_details).then((response)=>{
          alert("User blocked successfully....");
          navigate("/manageusers");
      });
    }    
    else
    {
      var delete_details={"data":{"_id":_id}};
      axios.delete(__userapiurl+"delete",delete_details).then((response)=>{
          alert("User deleted successfully....");
          navigate("/manageusers");
      });
    }
  };

  return (
    <>
    {/* About Start */}
    <div class="container-fluid p-0 overflow-hidden ">
        <div class="row g-0 d-flex align-items-center"  style={{"height":"550px"}}>
<div class="col-lg-12 py-6 px-5">
<h1 class="mb-4 bold">View & Manage User<span class="text-danger bold "> Details Here!!!</span></h1>
<div className='overflow-auto border' style={{"height":"400px"}}>
<table class="table table-bordered text-light">
<tr>
<th>RegID</th>
<th>Name</th>
<th>Email</th>  
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>  

{
  userDetails.map((row)=>(
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td>
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>
      <td>
      {row.status==1?<p color="green" className='bg-transparent text-success cursor-pointer' >Verified</p>:<p color="orange" className='bg-transparent text-danger cursor-pointer'>Blocked</p>}
      </td>
      <td>
      {row.status==1?<font className='bg-transparent text-primary cursor-pointer' onClick={()=> changestatususer(row._id,'block')} >Change Status</font>:<font onClick={()=> changestatususer(row._id,'verify')} className='bg-transparent text-primary cursor-pointer'>Change Status</font>}      
      <br/>
      <font className='bg-transparent text-danger cursor-pointer' onClick={()=> changestatususer(row._id,'delete')} >DELETE</font>
      </td>
    </tr>
  ))
}

</table>
</div>
</div>
        </div>
    </div>
    {/* About End */}
    </>
  );
}

export default Manage
