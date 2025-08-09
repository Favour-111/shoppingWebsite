import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}

export default App;
