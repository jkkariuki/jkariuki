import React from "react";
import PropTypes from 'prop-types';

class Row extends React.Component {

  render () {
    const {id, style, fluid, children } = this.props

    return (
      <div id={id} style={{style}} className={`row${fluid ? "-fluid" : ""}`}>
      {children}
      </div>
    );
  }

}

Row.props = {
  fluid: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.string,
  id: PropTypes.string
}

export default Row;
