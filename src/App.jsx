import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './assets/components/Home.jsx';
import Register from "./assets/components/Register";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Product from "./assets/components/Product.jsx";
import Login from "./assets/components/Login.jsx";
import Cart from "./assets/components/Cart.jsx";
import Order from "./assets/components/Order.jsx";
import Admin from "./assets/components/Admin.jsx";
import Users from "./assets/components/Users.jsx";
import Products from "./assets/components/Products.jsx";
import Orders from "./assets/components/Orders.jsx";
import './App.css';

function App() {
  return (
    <div className="App-Container">
      <BrowserRouter>
        <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1>
        <Link to="/">Home</Link> - 
        <Link to="/cart">MyCart</Link> - 
        <Link to="/order">MyOrder</Link> - 
        <Link to="/admin">Admin</Link> - 
        <Link to="/login">Login</Link>

        <div className="registration-section">
          {/* <Register /> */}
        </div>

        <Routes>
          <Route index element={<Product />} />
          <Route path="/" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          
          <Route path="/admin" element={<Admin />}>
             <Route index element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>

        <h3>This is footer</h3>
      </BrowserRouter>
    </div>
  );
}

export default App;
