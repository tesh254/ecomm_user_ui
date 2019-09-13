import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchProducts } from "../../redux/actions/products";
import Loader from "../commons/Loader";
import NoProducts from "../views/Products/NoProducts";
import Product from "../views/Products/Product";

class HomeProducts extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { isLoading, products } = this.props;
    return (
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {products.length === 0 ? (
              <NoProducts />
            ) : (
              <div className="columns is-mobile is-multiline">
                {products.slice(0, 4).map(product => (
                  <Product product={product} addToCart={() => {}} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    );
  }
}

HomeProducts.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

HomeProducts.defaultProps = {
  products: [],
  isLoading: true
};

const mapStateToProps = state => ({
  products: state.products.products,
  isLoading: state.products.isLoading
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(HomeProducts);
