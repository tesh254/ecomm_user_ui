import React from "react";
import { Link } from "react-router-dom";
import { Icon, Badge } from "antd";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";

class Nav extends React.Component {
  state = {
    user: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      user: { ...props.user }
    });
  }

  showAuthButtons = () => {
    const { user } = this.props;

    if (!this.handleAuthButtons()) {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-black" to="/signup">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link">Hi {user.name}</Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item">
                <Icon type="user-add" style={{ marginRight: "5px" }} />
                Add user
              </Link>
              <Link className="navbar-item">
                <Icon type="message" style={{ marginRight: "5px" }} />
                Contact
              </Link>
              <Link className="navbar-item" onClick={this.handleLogout}>
                <Icon type="logout" style={{ marginRight: "5px" }} />
                Logout
              </Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item">Report an issue</Link>
            </div>
          </div>
        </div>
      );
    }
  };

  handleLogout = () => {
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("refresh_token");

    window.location.href = "/login";
  };

  handleAuthButtons = () => {
    const token = localStorage.getItem("jwt_token");

    if (token) {
      try {
        const decoded = jwt_decode(token);

        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return true;
      }
    } else {
      return false;
    }
  };

  render() {
    const { user } = this.props;
    return (
      <nav
        className="navbar border-bottom is-black is-fixed"
        role="navigation"
        aria-label="main navigation"
        style={{ width: "100%" }}
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <b>EcomUser</b>
          </Link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/products">
              <Icon type="shop" style={{ marginRight: "5px" }} />
              Shop
            </Link>
            <Link className="navbar-item" to="/products">
              <Badge count={5}>
                <Icon
                  type="shopping-cart"
                  style={{ fontSize: "25px", marginRight: "5px" }}
                />
              </Badge>
            </Link>
          </div>
          {this.showAuthButtons()}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  user: PropTypes.string
};

Nav.defaultProps = {
  user: {}
};

const mapStateToProps = state => ({
  user: state.login.user
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Nav)
);
