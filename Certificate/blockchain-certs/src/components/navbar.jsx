import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
class Navhead extends Component {
  state = {};
  render() {
    return (
      <Navbar >
        <Navbar.Brand  href="/">
        <img src={logo} alt="logo" height="50"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <ul className="navbar-nav me-auto">
            <li><Nav.Item className=" mt-2 mr-3 ml-3">
              <Link className="text-white" to="/">Home</Link>
            </Nav.Item></li>
            <li><Nav.Item className="mt-2 ml-3 mr-3 ">
              <Link className="text-white" to="/reg">Register</Link>
            </Nav.Item></li>
            <li><Nav.Item className="mt-2 ml-3 mr-3 ">
              <Link className="text-white" to="/intro">How it works</Link>
            </Nav.Item></li>
            <li><Nav.Item className="mt-2 ml-3 mr-3 ">
              <Link className="text-white" to="/verify">Verify</Link>
            </Nav.Item></li>
            <li><Nav.Item className="mt-2 ml-3 mr-3 ">
              <Link className="text-white" to="/view">View Certificate</Link>
            </Nav.Item></li>
            </ul>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navhead;
