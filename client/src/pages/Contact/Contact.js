import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import Nav from "../../components/Nav/"
import "./Contact.css";
import linkedin from "../../images/linkedin.png"
import github from "../../images/github.png"
import { Link, Redirect } from "react-router-dom";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email:"",
      message: ""
    };
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if(this.state.firstName && this.state.lastName && this.state.email){
      API.saveLead({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        message: this.state.message
      })
        .then(res => res.data)
        .catch(err => console.log(err));
    }
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}, thank you for your message. I will reach out to you within 24hrs`);
    this.setState({
      firstName: "",
      lastName: "",
      email:"",
      message:""
      
    });


  };

  render() {
    return (
      <div id="mainContainer"> 
      <Container id="contactContainer" fluid >
        <Nav/>
       
        <Row id="fadeIn">
        <Col size="md-4  sm-12">
        </Col>
          <Col size="md-4  sm-12">
          <strong><h1 style={{ color: "white" }}>Let's Work Together...</h1></strong>


            <Input value={this.state.firstName} onChange={this.handleInputChange}
            name="firstName"
            placeholder="First Name"/>
            
            <Input value={this.state.lastName} onChange={this.handleInputChange}
            name="lastName"
            placeholder="Last Name"/>

            <Input value={this.state.email} onChange={this.handleInputChange}
            name="email"
            placeholder="e-mail"/>

            <TextArea style={{height: "200px"}} value={this.state.message} onChange={this.handleInputChange}
            name="message"
            placeholder="How can I help you"/>

            <FormBtn disabled={!(this.state.firstName && this.state.lastName && this.state.email)} onClick={this.handleFormSubmit}>Submit</FormBtn>
          </Col>
          <Col size="md-4">
          </Col>
          <Col size="md-12  sm-12" >
          
          <div>
            
            <a target="_blank" href={"http://www.linkedin.com/in/james-kariuki"}><img className="icon" src={linkedin}/></a>
            <a target="_blank" href={"http://www.linkedin.com/in/james-kariuki"}><img className="icon" src={github}/></a>

          </div>
          </Col>
          
        </Row>
      </Container>
      </div>
    )
  }
}
export default Contact;

