import React from "react";

const Subscribe = () => (
  <section className="margin-top-bottom-lg">
    <div className="center-content">
      <section>
        <span className="title is-3">Subscribe</span>
        <br/>
        <br/>
        <span>
          Please subscribe to our newsletter & get updates on our latest and exclusive offers! <br /> Get Promo
          codes in your inbox. You can unsubscribe at any time
        </span>
        <form className="margin-top-small">
          <input
            type="email"
            className="border-bottom-input"
            required
            placeholder="Enter your email"
          />
          <br />
          <br />
          <button className="button is-fullwidth is-black">Subscribe</button>
        </form>
      </section>
    </div>
  </section>
);

export default Subscribe;
