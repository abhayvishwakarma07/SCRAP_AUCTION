import axios from 'axios';
import { __userapiurl } from '../../Api_url/api_url';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [massage, setmassage] = useState("");
  const [output, setoutput] = useState()
  setTimeout(() => (
    setmassage('')), 4000)

  const handalSubmit = () => {
    if (!email) return setmassage("*email is require")
    if (!password) return setmassage("*password is required");

    const userDetails = { "email": email, "password": password }
    axios.post(__userapiurl + "login", userDetails).then((responce) => {
      const user = responce.data.userDetails;
      localStorage.setItem("token", responce.data.token);
      localStorage.setItem("_id", user._id);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("mobile", user.mobile);
      localStorage.setItem("address", user.address);
      localStorage.setItem("city", user.city);
      localStorage.setItem("gender", user.gender);
      localStorage.setItem("role", user.role);
      localStorage.setItem("info", user.info);
        (user.role == "admin") ? navigate("/admin") : navigate("/user");
    }).catch((error) => {
      if (error.response) {
        const user = error.response;
        if (user.status === 404) {
          setmassage("User not found");
          setemail("");
        } else if (user.status === 401) {
          setmassage("Password is wrong");
          setpassword("");
        }
      }
      setTimeout(() => setmassage(''), 4000);
    });
    
  }
  return (
    <>
      <section class="about_section layout_padding d-flex justify-content-center">
        <div className='shadow-lg p-5 bg-dark rounded-3 ' style={{ "width": "400px" }}>
          <h1 className='text-danger '>LOG-IN</h1>
          <p className='text-success' >{output}</p>
          <p className='text-danger' style={{ 'height': "10px" }}>{massage}</p>
          <div class="container d-flex justify-content-center">
            <form className=''>
              <div className='' >
                <div class="form-group ">
                  <label for="exampleInputEmail1 ">Email address</label>
                  <input type="email" id="email" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email} />
                  <p>email example :- example@gmail.com</p>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setpassword(e.target.value)} value={password} />
                </div>
              </div>
              <button type="button" class="btn btn-primary" onClick={handalSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
