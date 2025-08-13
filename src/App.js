import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Contact />} path="/contact-us" />
    </Routes>
  );
}

export default App;
