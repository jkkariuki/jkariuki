import React from "react";
import PropTypes from 'prop-types';
import "./ProjectCard.css";
import projects from "../../projects.json"

class ProjectCard extends React.Component {

  render () {
    const { title, image, description, url, id } = this.props
    return (
      <div style={{display: "inline-block"}} className="card">
        <div id={"image-" + id} className="img-container">
        </div>
        <div className="content">
          <ul>
            <li>
              <strong><a href={url}>{url}</a></strong> 
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
}

export default ProjectCard;
