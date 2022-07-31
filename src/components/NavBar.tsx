import { Component, Fragment, ReactNode } from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.js";

function AppNavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/?path=/">Knoggin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/?path=/menu-uso">Uso</Nav.Link>
            <Nav.Link href="/?path=/menu-sudo">SudoType</Nav.Link>
            <Nav.Link href="/?path=/menu-strroop">Strroop</Nav.Link>

            <NavDropdown title="Stats" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/?path=/Uso-data">Uso</NavDropdown.Item>
              <NavDropdown.Item href="/?path=/SudoType-data">
                SudoType{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="/?path=/strroop-data">
                Strroop
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="Register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppNavBar;
