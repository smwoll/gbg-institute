import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHtmlMenuClass = () => {
    const html = document.querySelector("html");
    html.classList.toggle("menu-active");
  };

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.toggleHtmlMenuClass();
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        console.log(Navbar);
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}

            <button
              name="Navigation Menu Toggle"
              aria-label="Toggle Menu"
              className={`navbar-toggler ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => {
                this.toggleHamburger();
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span className="button-label screen-reader-text">
                Toggle Navigation Menu
              </span>
              
            </button>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-links has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/team">
                Meet the Team
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
