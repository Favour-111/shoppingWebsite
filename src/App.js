import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Contact />} path="/contact-us" />
      <Route element={<Shop />} path="/shop-list" />
      <Route element={<SignIn />} path="/sign-in" />
    </Routes>
  );
}

export default App;
