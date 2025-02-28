import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './componenet/NavbarCoponent/Nav';
import Slider from './componenet/VisitorCoponent/SliderCoponent/Slider';
import About from './componenet/VisitorCoponent/AboutCoponent/About';
import Footer from './componenet/FooterCoponent/Footer';
import Main from './componenet/VisitorCoponent/HomeCoponent/Main'
import Contact from './componenet/VisitorCoponent/ContectCoponent/Contect';
import Ragistar from './componenet/VisitorCoponent/RagitarCoponent/Ragistar';
import Login from './componenet/VisitorCoponent/LoginCoponent/Login';
import Services from './componenet/VisitorCoponent/ServicessCoponent/Services';
import Admin from './componenet/AdiminCoponent/AdminHomeCoponent/Admin';
import User from './componenet/UserComponent/UserHomeComponnet/User';
import Logout from './componenet/LogoutCoponent/Logout';
import Addcatagory from './componenet/AdiminCoponent/AddcatagoryCoponent/Addcatagory';
import Subcatagory from './componenet/AdiminCoponent/AddSCatgoryCoiponent/Subcatagory';
import Addproduct from './componenet/UserComponent/AddproductCoponent/Addproduct';
import ViewProduct from './componenet/UserComponent/ViewcatagoryCoponent/ViewProduct'
import ViewSCProduct from './componenet/UserComponent/ViewSCatagoryComponent/ViewSCProduct';
import Showproduct from './componenet/UserComponent/ShowProductComponent/Showproduct';
import Header from './componenet/HeaderCoponent/Header';
import Beding from './componenet/UserComponent/Bedingcomponent/Beding';
import Product from './componenet/UserComponent/BedinglistCoponent/Product';
import Charity from './componenet/UserComponent/Charitycomponent/Charity';
import EmailVarify from './componenet/EmailvarifyCoponent/Emailvarify';
import Manage from './componenet/AdiminCoponent/MangeuserCoponent/Manage';
import EPAdmin from './componenet/EDITprofile/EPAdmin';
import CPAdmin from './componenet/Epassword/CPAdmin';
import Bidproduct from './componenet/UserComponent/BIdproduct/Bidproduct';

function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <Slider/>
      <Routes >
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contect' element={<Contact/>}/>
        <Route path='/ragistar' element={<Ragistar/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/addcatgory' element={<Addcatagory/>}/>
        <Route path='/subcatgory' element={<Subcatagory/>}/>
        <Route path='/viewProduct' element={<ViewProduct/>}/>
        <Route path="/viewscproduct/:catnm" element={<ViewSCProduct />}></Route>
        <Route path='/manageuser' element={<Manage/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/subCategory/:subcatnm' element={<Showproduct/>}/>
        <Route path='/biding/:_id' element={<Beding/>}/>
        <Route path='/bidinglist/:_id' element={<Product/>}/>
        <Route path='/charity' element={<Charity/>}/>
        <Route path='/verify/:email' element={<EmailVarify/>}/>
        <Route path='/Eprofile' element={<EPAdmin/>}/>
        <Route path='/Epassword' element={<CPAdmin/>}/>
        <Route path='/bidproduct' element={<Bidproduct/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
