import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/views/HomePage";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import ProductDetail from "./components/views/ProductDetail";
import AboutUs from "./components/views/AboutUs";
import Error404 from "./components/views/Error404";
import Header from "./components/common/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/detail" element={<ProductDetail />}></Route>
        <Route exact path="/aboutus" element={<AboutUs />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
