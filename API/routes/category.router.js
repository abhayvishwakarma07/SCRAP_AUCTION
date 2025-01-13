import express from 'express';
const router = express.Router();

//to link controller
import * as CategoryController from '../controller/category.controller.js'; 

router.post("/save",CategoryController.save);

router.get("/fetch",CategoryController.fetch);

router.delete("/delete",CategoryController.deleteCategory);

router.patch("/update",CategoryController.update);

export default router;


