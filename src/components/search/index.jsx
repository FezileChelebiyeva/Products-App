import React, { useState } from "react";
import "./index.scss";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/slice/getData";

const SearchComp = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(fetchData(e.target.value));
  };
  return (
    <div id="search">
      <div className="container">
        <div className="serach">
          <Input
            onChange={(e) => handleSearch(e)}
            style={{ width: "600px" }}
            placeholder="search product"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComp;
