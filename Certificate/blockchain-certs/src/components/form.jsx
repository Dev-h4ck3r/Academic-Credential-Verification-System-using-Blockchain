import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class Forms extends Component {
  canBeSubmitted() {
    const { fname, lname, course, email } = this.state;
    return (
      fname.length > 0 &&
      lname.length > 0 &&
      course.length > 0 &&
      email.length > 0
    );
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addcertificate = event => {
    event.preventDefault();
    this.props.addcertificate(this.state);
    //console.log(this);
  };

  state = {
    fname: "",
    lname: "",
    course: "",
    email: ""
  };
  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid flex w-full justify-center items-center"
        style={{
          height: "100 vh",
          backgroundSize: "cover"
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "60px",
            color: "white"
          }}
          className="mb-5 pt-3 text-gradient"
        >
          Create certificates on Blockchain
        </h1>
        <div
          className="w-50 container pt-3 pb-3 mx-auto p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism"
        >
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat"
            }}
            className="mb-2 text-white"
          >
            Enter the Certificate details
          </h2>
          <Form onSubmit={this.addcertificate} className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email@email.com"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Course name"
              />
            </Form.Group>
            <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
            >
              Add certificate
            </Button>
            <div className="h-[1px] w-full bg-gray-400 my-2"/>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;
