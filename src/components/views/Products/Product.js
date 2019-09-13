import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import StockStatus from "../../commons/StockStatus";
const Product = ({ product, addToCart }) => (
  <section className="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-quarter-widescreen is-one-quarter-fullhd">
    <div className="card">
      <div className="card-image">
        <figure className="image is-3by2">
          <img src={product.images[1]} alt={product.name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <Link to={`/products/${product._id}`} className="title is-5">
            {product.name}
          </Link>
        </div>
        <div className="content is-grouped">
          <nav className="is-mobile">
            <p className="subtitle is-5">
              Ksh. <b>{product.amount}</b>
              <Icon
                type="shopping-cart"
                style={{ marginLeft: "135px" }}
                onClick={() => addToCart(product)}
              />
            </p>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default Product;
