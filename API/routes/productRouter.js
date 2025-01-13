import express from 'express';
const router = express.Router();

//to link controller
import *as Product from '../controller/productcontroller.js'

router.post("/save",Product.save);

router.get("/fetch",Product.fetch);

router.delete("/delete",Product.deleteCategory);

router.patch("/update",Product.update);

export default router;