import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home/home';
import Header from './components/layout/header/header';
import Category from './components/category/category';
import Footer from './components/layout/footer/footer';
import Login from './components/auth/login';
import Register from './components/auth/register';
import ForgetPassword from './components/auth/forgetPassword';
import ResetPassword from './components/auth/resetPassword';
import Subscribe from './components/auth/resetPassword';
import Product from './components/product/product';

function App() {
  return <Router>
  <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/forgetpassword' element={<ForgetPassword />}/>

      <Route path='/resetpassword/:token' element={<ResetPassword />}/>
    </Routes>
   <Footer />
  </Router>
}

export default App;
