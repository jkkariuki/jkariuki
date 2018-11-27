import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav/"
import "./About.css";
import image from "../../images/profileImage.jpg";
import { Link } from "react-router-dom";

const About = () =>
    <Container id={"aboutContainer"} fluid >
            <Nav id={"nav"} />

        <Row style={{ backgroundColor: "green" }}>




            <Col  id={"imageDiv"} size="md-6 sm-12">


                <div >
                    {/* <img alt="" style={{ height: "100%", width: "100%" }} s /> */}



                </div>

            </Col>
            <Col size="md-6 sm-12">

                <p id="aboutMe" style={{ paddingTop: "40px", paddingBottom:"70px",color: "#4c4947", fontSize: "20px" }}>
                    <h1 style={{color: "#6ead3a", marginRight:"5px"}}>Hi. I'm James Kariuki,</h1>
                    and I am a New York City based Web Developer. I have a diverse set of skills which incorporate my knowledge of several frontend and backend technologies. As a fullstack developer, I have all the tools to bring your project from concept to completion. 
                    
                    <break></break>
                    
                    <Row>
                        <Link to="/services">
                        
                        <i style={{display: "inline-block", marginTop:"50px"}} class="fas fa-angle-double-down"></i>
                        </Link>

                    </Row>

                   
                </p>
            </Col>

        </Row>
        


    </Container>

export default About;

