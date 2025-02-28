import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../Api_url/api_url';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {

  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [opassword, setOldPassword] = useState();
  const [npassword, setNewPassword] = useState();
  const [error, seterror] = useState();
  const [cnpassword, setConfirmNewPassword] = useState();
  const handelSubmit = () => {
    if (!opassword) return seterror("old password is require")
    var condition_obj = { "email": localStorage.getItem("email"), "password": opassword };
    axios.get(__userapiurl + "fetchp", {
      params: { condition_obj: condition_obj }
    }).then((response) => {
      console.log(response.request.status);
      var status = response.request.status
      if (status == 200) {
        if (!npassword) return seterror("new password is require")
        if (!cnpassword) return seterror("confirm password is require");
        console.log(cnpassword);

        var update_details = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": cnpassword } };
        axios.patch(__userapiurl + "updatep", update_details).then((response) => {
          console.log(response)
          alert("Password updated successfully , please login again....");
          navigate("/logout");
        }).catch((error) => {
          console.log(error);
        })
      }
    }).catch((error) => {
      console.log(error)
      setOutput("Invalid old password");
      setOldPassword("");
    });
 
    setTimeout(() => {
      seterror('')
    }, 5000)
    setTimeout(() => {
      setOutput('')
     }, 3000);
  };
   
  return (
    <>
      <div class="container-fluid p-0 d-flex justify-content-center align-items-center" style={{"minHeight":"550px"}}>
        <div class="row shadow-lg bg-dark rounded" style={{"width":"440px","minHeight":"300px"}}>
          <div class="col-lg-12 py-6 px-5">
            <font style={{ "color": "red", "fontSize": "20px" }} >{output}</font><br/>
            <font style={{ "color": "red", "fontSize": "20px" }} >{error}</font>
            <h1 class=" mb-4">Change <span class="text-danger">Password Here!!!</span></h1>
            <form>
              <div class="form-group">
                <label for="opwd">Old Password:</label>
                <input type="password" class="form-control" onChange={e => setOldPassword(e.target.value)} value={opassword} placeholder='Old Password' />
              </div>
              <div class="form-group">
                <label for="npwd">New Password:</label>
                <input type="password" class="form-control" onChange={e => setNewPassword(e.target.value)} value={npassword} placeholder='New Password'/>
              </div>

              <div class="form-group">
                <label for="cnpwd">Confirm New Password:</label>
                <input type="password" class="form-control" onChange={e => setConfirmNewPassword(e.target.value)} value={cnpassword} placeholder='Confirm Password' />
              </div>
              <button type="button" class="btn btn-success" onClick={handelSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPAdmin;