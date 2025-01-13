import '../models/connection.js';
import BidSchemaModel from "../models/bidmodel.js";

export var save = async (req, res, next) => {
  // console.log(req.body);
  var bidList = await BidSchemaModel.find();
  var l = bidList.length;
  var _id = l == 0 ? 1 : bidList[l - 1]._id + 1;

  var bidDetails = { ...req.body, _id: _id, info: Date() };
  try {
    await BidSchemaModel.create(bidDetails);
    res.status(201).json({ status: "Bid Added Successfully" });
  } catch (error) {
    res.status(500).json({ status: false });
  }
};

export var fetch = async (req, res, next) => {
  var condition_obj = req.query.condition_obj;
  var bidDetails = await BidSchemaModel.find(condition_obj);
  if (bidDetails.length > 0) res.status(200).json(bidDetails);
  else res.status(404).json({ response: "Requested resource not found...." });
};