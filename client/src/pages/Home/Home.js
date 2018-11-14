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

                    <h1 style={{ fontSize: "7em", color: "white" }}>James Kariuki</h1>
                </Col>

                <Col size="md-12 sm-12">

                    <h1 style={{ color: "white" }}>Looking for a Web Developer?</h1>
                    <h1 style={{ color: "white" }}>You've come to the right place.  Click here to view my work!</h1>
                </Col>

            </Row>
        </div>

    </Container>

export default Home;

