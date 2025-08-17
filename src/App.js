import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import SignIn from "./Pages/SignIn/SignIn";
import Cart from "./Pages/Cart/Cart";
import SignUp from "./Pages/SignUp/SignUp";
import WishList from "./Pages/WishList/WishList";
import About from "./Pages/About/About";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Contact />} path="/contact-us" />
      <Route element={<Shop />} path="/shop-list" />
      <Route element={<SignIn />} path="/sign-in" />
      <Route element={<Cart />} path="/cart-page" />
      <Route element={<SignUp />} path="/sign-up" />
      <Route element={<WishList />} path="/Wishlist-page" />
      <Route element={<About />} path="/About-page" />
    </Routes>
  );
}

export default App;
