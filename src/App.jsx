import { useState, createContext } from "react";
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
import Header from "./assets/components/Header";
import Profile from "./assets/components/Profile";
import Footer from "./assets/components/Footer";
import './App.css';

export const AppContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  return (
    <div className="App-Container">
      <AppContext.Provider value={{ cart, setCart, user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Product />} />
            <Route path="login" element={<Login />} />
             <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="admin" element={<Admin />}>
              <Route index element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;