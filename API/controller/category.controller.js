import '../models/connection.js';
import url from 'url';
import rs from 'randomstring';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link models to controller
import CategorySchemaModel from '../models/category.model.js';

export const save=async(req,res)=>{
 var cList=await CategorySchemaModel.find();
 var l=cList.length;
 var _id=l==0?1:cList[l-1]._id+1;
 var caticon=req.files.caticon;
 var caticonnm=rs.generate(20)+"-"+Date.now()+"-"+caticon.name;
 var uploadpath=path.join(__dirname,"../../my-app/public/assets/caticon",caticonnm);
 var cDetails={...req.body,"_id":_id,"caticonnm":caticonnm};

 try{
    await CategorySchemaModel.create(cDetails);
    caticon.mv(uploadpath);
    res.status(201).json({"status":true});
 }
 catch(error){
    res.status(500).json({"status":false});
 }
};

export const fetch=async(req,res)=>{
 var condition_obj=url.parse(req.url,true).query.condition_obj;
 if(condition_obj!=undefined)
  condition_obj=JSON.parse(condition_obj); 
 else
  condition_obj={};  
 
 var cList=await CategorySchemaModel.find(condition_obj);
 if(cList.length!=0)
   res.status(200).json(cList);
 else
   res.status(404).json({"status":"Resource not found"});    
};

export var update=async(req,res)=>{
   let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
   if(cDetails){
       let category=await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(category)
         res.status(200).json({"msg":"success"});
       else
         res.status(500).json({"status": "Server Error"});
   }
   else
     res.status(404).json({"status":"Requested resource not available"});       
};

export var deleteCategory=async(req,res)=>{
   let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
   if(cDetails){
       let category=await CategorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));   
       if(category)
         res.status(200).json({"msg":"success"});
       else
         res.status(500).json({"status": "Server Error"});
   }
   else
     res.status(404).json({"status":"Requested resource not available"});     
};