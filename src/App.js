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
import category from "./components/categories";
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import SubCategory from "./Pages/SubCategory/SubCategory";
import View from "./Pages/View/View";
import ResultPage from "./Pages/ResultPage/ResultPage";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact-us" />
        {category.map((item) => (
          <Route
            key={item.name}
            path={`/category-${item.name}`}
            element={<Shop page={item.name} />}
          ></Route>
        ))}
        {category.map((item) =>
          item.subcategories.map((sub) => (
            <Route
              key={sub.name}
              path={`/subcategory-${sub.name}`}
              element={<SubCategory page={sub.name} />}
            />
          ))
        )}

        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<Cart />} path="/cart-page" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<WishList />} path="/Wishlist-page" />
        <Route element={<About />} path="/About-page" />
        <Route element={<View />} path="/View-page" />
        <Route element={<ResultPage />} path="/Result" />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            fontSize: "12px", // 👈 reduce font size
            padding: "8px 12px",
          },
        }}
      />
    </>
  );
}

export default App;
