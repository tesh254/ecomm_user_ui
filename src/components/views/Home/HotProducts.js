import React from "react";
import HomeProducts from "../../containers/HomeProducts";

const HotProducts = () => (
  <section>
    <div className="center-content">
      <section>
        <span className="title is-3">Hot & New Products</span>
      </section>
    </div>
    <section className="margin-top-small">
      <HomeProducts />
    </section>
  </section>
);

export default HotProducts;
