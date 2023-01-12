import { useFormik } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/getData";
import { productSchema } from "../../schema";
import "./index.scss";

const AddProduct = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      imgUrl: "",
    },
    validationSchema: productSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(postData(values));
      resetForm();
    },
  });
  return (
    <div id="add-product-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Product</title>
      </Helmet>
      <div className="container">
        <div className="add-product">
          <form onSubmit={formik.handleSubmit}>
            <div className="input-control">
              <p>
                <label htmlFor="name">Name</label>
              </p>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="price">Price</label>
              </p>
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="description">Description</label>
              </p>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="2"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></textarea>
            </div>
            <div className="input-control">
              <p>
                <label htmlFor="imgUrl">Image Url</label>
              </p>
              <input
                id="imgUrl"
                name="imgUrl"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.imgUrl}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
