import express from 'express';
const router = express.Router();

//to link controller
import * as SubCategoryController from '../controller/subcategory.controller.js'; 

router.post("/save",SubCategoryController.save);

router.get("/fetch",SubCategoryController.fetch);

router.delete("/delete",SubCategoryController.deleteCategory);

router.patch("/update",SubCategoryController.update);

export default router;


