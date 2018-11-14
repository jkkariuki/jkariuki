import React from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../projects.json";
// import "./App.css";
import { Col, Row, Container, Wrapper } from "../../components/Grid";
import "./Projects.css"
import Nav from "../../components/Nav/"

class Projects extends React.Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props);
    this.state = {
      projects
    };
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>

        <Container style={{ background: "#222022" }} fluid>
          <Nav style={{ display: "block", marginBottom: "20px", color: "#6ead3a" }} />

          <div id={"projectContainer"}>
            <Row id="slideFromLeft" className="hvr-float ">
              <Col id="GAMRid"  style={{ display: "inline-block" }}
                size="md-5  sm-12">

                {/* <ProjectCard
                id={projects[0].id}
                key={projects[0].id}
                title={projects[0].title}
                image={projects[0].image}
                description={projects[0].description}
                url={projects[0].url}
              /> */}
              </Col>

              <Col id="GAMRrow" size="md-7  sm-12">
                <div className="appDescription" style={{ display: "inline-block" }}><p>A video game search engine that allows users to find media related to any video game on any of the main video game platforms.

                  The app uses the Youtube, GiantBomb, and IGN News API's.

                  Live Link https://jkkariuki.github.io/GAMR./

                Built With HTML, Bootstrap, jQuery</p>
                </div>
              </Col>
            </Row>
            <Row id="slideFromRight">

              <Col style={{marginTop: "15px"}} size="md-7  sm-12 savor">
                <div id="SavorRow" className="appDescription" style={{ display: "inline-block" }}>
                  <p>Savor

                    Grocery Item app that allows users to find recipes based on items currently in their food pantry.

                    The app uses the Edamam API which boasts a robust database of recipes.

                    Live Link https://sheltered-tundra-23907.herokuapp.com/

                    Built With MongoDB, Express, React, NodeJs, PassportJs.
                  </p>
                </div>
              </Col>
              <Col id="Savorid" style={{ display: "inline-block" }}
                size="md-5  sm-12">
                {/* 
              <ProjectCard
                id={projects[1].id}
                key={projects[1].id}
                title={projects[1].title}
                image={projects[1].image}
                description={projects[1].description}
                url={projects[1].url}
              /> */}
              </Col>
            </Row>
            <Row id="slideFromLeft">


              <Col id="NYTid" style={{ display: "inline-block" }}
                size="md-5  sm-12">

                {/* <ProjectCard
                id={projects[2].id}
                key={projects[2].id}
                title={projects[2].title}
                image={projects[2].image}
                description={projects[2].description}
                url={projects[2].url}
              /> */}
              </Col>
              <Col id="NYTrow" size="md-7  sm-12">
                <div className="appDescription" style={{ display: "inline-block" }}><p> Full Stack application which allows users to search for, save , and delete New York Times Articles ● Users can narrow their searches using key words and specific dates ● Sole developer employing MongoDB, Express, React, Node.js ● https://evening-shore-59067.herokuapp.com/  </p></div> </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Projects;
