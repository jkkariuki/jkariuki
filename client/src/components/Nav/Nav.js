import React from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {

  render() {
    const { id, style } = this.props
    return (
      < div id={id} className="dropdown show" >
        <Link style={{style, display:"inline-block"}} to="/" ><h1 style={style}>JK</h1></Link>

        <Link style={{ style }} className="btn btn-secondary  dropdown-toggle" to="/" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">


          <button style={{marginBottom:"20px"}} type="button" class="btn btn-default" aria-label="Left Align">
            <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </button>
        </Link>

        <div style={{ background: "none", fontSize: "20px" }} className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <div>
            <Link style={{ color: "white" }} className={window.location.pathname === "/" ||
              window.location.pathname === "/about"
              ? "active"
              : "dropdown-item"} to="/about">About</Link>
          </div>
          <div>
            <Link style={{ color: "white" }} className={window.location.pathname === "/" ||
              window.location.pathname === "/portfolio"
              ? "active"
              : "dropdown-item"} to="/portfolio">Portfolio</Link>
          </div>
          <div>
            <Link style={{ color: "white" }} className={window.location.pathname === "/" ||
              window.location.pathname === "/contact"
              ? "active"
              : "dropdown-item"} to="/contact">Contact</Link>
          </div>
        </div>
      </div >
    )
  }
}

Nav.propTypes = {
  style: PropTypes.string,
  id: PropTypes.string
}

export default Nav;
