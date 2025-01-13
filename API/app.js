import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app = express();

//to link router
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import SubCategoryRouter from './routes/subcategory.router.js';
import product from './routes/productRouter.js'
import biding from './routes/bidrouter.js';

//configuration to resolve cross origin problem
app.use(cors());

//configuration to fetch file content from request
app.use(fileUpload());

//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//router level middleware to load router
app.use('/user',UserRouter);
app.use('/category',CategoryRouter);
app.use('/subcategory',SubCategoryRouter);
app.use('/product',product);
app.use('/bidproduct', biding)

app.listen(3001);
console.log("server invoked to link http://localhost:3001");