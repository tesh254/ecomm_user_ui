import React from "react";
import { Link } from "react-router-dom";

const PopularCategories = () => (
  <section>
    <div className="center-content">
      <section>
        <span className="title is-3">Amazing Products</span>
      </section>
    </div>
    <section className="columns s-mobile margin-top-sm is-multiline">
      <div className="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd align-center margin-top-bottom">
        <div className="category">
          <img
            src="https://res.cloudinary.com/werick-dev/image/upload/v1567891712/z2tsu8g72n9xk0kwourz.jpg"
            alt=""
            className="image"
          />
          <Link to="/category/sneakers" className="title is-3">
            Sneakers
          </Link>
        </div>
      </div>
      <div className="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd align-center margin-top-bottom">
        <div className="category category-1">
          <img
            src="https://stockx.imgix.net/Timberland-6-Bape-X-Undefeated-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1546678307"
            alt=""
          />
          <Link to="/category/boots" className="title is-3">
            Boots
          </Link>
        </div>
      </div>
      <div className="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd align-center margin-top-bottom">
        <div className="category category-1">
          <img
            src="https://assets.gqindia.com/photos/5cdc5ae4de9b7e6daf8f44ff/master/w_1536%2cc_limit/Brogues-Andres-Sendra-Shoes-11811-Cognac-2.jpg"
            alt=""
          />
          <Link to="/category/brogues" className="title is-3">
            Brogues
          </Link>
        </div>
      </div>
    </section>
  </section>
);

export default PopularCategories;
