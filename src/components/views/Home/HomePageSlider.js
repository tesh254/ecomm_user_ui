import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Icon } from "antd";

const SingleSlider = ({ category }) => (
  <div className="item">
    <Link to={`/category/${category}`} className="title is-2">
      {category}
    </Link>
  </div>
);

class HomePageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        <div
          className="item item-1"
          style={{
            backgroundImage:
              "https://res.cloudinary.com/werick-dev/image/upload/v1567893154/r8xuytbyz22fgyzb1zj8.jpg"
          }}
        >
          <Link to="/category/sneakers" className="title is-2">
            <h3 className="slider-title">
              Limited Sneakers
              <br />
              <Icon type="arrow-right" />
            </h3>
          </Link>
        </div>
        <div className="item item-2">
          <Link to="/category/boots" className="title is-2">
            <h3 className="slider-title">
              Awesome Boots
              <br />
              <Icon type="arrow-right" />
            </h3>
          </Link>
        </div>
        <div className="item item-3">
          <Link to="/category/brogues" className="title is-2">
            <h3 className="slider-title">
              Classic Brogues
              <br/>
              <Icon type="arrow-right" />
            </h3>
          </Link>
        </div>
      </Slider>
    );
  }
}

export default HomePageSlider;
