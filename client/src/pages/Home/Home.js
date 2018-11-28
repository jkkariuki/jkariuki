import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Home.css"
import Nav from "../../components/Nav/"

const Home = () =>
    <Container id={"homeContainer"} style={{ marginTop: "0%" }} fluid>
        <Nav id="logo" style={{ color: "white" }} />
        <div id={"nameDiv"}>

            <Row>
                <Col size="md-12 sm-12">

                    <h2 style={{ fontSize: "4em", color: "white" }}>Let's Build Something Today!</h2>
                    <h2 style={{ fontSize: "3em", color: "white" }}>If Not Now, then When?</h2>
                </Col>

                <Col size="md-12 sm-12">
                    <h2 style={{ color: "white", marginRight:"3px", fontSize: "2em" }}>If Not You, then Who?</h2>
                    
                </Col>

            </Row>
        </div>

    </Container>

export default Home;

