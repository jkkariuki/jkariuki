import React from "react";
import PropTypes from 'prop-types';

class Col extends React.Component {

  render () {

    

    const {id, size, children } = this.props

    const klass = size.split(" ").map(size => "col-" + size).join(" ");

    return (
      <div id={id} style={{textAlign: 'center'}} className={klass}> 
          {children}
      </div>
    );
  }
};

Col.props = {
  size: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string
}

export default Col;