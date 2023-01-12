import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../pages/add-product";
import DetailsPage from "../pages/deails-card";
import Products from "../pages/products";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
