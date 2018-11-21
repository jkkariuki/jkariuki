import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Services.css";
import Nav from "../../components/Nav/";
import Frontend from "../../images/Front-End.png";
import Backend from "../../images/Back-End.png";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import { Link, Redirect } from "react-router-dom";


const Services = () =>

    <div>
    <Nav id="nav" />
    <Container id={"servicesContainer"} style={{ marginTop: "0%", backgroundColor: "#4c4947" }} fluid>
        <div style={{ backgroundColor: "#4c4947" }}>
            <Row  >
                <Col id="servicesHeader" size="md-12 sm-12">
                    <h1 style={{ color: "#6ead3a" }}> Services</h1>
                    <div >
                        <p id="serviceDescriptor">
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempor vitae diam ac efficitur. Fusce tristique condimentum vestibulum.
                        </p>
                    </div>
                </Col>
                <Col size="md-6 sm-6">
                    <div className="card" style={{ width: "350px", height: "400px", margin: "0px auto" }}>
                        <img class="card-img-top" src={Frontend} style={{ width: "100%", height: "150px", margin: "0px auto" }} alt="Card image" />
                        <div style={{ height: "100%", }} className="card-body">
                            <h4 style={{ textAlign: "center" }} class="card-title">Frontend</h4>
                            <ul style={{ textAlign: "center", listStyleType: "none", paddingLeft: "0px" }} class="card-text">
                                <li className="icon"><i className="devicon-react-original-wordmark"></i></li>
                                <li className="icon"><i class="devicon-html5-plain-wordmark"></i></li>
                                <li className="icon"><i class="devicon-css3-plain-wordmark colored"></i></li>
                                <li className="icon"><i className="devicon-bootstrap-plain-wordmark colored"></i></li>
                                <li className="icon"><i className="devicon-javascript-plain"></i></li>
                                <li className="icon"><i class="devicon-jquery-plain-wordmark colored"></i>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Col>
                <Col size="md-6 sm-6">
                    <div class="card" style={{ width: "350px", height: "400px", margin: "0px auto", marginBottom: "100px" }}>
                        <img class="card-img-top" src={Backend} style={{ width: "100%", height: "150px", margin: "0px auto" }} alt="Card image" />
                        <div id="cardBody2" class="card-body">
                            <h4 style={{ textAlign: "center" }} class="card-title">Backend</h4>
                            <ul style={{ textAlign: "center", listStyleType: "none", paddingLeft: "0px" }} class="card-text">
                                <li className="icon"><div ><i class="devicon-mongodb-plain-wordmark colored"></i></div></li>
                                <li className="icon"><div ><i class="devicon-nodejs-plain-wordmark"></i></div></li>
                                <li className="icon"><div ><i className="devicon-javascript-plain"></i></div></li>
                                <li className="icon"><div><i className="devicon-express-original-wordmark"></i>
                                </div></li>
                                <li className="icon"><div><i className="devicon-mysql-plain-wordmark colored"></i>
                                </div></li>
                            </ul>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
        <Row>
        <Col id="footDiv" size="md-12  sm-12" >

                <a target="_blank" href={"http://www.linkedin.com/in/james-kariuki"}><img className="icon" src={linkedin} /></a>
                <a target="_blank" href={"http://www.linkedin.com/in/james-kariuki"}><img className="icon" src={github} /></a>

        </Col>
        </Row>

    </Container>
    </div>

export default Services;
