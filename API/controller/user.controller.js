import '../models/connection.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import bcrypt from 'bcrypt';
import SendEmail from './email.controller.js';

//to link models to controller
import UserSchemaModel from '../models/user.model.js';

export const save = async (req, res) => {
  var userList = await UserSchemaModel.find();
  var l = userList.length;
  var _id = l == 0 ? 1 : userList[l - 1]._id + 1;
  const saltRounds = 4;
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
  var userDetails = { ...req.body, "_id": _id, password: hashedPassword, "status": 0, "role": "user", "info": Date() };
  try {
    var user = await UserSchemaModel.create(userDetails);
    SendEmail(user.name, user.email, req.body.password);
    res.status(201).json({ "status": true });
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ "status": error.message });
  }
};

export const login = async (req, res) => {
  var condition_obj = { email: req.body.email, status: 1 };
  var userList = await UserSchemaModel.find(condition_obj);

  if (userList.length != 0) {
    const user = userList[0];

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
      const payload = user.email;
      const key = rs.generate(50);
      const token = jwt.sign(payload, key);

      res.status(200).json({ "token": token, "userDetails": user });
    } else {
      res.status(401).json({ "message": "Invalid credentials" });
    }
  } else {
    res.status(404).json({ "message": "User not found or inactive" });
  }
};

export const fetch = async (req, res) => {
  var condition_obj = req.query.condition_obj;
  var userList = await UserSchemaModel.find(condition_obj);
  if (userList.length != 0)
    res.status(200).json(userList);
  else
    res.status(404).json({ "status": "Resource not found" });
};

export var update = async (req, res) => {
  // console.log(req.body.condition_obj.email)
  let email=req.body.condition_obj.email
  let userDetails = await UserSchemaModel.findOne({email});
  if (userDetails) {
    let user = await UserSchemaModel.updateOne(req.body.condition_obj, { $set: req.body.content_obj });
    if (user)
      res.status(200).json({ "msg": "success" });
    else
      res.status(500).json({ "status": "Server Error" });
  }
  else
    res.status(404).json({ "status": "Requested resource not available" });
};

export var deleteUser = async (req, res) => {
  let userDetails = await UserSchemaModel.findOne(req.body);
  if (userDetails) {
    let user = await UserSchemaModel.deleteOne(req.body);
    if (user)
      res.status(200).json({ "msg": "success" });
    else
      res.status(500).json({ "status": "Server Error" });
  }
  else
    res.status(404).json({ "status": "Requested resource not available" });
};

export const fetchpasword = async (req, res) => {
  var email= req.query.condition_obj.email;  
  var password=req.query.condition_obj.password;
  var userList = await UserSchemaModel.find({email});
  var hashpassword=userList[0].password;
  const isPasswordValid = await bcrypt.compare(password,hashpassword);
  if(isPasswordValid){
    res.status(200).json({ "msg": "success" });
  }
  else{
    res.status(400).json({"result":"passwor not match"});
  }
}

export var updatepassword = async (req, res) => {
  // console.log(req.body.condition_obj.email)
  let email=req.body.condition_obj.email
  // console.log(req.body.content_obj.password);
  const saltRounds = 4;
  const hashedPassword = await bcrypt.hash(req.body.content_obj.password,saltRounds)
  const hashed={"password":hashedPassword};
  console.log(hashedPassword);
  let userDetails = await UserSchemaModel.findOne({email});
  if (userDetails) {
    let user = await UserSchemaModel.updateOne(req.body.condition_obj, { $set: hashed });
    if (user)
      res.status(200).json({ "msg": "success" });
    else
      res.status(500).json({ "status": "Server Error" });
  }
  else
    res.status(404).json({ "status": "Requested resource not available" });
};