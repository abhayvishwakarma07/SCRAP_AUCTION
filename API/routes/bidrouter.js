import express from "express";
import *as BidController from '../controller/bidproduct.js';

var router = express.Router();

router.post("/save", BidController.save);

// router.post("/login", BidController.login);

router.get("/fetch", BidController.fetch);

// router.delete("/delete", BidController.deleteUser);

// router.patch("/update", BidController.update);

export default router;
