import React from 'react'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { __subcategoryapiurl } from '../../Api_url/api_url';
import { __categoryapiurl } from '../../Api_url/api_url';

function Subcatagory() {
    const [file, setFile] = useState();
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [output , setOutput] = useState();
    const [ cList , setCatList ] = useState([]);
    const [output2 ,setOutput2] =useState()
  
    useEffect(()=>{
      axios.get(__categoryapiurl+"fetch").then((response)=>{
          setCatList(response.data);
      }).catch((error)=>{
          console.log(error);
      });    
    });
  
    const handleChange=(event)=>{
      setFile(event.target.files[0]);
    };
    
    const handleSubmit=(event)=>{
     if(!catName) return setOutput("catgory is require");
     if(!subCatName) return setOutput("Subcat name is require");
     if(!file) return setOutput("image is require");

      event.preventDefault();
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('subcatnm', subCatName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(__subcategoryapiurl+"save", formData, config).then((response) => {
        setCatName("");
        setSubCatName("");
        setOutput2("Sub Category Added Successfully....");
      });
    };
    
    return (
      <>
      {/* About Start */}
      <div class="container-fluid  p-0 overflow-hidden d-flex justify-content-center align-items-center  " style={{"height":"550px"}}>
          <div class="row g-0 d-flex align-items-center  bg-dark rounded-2" style={{"width":"400px","height":"450px"}}>
              <div class="col-lg-12 py-6 px-5">
  <h1 class=" mb-4">Add <span class="text-danger">Sub Category Here!!!</span></h1>
  <font style={{"color":"red"}} >{output}</font>
  <font style={{"color":"blue"}} >{output2}</font>
  <form>
    <div class="form-group">
      <label for="catnm">Category Name:</label>
      <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
        <option>Select Category</option>    
        {
          cList.map((row)=>(
            <option>{row.catnm}</option>
          ))
        }
      </select>
    </div>
    <div class="form-group">
      <label for="subcatnm">Sub Category Name:</label>
      <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} placeholder='Sub catagory ' />
    </div>
    <div class="form-group">
      <label for="file">Category Icon:</label>
      <input type="file" class="form-control" onChange={handleChange} />
    </div>
    <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Sub Category</button>
  </form>
              </div>
          </div>
      </div>
      {/* About End */}
      </>
    );
}

export default Subcatagory