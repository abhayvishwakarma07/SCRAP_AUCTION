import express from 'express';
const router = express.Router();

//to link controller
import * as UserController from '../controller/user.controller.js'; 

router.post("/save",UserController.save);

router.post("/login",UserController.login);

router.get("/fetch",UserController.fetch);

router.delete("/delete",UserController.deleteUser);

router.patch("/update",UserController.update);

router.get("/fetchp",UserController.fetchpasword);

router.patch('/updatep',UserController.updatepassword );

export default router;


