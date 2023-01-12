import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { Button } from "antd";

const DetailsPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const getData = async () => {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="details-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>details</title>
      </Helmet>
      <div className="container">
        <div className="details">
          <div className="card">
            <div className="img">
              <img src={product.imgUrl} alt="" />
            </div>
            <div className="about">
              <h2>{product.name}</h2>
              <div className="title">
                <p className="id">
                  <span className="name">Product Id:</span>{" "}
                  <span className="value">{product.id}</span>
                </p>
                <p className="price">
                  <span className="name">Price:</span>{" "}
                  <span className="value">{product.price}</span>
                </p>
                <p className="description">
                  <span className="name">Description:</span>{" "}
                  <span className="value">{product.description}</span>
                </p>
              </div>
              <div className="btn">
                <Button onClick={() => navigate(-1)} type="primary">
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
