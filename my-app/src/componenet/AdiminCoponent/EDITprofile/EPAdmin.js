import { useState , useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../Api_url/api_url';

function EPAdmin() {

  const [ output , setOutput ] = useState();
  const [ userDetails , setUserDetails ] = useState([]);
  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();

  const [ m , setM ] = useState();
  const [ f , setF ] = useState();
  
  useEffect(()=>{
    var condition_obj={"email":localStorage.getItem("email")};
    axios.get(__userapiurl+"fetch",{
        params : { condition_obj : condition_obj }
    }).then((response)=>{
      var users=response.data[0];
      setName(users.name);
      setEmail(users.email);
      setMobile(users.mobile);
      setAddress(users.address);
      setCity(users.city);
      
      if(users.gender=="male")
        setM("checked");
      else
        setF("checked");

    }).catch((error)=>{
        console.log(error);
    });    
  },[]);

  const handelSubmit=()=>{
    var userDetails={"condition_obj":{"email":localStorage.getItem("email")} ,"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(__userapiurl+"update",userDetails).then((response)=>{
            alert("Profile edited successfully...");
    }).catch((error)=>{
            setOutput("Profile Not Changed , Please try again....");
    });
  };
  
  return (
    <>
    <div class="container-fluid p-1" style={{"min-height":"550px"}}>
        <div class="row g-0">
<div class="col-lg-12 py-6 px-5">
<font style={{"color":"blue","fontSize":"20px"}} >{output}</font>  
<h1 class="mb-4">Edit Profile <span class="text-primary">Here!!!</span></h1>
<div className='d-flex justify-content-center align-item-center'>
<form className='' style={{"width":"900px"}}>
  <div className='row'>
  <div class="form-group col-md-4">
    <label for="name">Name:</label>
    <input type="text" class="form-control" onChange={e=>setName(e.target.value)} value={name} />
  </div>
  <div class="form-group col-md-4">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" onChange={e=>setEmail(e.target.value)} value={email} />
  </div>
  <div class="form-group col-md-4">
    <label for="mobile">Mobile:</label>
    <input type="text" class="form-control" onChange={e=>setMobile(e.target.value)} value={mobile} />
  </div>
  </div>
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea class="form-control" rows="2" onChange={e=>setAddress(e.target.value)} value={address} ></textarea>
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" onChange={e=>setCity(e.target.value)} value={city} >
      <option>Select City</option>
      <option>Indore</option>
      <option>Ujjain</option>
      <option>Bhopal</option>
    </select>
  </div>
  <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    Male <input type="radio" name="gender" value="male" checked={m} onChange={e=>setGender(e.target.value)}  />
    &nbsp;&nbsp;
    Female <input type="radio" name="gender" value="female" checked={f} onChange={e=>setGender(e.target.value)}  />
  </div>
  <button type="button" class="btn btn-success" onClick={handelSubmit}>Submit</button>
</form>
</div>
</div>
        </div>
    </div>
    </>
  );
}

export default EPAdmin;