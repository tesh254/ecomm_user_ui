import React from "react";
import Info from "./Info";

const DeliveryInfo = () => (
  <section className="columns is-mobile margin-top-small is-multiline">
    <Info
      icon="car"
      title="Free Shipping"
      description="Free shipping for orders above Ksh. 9,999"
    />
    <Info
      icon="wallet"
      title="Secure Payments"
      description="Guranteed secure Mpesa payments"
    />
    <Info
      icon="message"
      title="24/7 Support"
      description="Contact us 24hrs a day a week"
    />
  </section>
);

export default DeliveryInfo;
