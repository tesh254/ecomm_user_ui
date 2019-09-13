import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import StockStatus from "../../commons/StockStatus";
import Category from "../../commons/Category";

const ProductInfo = ({
  category,
  name,
  description,
  amount,
  quantity,
  _id,
  handleAddToCart
}) => (
  <div className="column is-one-quater margin-top-lg">
    <span className="title is-3">{name}</span>
    <br />
    <p className="subtitle is-6">{description}</p>
    <hr />
    <p className="subtitle is-5">
      {" "}
      <span className="has-text-left">
        Qty <b>{quantity}</b>
      </span>{" "}
      <span className="has-text-right">
        {" "}
        Ksh. <b>{amount}</b>
      </span>
    </p>
    <StockStatus quantity={quantity} />
    <Category category={category.name} />
    <hr />
    <button
      className="button is-black is-medium"
      onClick={() => handleAddToCart()}
    >
      <Icon type="shopping-cart" style={{ marginRight: "5px" }} /> Add to Cart
    </button>
  </div>
);

export default ProductInfo;
