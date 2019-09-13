import React from "react";
import { Layout } from "antd";

import HomePageSlider from "./HomePageSlider";
import DeliveryInfo from "./DeliveryInfo";
import PopularCategories from "./PopularCategories";
import HotProducts from "./HotProducts";
import Subscription from "../../commons/Subscription";

class Home extends React.Component {
  render() {
    const { Content } = Layout;
    return (
      <div>
        <Layout>
          <Content>
            <section class="hero">
              <div class="hero-body">
                <HomePageSlider />
                <div className="margin-top-sm divider divider-long is-centered"></div>
                <DeliveryInfo />
                <hr/>
                <PopularCategories />
                <hr/>
                <HotProducts />
                <hr/>
                <Subscription />
              </div>
            </section>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Home;
