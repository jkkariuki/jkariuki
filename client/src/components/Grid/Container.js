import React from "react";
import PropTypes from 'prop-types';

class Container extends React.Component {

  render () {
    const { id , style, fluid, children } = this.props

    return (
      <div id={id} style={style} className={`container${fluid ? "-fluid" : ""}`} >
        {children}
      </div>
    );
  }

}

Container.props = {
  fluid: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  id: PropTypes.string
}

export default Container;
