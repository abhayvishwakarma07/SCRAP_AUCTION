import axios from "axios";
import React, { useEffect, useState } from "react";
import { __addProduct, __categoryapiurl, __subcategoryapiurl } from "../../Api_url/api_url";

function AddProduct() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [catList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);
  const [output,setoutput]=useState();

  // Fetch all categories
  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then((response) => {
        setCatList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Fetch subcategories whenever category changes
  useEffect(() => {
      const condition_obj={'catnm':category}
    if (category) {
      axios
        .get(__subcategoryapiurl + "fetch", {
          params: {condition_obj:condition_obj },
        })
        .then((response) => {
          setSubCatList(response.data);
          setSubcategory(""); // Reset subcategory when a new category is selected
        })
        .catch((error) => {
          console.error("Error fetching subcategories:", error);
        });
    } else {
      setSubCatList([]); // Clear subcategories if no category selected
    }
  }, [category]);

  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   if(!title) return setoutput("*product title is require");
   if(!description) return setoutput("*discription is require");
   if (!category) return setoutput("*category is require");
   if (!subcategory) return setoutput("*subcatagory is require");
   if(!price) return setoutput("*price is require");
   if(!file) return setoutput("*image is require");

    const formData = new FormData();
    formData.append("Ptitle", title);
    formData.append("pdescription", description);
    formData.append("catnm", category);
    formData.append("subcatnm", subcategory);
    formData.append("Pprice", price);
    formData.append("pimg", file);
    formData.append("userid",localStorage.getItem("email"))
    const config = {
      'content-type': 'multipart/form-data'
    }
    axios.post(__addProduct+'/save',formData).then((res)=>{
    
      console.log(res)
      setCatList([])
      setCategory('')
      setDescription('')
      setFile('')
      setPrice('')
     setTitle('')
     setoutput("the details is save ");
    }).catch((error)=>{
      console.log(error)
      setCategory('')
      setDescription('')
      setFile('')
      setPrice('')
     setTitle('')
     setoutput("the details is save ");
    })
  }

  return (
    <div className="overflow-hidden">
    <div className="row d-flex align-items-center justify-content-center" style={{"height":"550px"}}>
    <div className="w-75  align-items-center ml-5 mb-5" >
     <p className="text-danger">{output}</p>
      <form onSubmit={handleSubmit} >
       
        <div className="row  ">
        <div className="form-group col-md-6">
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder='Title'
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="description">Product Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder='Discription'
          />
        </div>
        </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="">-- Select Category --</option>
            {catList.map((cat) => (
              <option key={cat.id} value={cat.catnm}>
                {cat.catnm}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="subcategory">Subcategory:</label>
          <select
            id="subcategory"
            className="form-control"
            onChange={(e) => setSubcategory(e.target.value)}
            value={subcategory}
            disabled={!category} // Disable if no category selected
          >
            <option value="">-- Select Subcategory --</option>
            {subCatList.map((subcat) => (
              <option key={subcat.id} value={subcat.subcatnm}>
                {subcat.subcatnm}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder='Price'
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="image">Product Image:</label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={handleChange}
          />
        </div>
        </div>
       <div className="row d-flex justify-content-center">
        <button type="submit" className="btn btn-primary col-10">Add Product</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
export default AddProduct;

