import React from "react";
import { Icon } from "antd";

const Info = ({ icon, title, description }) => (
  <section className="column is-full-mobile is-one-third-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd align-center margin-top-bottom">
    <div>
      <Icon type={`${icon}`} style={{ fontSize: "30pt" }} />
      <br />
      <span className="title is-4">{title}</span>
      <br />
      <span className="subtitle is-6">{description}</span>
    </div>
  </section>
);

export default Info;
