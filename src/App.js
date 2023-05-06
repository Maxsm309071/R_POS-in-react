import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home/home';

import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';

import Category from './components/category/category';

import Product from './components/product/product';

import Login from './components/auth/login';
import Register from './components/auth/register';
import ForgetPassword from './components/auth/forgetPassword';

import Profile from './components/profile/profile';
import ChangePassword from './components/profile/changePassword';
import UpdateProfile from './components/profile/updateProfile';

import ResetPassword from './components/auth/resetPassword';

import Subscribe from './components/payments/subscribe';
import PaymentSuccess from './components/payments/paymentSuccess';
import PaymentFail from './components/payments/paymentFail';

import NotFound from './components/layout/notFound/notFound';
import Dashboard from './components/admin/dashboard/dashboard';
import AddCategory from './components/admin/Add/addCategory';
import AddProduct from './components/admin/Add/addProduct';
import AdminCategory from './components/admin/dashboardView/adminCategory';
import AdminProduct from './components/admin/dashboardView/adminProduct';
import Users from './components/admin/users/users';








function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category" element={<Category />} />

        <Route path="/product" element={<Product />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/notfound" element={<NotFound />} />

        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/addcategory" element={<AddCategory />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/user" element={<Users />} />
        
        
      </Routes>

      <Footer />
    </Router>
  );
}





export default App;
