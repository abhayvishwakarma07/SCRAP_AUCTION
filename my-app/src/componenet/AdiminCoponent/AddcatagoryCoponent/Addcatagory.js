
import axios from 'axios';
import { useState , useEffect } from 'react';
import { __categoryapiurl } from '../../Api_url/api_url';

function AddCategory() {
  
  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [output , setOutput] = useState();
  const [output2,setOutput2]=useState()

  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  };
  
  const handleSubmit=(event)=>{
        if(!catName)return setOutput("catname is require");
        if(!file)return setOutput("image  is require");

    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(__categoryapiurl+"save", formData, config).then((response) => {
      setCatName("");
      setFile('')
      setOutput2("Category Added Successfully....");
      setTimeout(() => {
        setOutput("");
      }, 2000);
    });
    
  };
  
  return (
    <>
    <div class="container-fluid  p-0 overflow-hidden ">
        <div class="row g-0 d-flex align-items-center"  style={{"height":"550px",}}>
            <div class="col-lg-12 py-6 px-5">
<h1 class="mb-4">Add <span class="text-danger">Category Here!!!</span></h1>
<font style={{"color":"red"}} >{output}</font>
<font style={{"color":"green"}} >{output2}</font>
<form>
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} placeholder='category name' />
  </div>
  <br/>
  <div class="form-group">
    <label for="file">Category Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Category</button>
</form>
            </div>
        </div>
    </div>
    </>
  );
}

export default AddCategory;