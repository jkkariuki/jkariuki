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
                    <h1 style={{color: "#6ead3a"}}>James Kariuki</h1>
                    Cras id massa ut leo faucibus gravida. Quisque eu lacus gravida, auctor tortor ac, elementum ligula. Quisque ac odio semper, facilisis ante in, ornare purus. Proin convallis neque vehicula lorem feugiat accumsan. Integer commodo ipsum lorem, ac sodales lectus rhoncus nec. Phasellus consectetur arcu ac lectus porttitor dapibus. Cras mattis venenatis vulputate. Pellentesque mauris nunc, luctus nec nunc ac, laoreet tristique diam. Aenean ac efficitur dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    
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

