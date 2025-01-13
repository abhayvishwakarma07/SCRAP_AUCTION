import React, { useState } from 'react'
import axios from 'axios';
import { __userapiurl } from '../../Api_url/api_url';

function Ragistar() {
     const [name,setname]=useState();
     const [email,setemail]=useState();
     const [password,setpassword]=useState();
     const [mobile,setmobile]=useState();
     const [city,setcity]=useState();
     const [Address,setaddress]=useState();
     const [gender,setgender]=useState();
     const [result,setresult]=useState("");
     const [output,setOutput2]=useState()
     const [emailerr,setemailerr]=useState('');
     const [mobileerr,setmobileerr]=useState();
     const [passworderr,setpasserr]=useState('');
     const [ragistar,setragitar]=useState('')

  const handalSubmit=()=>{
    if (!name) return setOutput2("*Name is required");
    if (!email) return setOutput2("*Email is required");
    if (!password) return setOutput2("*Password is required");
    if (!mobile) return setOutput2("*Mobile is required");
    if (!Address) return setOutput2("*Address is required");
    if (!city) return setOutput2("*City is required");
    if (!gender) return setOutput2("*Gender is require");

    var userdetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":Address,"city":city,"gender":gender}
   
    axios.post(__userapiurl+"save",userdetails).then((result)=>{
    setname("")
    setaddress("")
    setcity("")
    setemail('')
    setgender("")
    setmobile('')
    setpassword("")
    setragitar("ragitar sucessefully check your email and varify for log in ")
  }).catch((error)=>{
    var err=error.response.data.status;

    if(err.search("email") > 0){
      setemailerr("eg:-(exampla@gmail.com)|| same email is not allow")
    }
    setTimeout(()=>(
      setemailerr('')
    ),4000)
    if(err.search("password") > 0){
      setpasserr("Password must be greater than 5 and less than 10 ")
    }
    setTimeout(()=>(
      setpasserr('')
    ),4000)
    if(err.search("mobile") > 0){
      setmobileerr("Mobile number must be 10 digit.")
    }
    setTimeout(()=>(
      setmobileerr('')
    ),4000)
  })
  }
  setTimeout(() => {
    setOutput2("");
  },5000);
  return (
    <>
      <section class="">
        <div class="container ">
          <div class="custom_heading-container d-block ">
            {result}
            <h3 class="container text-center text-danger">
              Ragistar componenet
            </h3>
            <div class="container">
              <form>
              <p className='text-danger'>{output}</p>
              <div className='row'>
                <div class="form-group col-6">
                  <label for="name">Name</label>
                  <input type="Name" class="form-control" onChange={e=>setname(e.target.value)}
                 placeholder="Enter Name" />
                </div>
                <div class="form-group col-6">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"onChange={e=>setemail(e.target.value)} value={email}  />
                <p className='text-danger'>{emailerr}</p>
                </div>
              </div>
              <div className='row'>
                <div class="form-group col-6">
                  <label for="exampleInputPassword1" className='fw-bold'>Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e=>setpassword(e.target.value)} value={password}  />
                 <p className='text-danger'>{passworderr}</p> 
                </div>
                <div class="form-group col-6">
                  <label for="mobile" className='fw-bold'>Mobile</label>
                  <input type="text" class="form-control" placeholder="mobile"onChange={e=>setmobile(e.target.value)} value={mobile}  />
                 <p className='text-danger'> {mobileerr}</p>
                </div>
              </div>
                <div class="form-group">
                  <label for="address"className='fw-bold'>Address</label>
                  <input type="text" class="form-control" placeholder="address" onChange={e=>setaddress(e.target.value)} value={Address} />
                </div>
                <div class="form-group ">
                  <label for="city" className='fw-bold'>City</label>
                  <select class="form-control" placeholder="address" onChange={e=>setcity(e.target.value)} value={city} >
                     <option>Select option</option>
                     <option>indore</option>
                     <option>Ujjain</option>
                     <option>mandsaur</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="address">Gender</label> &nbsp;&nbsp;
                  Male
                  <input type="radio" placeholder="address" name='gender' value="male" onChange={e=>setgender(e.target.value)}  /> &nbsp;&nbsp;
                  Female
                  <input type="radio" placeholder="address" name='gender'value="female" onChange={e=>setgender(e.target.value)}  /> &nbsp;&nbsp;

                </div>
                <p>{ragistar}</p>
                <div  className='row m-2'>
                <button type="button" class="btn btn-primary col-12" onClick={handalSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Ragistar
