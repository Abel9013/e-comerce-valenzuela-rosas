import React, { Component } from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">ValRo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br />

      </>
    )
  }
}
